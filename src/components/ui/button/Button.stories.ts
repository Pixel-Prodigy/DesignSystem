import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";
import { Button } from "./Button";
import { buttonVariants } from "./button-variants";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["basic", "outline", "plain"],
    },
    tone: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "critical",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["default", "square", "circle"],
    },
    fullWidth: {
      control: "boolean",
    },
    children: {
      control: "text",
      defaultValue: "Button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "basic",
    tone: "default",
    size: "md",
    shape: "default",
    fullWidth: false,
  },
  render: (args: any) => (
    <Button className={clsx(buttonVariants(args))}>{args.children}</Button>
  ),
};
