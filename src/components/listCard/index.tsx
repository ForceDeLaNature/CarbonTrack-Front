import Link from "next/link";
import React from "react";
import styles from "./listCard.module.scss";

type Props = {
  dataset: any;
};

function index({ dataset }: Props) {
  return (
    <div className={styles.wrapper}>
      {dataset && (
        <ul>
          {dataset.map((item: any, key: number) => {
            return (
              // <li key={key}>
              <Link key={key} href={``}>
                <div className={styles.leftPart}>
                  <p>{`${item.origin} - ${item.destination}`}</p>
                  <p>{`${item.mode_transport}, ${item.distance_km}km`}</p>
                </div>
                <div>
                  <p>{item.empreinte_co2_kg} Kg Co2</p>
                </div>
              </Link>
              // </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default index;
