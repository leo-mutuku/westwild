import { twMerge } from "tailwind-merge";

interface BoxProps {
    children:React.ReactNode;
    classname?:string;
}
export const Box:React.FC<BoxProps> = ({
    children,
    classname
}) => {
  return (
    <main><div
    className={twMerge(`
    bg-neutral-900
    rounded-lg
    h-ht
    `,
    classname)}>{children}</div></main>
  )
}
