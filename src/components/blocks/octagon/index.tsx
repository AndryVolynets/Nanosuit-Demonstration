import React, { ReactNode } from "react";
import styles from './index.module.css'

interface IProps {
  size: number;
  color: string;
  children: ReactNode;
}

const OctagonLayout = (props: IProps) => {
  const { size, color, children } = props;

  const octagonStyle = {
    width: `${size + 10}px`,
    height: `${size}px`,
    backgroundColor: color,
  };

  return (
    <div className={styles.octagon} style={octagonStyle}>
      {children}
    </div>
  );
}

export default OctagonLayout;
