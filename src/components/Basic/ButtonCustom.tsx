import { Button } from "antd"
import { FC, ReactNode } from "react"
import { BaseButtonProps } from "antd/es/button/button"
import { classNames } from "@/util/Common.ts"
type Props = BaseButtonProps & {
  title?: string
  className?: string
  buttonSize?: "small" | "normal" | "large" | "mini"
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "info" | "light" | "dark" | "outline"
  onClick?: () => void
  icon?: ReactNode
  iconPlacement?: "left" | "right"
  textClassName?: string
  disabled?: boolean
}
export const ButtonCustom: FC<Props> = ({ title, icon, disabled, iconPlacement = "left", textClassName, onClick, className, buttonSize = "normal", variant = "primary", ...props }) => {
  return (
    <Button
      type="primary"
      className={classNames(
        "active:bg-primary",
        buttonSize === "large" && "px-10 h-15 text-lg",
        buttonSize === "normal" && "px-5 h-11.5 text-base rounded-[10px]",
        buttonSize === "small" && "px-[17.28px] h-11 text-base",
        buttonSize === "mini" && "px-[15px] h-9.5 rounded-[10px] text-xs",
        variant === "dark" && "active:bg-black-900 bg-black-800 text-white hover:bg-black-500",
        variant === "outline" && "active:border-primary hover:border-primary active:bg-white border-black-900 bg-white shadow-none text-black-550",
        disabled && "cursor-not-allowed text-black-550 active:bg-black-100 bg-black-100",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {iconPlacement === "left" && icon}
      {title && <span className={classNames("capitalize", textClassName)}>{title}</span>}
      {iconPlacement === "right" && icon}
    </Button>
  )
}
