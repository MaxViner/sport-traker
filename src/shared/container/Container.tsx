import React from "react";
import style from "./style.module.scss";

type ContainerType = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerType> = ({ children }) => {
  return <div className={style["main-container"]}>{children}</div>;
};
