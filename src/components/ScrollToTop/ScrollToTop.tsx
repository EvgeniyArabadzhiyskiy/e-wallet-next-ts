"use client";

import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);
  return null;
}

export default ScrollToTop;
