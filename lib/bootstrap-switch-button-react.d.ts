import * as React from "react";

export type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type ColorsOutline =
  | "outline-primary"
  | "outline-secondary"
  | "outline-success"
  | "outline-danger"
  | "outline-warning"
  | "outline-info"
  | "outline-light"
  | "outline-dark";

interface styleType {
  switch?: React.CSSProperties,
  label?: React.CSSProperties
}

interface BootstrapSwitchButtonProps {
  /**
   * Function to call when the SwitchButton is changed
   */
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
  onlabel?: string;
  offlabel?: string;
  onstyle?: Colors | ColorsOutline;
  offstyle?: Colors | ColorsOutline;
  size?: "xs" | "sm" | "lg";
  style?: styleType;
  className?: string;
  width?: number;
  height?: number;
}

declare class BootstrapSwitchButton extends React.Component<
  BootstrapSwitchButtonProps
> {}

export default BootstrapSwitchButton;
