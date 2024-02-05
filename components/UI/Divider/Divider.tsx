interface DividerProps {
  color?: string;
}

export default function Divider({ color }: DividerProps) {
  let classes = "w-10 h-2 my-4 bg-tmbc";

  if (color === "white") classes = "w-10 h-2 my-4 bg-white";
  if (color === "black") classes = "w-10 h-2 my-4 bg-black";

  return <div className={classes}></div>;
}
