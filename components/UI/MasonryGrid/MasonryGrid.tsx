// components/MasonryGrid.js
import React from "react";
import styles from "./MasonryGrid.module.css"; // Import the CSS module

const MasonryGrid = ({ items }: any) => {
  return (
    <div className={styles.grid}>
      {items.map((item: any, index: number) => (
        <div key={index} className={styles.gridItem}>
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
