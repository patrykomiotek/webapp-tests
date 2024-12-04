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

interface Props {
  children: string;
  className?: string;
  color?: ColorsValues;
  bgcolor?: ColorsValues;
}
export const Button = ({
  children,
  className,
  color = "Asphalt",
  bgcolor = "Sunflower",
}: Props) => {
  return (
    <button
      className={className}
      style={{
        color: colors[color],
        backgroundColor: colors[bgcolor],
      }}
    >
      {children}
    </button>
  );
};
