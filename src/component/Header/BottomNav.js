import clsx from "clsx";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { RestoreIcon } from "@mui/icons-material";

const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={clsx(styles.bottom_nav, " md:hidden")}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
