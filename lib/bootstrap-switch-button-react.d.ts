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

interface BootstrapSwitchButtonProps {
  /**
   * Function to call when the SwitchButton is changed
   */
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  onlabel?: string;
  offlabel?: string;
  offstyle?: Colors | ColorsOutline;
  onstyle?: Colors | ColorsOutline;
  style?: string;
}

declare class BootstrapSwitchButton extends React.Component<
  BootstrapSwitchButtonProps
> {}

export default BootstrapSwitchButton;
