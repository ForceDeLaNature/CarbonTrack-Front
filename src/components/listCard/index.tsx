import Link from "next/link";
import React from "react";
import styles from "./listCard.module.scss";

interface TransportData {
  origin: string;           // Ville d'origine
  destination: string;      // Ville de destination
  mode_transport: string;   // Mode de transport (Voiture, Train, Avion, etc.)
  distance_km: number;      // Distance en kilomètres
  empreinte_co2_kg: number; // Empreinte carbone en kilogrammes de CO2
}

type Props = {
  dataset: TransportData[];
};

function index({ dataset }: Props) {
  return (
    <div className={styles.wrapper}>
      {dataset && (
        <ul>
          {dataset.map((item: TransportData, key: number) => {
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
