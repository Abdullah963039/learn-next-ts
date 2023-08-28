"use client";

import type { ButtonProps } from "@/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Button({
  isDisabled,
  type,
  title,
  containerClassName,

  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={isDisabled}
      type={type ?? "button"}
      className={twMerge("custom-btn", containerClassName)}
    >
      <span className={twMerge("flex-1")}>{title}</span>
    </button>
  );
}
