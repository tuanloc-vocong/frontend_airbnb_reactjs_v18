import clsx from "clsx";
import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div className={clsx(styles.filter_div)}>
      <div className={clsx(styles.link_box)}>
        <div className={clsx(styles.link_img)}></div>
        <p className={clsx(styles.link_title)}></p>
      </div>
    </div>
  );
};

export default Filter;
