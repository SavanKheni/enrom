"use client";
import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return scrollY;
};
