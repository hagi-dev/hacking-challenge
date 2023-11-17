export interface ButtonProps {
  name?: string;
  onClick: (name?: TYPE_ACTION_BUTTON_ICON) => void;
  text: string;
  version?: string;
  isActive?: boolean;
  symbol?: React.ReactNode;
  color?: string;
}
