import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "shrink-0 max-w-max focus:ring-2 focus:ring-focus [&_svg]:size-4 text-bodyMd items-center leading-bodyMd flex font-medium gap-2 rounded-lg",
  {
    variants: {
      variant: {
        basic: "border",
        outline: "border",
        plain: "",
      },

      //  tone styling is  defined inside of the compound styles
      tone: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        critical: "",
      },

      size: {
        xs: "px-2 h-7 [&_svg]:size-3",
        sm: "px-2 h-7",
        md: "px-4 h-9",
        lg: "px-6 h-11",
      },

      shape: {
        default: "",
        square: "max-w-full p-0",
        circle: "max-w-full p-0 rounded-full",
      },
      fullWidth: {
        true: "w-full max-w-full",
      },
    },

    compoundVariants: [
      //   Default

      {
        tone: "default",
        variant: "basic",
        className: " bg-default hover:bg-hovered active:bg-pressed",
      },
      {
        tone: "default",
        variant: "outline",
        className: "hover:bg-hovered active:bg-pressed",
      },

      {
        tone: "default",
        variant: "plain",
        className: "hover:underline h-7 px-2 border-0",
      },

      //   Primary

      {
        tone: "primary",
        variant: "basic",
        className:
          "text-on-primary bg-primary hover:bg-primary-hovered active:bg-primary-pressed",
      },
      {
        tone: "primary",
        variant: "outline",
        className:
          "border-primary text-primary bg-transparent hover:bg-primary-subdued active:bg-primary-active ",
      },

      {
        tone: "primary",
        variant: "plain",
        className:
          "bg-transparent hover:bg-transparent active:bg-transparent hover:underline text-primary h-7 px-2 border-0",
      },

      // Secondary

      {
        tone: "secondary",
        variant: "basic",
        className:
          "text-on-primary bg-secondary hover:bg-secondary-hovered active:bg-secondary-pressed",
      },
      {
        tone: "secondary",
        variant: "outline",
        className:
          "border-secondary text-default bg-transparent hover:bg-secondary-subdued active:bg-secondary-active ",
      },

      {
        tone: "secondary",
        variant: "plain",
        className:
          "bg-transparent hover:bg-transparent active:bg-transparent hover:underline text-default h-7 px-2 border-0",
      },

      //   success

      {
        tone: "success",
        variant: "basic",
        className:
          "text-on-primary bg-success hover:bg-success-hovered active:bg-success-pressed",
      },
      {
        tone: "success",
        variant: "outline",
        className:
          "border-success text-success bg-transparent hover:bg-success-subdued  active:bg-success-active",
      },

      {
        tone: "success",
        variant: "plain",
        className:
          "bg-transparent hover:bg-transparent active:bg-transparent hover:underline text-success h-7 px-2 border-0",
      },

      // warning

      {
        tone: "warning",
        variant: "basic",
        className:
          "text-on-primary bg-warning hover:bg-warning-hovered active:bg-warning-pressed",
      },
      {
        tone: "warning",
        variant: "outline",
        className:
          "border-warning text-warning bg-transparent hover:bg-warning-subdued active:bg-warning-active",
      },

      {
        tone: "warning",
        variant: "plain",
        className:
          "bg-transparent hover:bg-transparent active:bg-transparent hover:underline text-warning h-7 px-2 border-0",
      },

      // critical

      {
        tone: "critical",
        variant: "basic",
        className:
          "text-on-primary bg-critical hover:bg-critical-hovered active:bg-critical-pressed",
      },
      {
        tone: "critical",
        variant: "outline",
        className:
          "border-critical text-critical bg-transparent hover:bg-critical-subdued active:bg-critical-active",
      },

      {
        tone: "critical",
        variant: "plain",
        className:
          "bg-transparent hover:bg-transparent active:bg-transparent hover:underline text-critical h-7 px-2 border-0",
      },

      /** override padding, size for circle and square   */

      {
        size: ["xs", "sm"],
        shape: ["square", "circle"],
        className: "w-6 h-6",
      },
      {
        size: "md",
        shape: ["square", "circle"],
        className: "w-7 h-7",
      },
      {
        size: "lg",
        shape: ["square", "circle"],
        className: "w-9 h-9",
      },
    ],

    defaultVariants: {
      variant: "basic",
      tone: "default",
      size: "md",
      shape: "default",
    },
  }
);
