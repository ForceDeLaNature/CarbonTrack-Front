"use client"
import React from "react";
import styles from "./page.module.scss";
import fakeData from "../../fakeData/data.json";
import StatsCard from "@/components/StatsCard";
import ListCard from "@/components/listCard";
import Button from "@/components/Button";
import { redirect } from "next/navigation";

type Props = object;

function page({}: Props) {
  const handleClick = () => {
    redirect("/dashboard/add-trip");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>dashboard</h1>
        <Button
          label="Ajouter un trajet"
          classNames={["btn_primary"]}
          type="button"
          handleClick={() => {
            handleClick();
          }}
        />
      </div>
      <StatsCard label="Nombre de trajets" data={fakeData.length}/>
      <StatsCard label="Emissions totals" data={fakeData.reduce((total, item) => total + item.empreinte_co2_kg, 0)} unit="Kg Co2"/>
      <StatsCard label="Kilometres parcouru" data={fakeData.reduce((total, item) => total + item.distance_km, 0)} unit="km"/>
      <ListCard dataset={fakeData} />
    </div>
  );
}

export default page;
