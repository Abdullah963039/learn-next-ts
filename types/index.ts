export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  isDisabled?: boolean;
  type?: string;
  containerClassName?: string;
};

export type SearchManufactureProps = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};
