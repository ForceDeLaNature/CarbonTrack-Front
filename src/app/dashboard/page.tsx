"use client"
import React from "react";
import styles from "./page.module.scss";
import fakeData from "../../fakeData/data.json";
import ListCard from "@/components/listCard";
import Button from "@/components/Button";
import { redirect } from "next/navigation";

type Props = object;

function page({}: Props) {
  const handleClick = () => {
    redirect("/add-trip");
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
      <ListCard dataset={fakeData} />
    </div>
  );
}

export default page;
