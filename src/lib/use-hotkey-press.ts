import { useEffect, useRef } from "react";

type PressClass = "pressed" | "pressed-sm";

interface HotkeyBinding {
  /** Keys that trigger this binding (e.g., ["Enter", " "] or ["a", "1"]) */
  keys: string[];
  /** Ref to the button element */
  ref: React.RefObject<HTMLElement | null>;
  /** Callback when key is released */
  onTrigger: () => void;
  /** CSS class to apply ("pressed" for 4px, "pressed-sm" for 2px) */
  pressClass?: PressClass;
}

/**
 * Hook that binds hotkeys to buttons with proper press animations.
 * Adds pressed class on keydown, removes it and triggers callback on keyup.
 */
export function useHotkeyPress(bindings: HotkeyBinding[]) {
  // Track which key is currently pressing which element
  const activePress = useRef<{ key: string; element: HTMLElement; pressClass: PressClass } | null>(
    null,
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Ignore if already pressing (key repeat)
      if (activePress.current) {
        return;
      }

      // Find matching binding
      for (const binding of bindings) {
        const matchedKey = binding.keys.find((k) => k.toLowerCase() === e.key.toLowerCase());

        if (matchedKey && binding.ref.current) {
          e.preventDefault();
          const pressClass = binding.pressClass ?? "pressed";
          binding.ref.current.classList.add(pressClass);
          activePress.current = {
            key: e.key.toLowerCase(),
            element: binding.ref.current,
            pressClass,
          };
          break;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!activePress.current) {
        return;
      }

      // Only release if it's the same key that started the press
      if (e.key.toLowerCase() !== activePress.current.key) {
        return;
      }

      const { element, pressClass } = activePress.current;
      element.classList.remove(pressClass);

      // Find the binding to get the callback
      for (const binding of bindings) {
        if (binding.ref.current === element) {
          binding.onTrigger();
          break;
        }
      }

      activePress.current = null;
    };

    // Also handle blur to clean up if user switches windows while pressing
    const handleBlur = () => {
      if (activePress.current) {
        activePress.current.element.classList.remove(activePress.current.pressClass);
        activePress.current = null;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, [bindings]);
}
