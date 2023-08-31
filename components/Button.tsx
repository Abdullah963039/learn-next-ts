"use client";

import type { ButtonProps } from "@/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Button({
  isDisabled,
  type,
  title,
  containerClassName,
  textStyles,
  rightIcon,

  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={isDisabled}
      type={type ?? "button"}
      className={twMerge("custom-btn", containerClassName)}
    >
      <span className={twMerge("flex-1", textStyles)}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right Icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
