import React from "react";
import cn from "classnames";

import "./Spinner.scss";

interface SpinnerInterface {
  classNames?: string;
}

const Spinner = ({ classNames }: SpinnerInterface) => {
  return (
    <div className={cn("spinner", classNames)}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
