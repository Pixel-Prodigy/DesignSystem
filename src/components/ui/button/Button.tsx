import { forwardRef } from "react";
import { buttonVariants } from "./button-variants";
import { ButtonProps } from "./type";
import { cn } from "../../../lib/util";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      icon,
      prefix,
      prefixStyles,
      suffix,
      suffixStyles,
      className,
      tone,
      shape,
      variant,
      size,
      children,
      fullWidth,
      ...restProps
    } = props;

    if (icon) {
      return (
        <button
          ref={ref}
          className={cn(
            "shrink-0 justify-center ",
            buttonVariants({ className, size, shape, tone, variant })
          )}
          {...restProps}
        >
          {icon}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ fullWidth, className, size, shape, tone, variant })
        )}
      >
        {prefix && (
          <span className={cn("flex-none", prefixStyles)}>{prefix}</span>
        )}
        {children}
        {suffix && (
          <span className={cn("flex-none", suffixStyles)}>{suffix}</span>
        )}
      </button>
    );
  }
);
