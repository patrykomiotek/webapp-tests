import { type ComponentProps } from "react";

// enum ColorsValues {
//   Turquoise = "#1ABC9C",
//   Sunflower = "#F1C40F",
//   Wisteria = "#8E44AD",
//   Asphalt = "#34495E",
// }

const colors = {
  Turquoise: "#1ABC9C",
  Sunflower: "#F1C40F",
  Wisteria: "#8E44AD",
  Asphalt: "#34495E",
};
type ColorsValues = keyof typeof colors;

// interface Props {
//   children: string;
//   className?: string;
//   color?: ColorsValues;
//   bgcolor?: ColorsValues;
//   onClick?: () => void;
// }

type Props = ComponentProps<"button"> & {
  color?: ColorsValues;
  bgcolor?: ColorsValues;
};

export const Button = ({
  children,
  color = "Asphalt",
  bgcolor = "Sunflower",
  ...rest
}: Props) => {
  return (
    <button
      style={{
        color: colors[color],
        backgroundColor: colors[bgcolor],
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
