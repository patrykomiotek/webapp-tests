import { type ComponentProps } from "react";
import { classMerge } from "utils/cn";

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
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={classMerge(
        "my-4 py-2 px-4 cursor-pointer text-md rounded-md transition-colors hover:opacity-85",
        className
      )}
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
