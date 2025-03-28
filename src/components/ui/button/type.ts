import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, ReactNode, forwardRef } from "react";
import { buttonVariants } from "./button-variants";

type ButtonBaseProps = {
  fullWidth?: boolean;
  prefix?: ReactNode;
  prefixStyles?: string;
  suffix?: ReactNode;
  suffixStyles?: string;
  icon?: ReactNode;
};

export type ButtonProps = VariantProps<typeof buttonVariants> &
  Omit<
    ComponentPropsWithRef<"button">,
    keyof ButtonBaseProps | keyof VariantProps<typeof buttonVariants>
  > &
  ButtonBaseProps;
