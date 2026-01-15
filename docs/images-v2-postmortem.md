# Images v2 postmortem

This document captures how we extracted illustrations from the CA driver
handbook PDF, the exact CLI commands used, and the results. The working
`images-v2/` artifacts were deleted after review; this file is the durable
record.

## Goal

Extract all illustrations as raw images with correct colors and minimal noise.

## Source

- PDF: `ca-driver-handbook.pdf`

## Extraction attempts

### Poppler: `pdfimages`

Command (run before cleanup):

```
pdfimages -all ca-driver-handbook.pdf images-v2/original/pdfimages/handbook
```

Result:

- Extracted embedded image objects in their native formats (JPG/PNG/TIFF).
- Many outputs displayed inverted/incorrect colors (likely CMYK/ICC issues).

### MuPDF: `mutool extract`

Command (no ICC conversion + RGB, run before cleanup):

```
mutool extract -N -r ca-driver-handbook.pdf
```

Run inside `images-v2/original/mutool/` before cleanup.

Result:

- Produced the most usable color output overall.
- Still included some noisy small assets.

### Poppler: `pdftocairo` (rendered pages)

Command (run before cleanup):

```
pdftocairo -png ca-driver-handbook.pdf images-v2/original/pdftocairo/handbook
```

Result:

- Good color fidelity.
- Full-page renders only; not isolated illustrations.

## Normalization pipeline

Normalization rules (implemented in `scripts/normalize-pdf-extracts.ts` at the time):

- Convert TIFF to PNG.
- Convert to PNG for certain strategies.
- Skip images with width or height <= 40 pixels.
- Output consistent names like `<tool>-0001.png`.

Command (run before cleanup):

```
bun scripts/normalize-pdf-extracts.ts
```

Base normalized outputs (deleted after review):

- `images-v2/normalized/pdfimages/`
- `images-v2/normalized/mutool/`
- `images-v2/normalized/pdftocairo/`

## Color correction experiments

### ImageMagick variants

Commands are embedded in the normalizer:

- `pdfimages-imagemagick`: `magick input -colorspace sRGB output`
- `mutool-imagemagick`: `magick input -colorspace sRGB -auto-level output`
- `*-imagemagick-invert`: `magick input -colorspace CMYK -negate -colorspace sRGB output`

Outputs (deleted after review):

- `images-v2/normalized/pdfimages-imagemagick/`
- `images-v2/normalized/pdfimages-imagemagick-invert/`
- `images-v2/normalized/mutool-imagemagick/`
- `images-v2/normalized/mutool-imagemagick-invert/`

Outcome:

- Did not fix `pdfimages` inverted colors.
- `mutool` variants looked similar to base output.

### Ghostscript variants

Commands are embedded in the normalizer:

- `gs -dSAFER -dBATCH -dNOPAUSE -dQUIET -dUseCIEColor -sColorConversionStrategy=RGB -sDEVICE=pngalpha -sOutputFile=... <temp.pdf>`

Note:

- Inputs were wrapped into temporary PDFs because Ghostscript would not read
  some raw image formats directly.

Outputs (deleted after review):

- `images-v2/normalized/pdfimages-ghostscript/`
- `images-v2/normalized/mutool-ghostscript/`

Outcome:

- Did not resolve `pdfimages` inversion.
- `mutool` variants remained close to base.

## Final selection

Best results (closest to macOS Preview):

- `images-v2/final/` (flattened copy of the `mutool` normalized set).

## Learnings

- `pdfimages` produced inverted/incorrect colors even after multiple conversions.
- ImageMagick and Ghostscript did not fix `pdfimages` color inversion.
- `mutool` base outputs were the most acceptable.
- `pdftocairo` renders looked good but were not cropped to illustrations.

## Next steps (if revisited)

- Render-based pipeline (pdftocairo + auto-crop) for photo-like assets.
- Keep embedded extraction for vector diagrams where it is accurate.
