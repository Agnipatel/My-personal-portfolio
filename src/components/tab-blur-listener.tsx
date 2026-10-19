"use client";

import { useEffect } from "react";

export function TabBlurListener() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleBlur = () => {
      document.title = "Come back! 👋 | Agni Singh";
    };

    const handleFocus = () => {
      document.title = originalTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}
