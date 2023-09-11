import React from "react";
import "./ButtonComponent.css";

interface typeProps {
  children: string;
  height: string;
  width: string;
  borderRadius: string;
  borderWith: string;
  otherProps: any;
}
const ButtonComponent = ({
  children,
  height,
  width,
  borderRadius,
  borderWith,
  ...otherProps
}: typeProps) => {
  return (
    <div>
      <button
        className={` uppercase text-white ${height} ${width} ${borderRadius} ${borderWith}  bg-slate-900 cursor hover:bg-slate-950 shadow-md shadow-slate-950 ring-rose-950 ring-4`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
