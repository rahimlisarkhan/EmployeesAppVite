import React from "react";
import styles from "./Typograph.module.css";

const Typograph = ({
  variant = "body2",
  color = "black",
  weight = "regular",
  align = "left",
  as = "div",
  className,
  children = "Text",
}) => {
  const Component = as;

  return (
    <Component
      className={`${styles[variant]} ${styles[weight]} ${styles[align]} ${className}`}
      style={{ color }}
    >
      {children}
    </Component>
  );
};

export default Typograph;
