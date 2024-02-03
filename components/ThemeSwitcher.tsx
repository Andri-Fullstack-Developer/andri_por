"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMdPartlySunny, IoMdCloudyNight } from "react-icons/io";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="text-white"
    >
      {theme === "dark" ? <IoMdCloudyNight /> : <IoMdPartlySunny />}
    </button>
  );
};

export default ThemeSwitcher;
