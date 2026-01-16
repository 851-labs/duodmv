import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  cloudflare: {
    wrangler: {
      name: "duodmv",
      preview_urls: true,
      placement: {
        mode: "smart",
      },
      routes: [
        {
          pattern: "duodmv.851.sh",
          custom_domain: true,
        },
      ],
      observability: {
        enabled: true,
        head_sampling_rate: 1.0,
        logs: {
          enabled: true,
          invocation_logs: true,
        },
      },
    },
  },
});
