export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  isDisabled?: boolean;
  type?: string;
  containerClassName?: string;
  textStyles?: string;
  rightIcon?: string;
};

export type SearchManufactureProps = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

export type CarCardProps = {
  car: Car;
};

export type Car = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type CarDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
};
