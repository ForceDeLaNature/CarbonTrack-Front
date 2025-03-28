"use client";
import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./addTripForm.module.scss";
import { addTrip } from "@/actions/trip";
import { useActionState } from "react";
import Link from "next/link";

type Props = object;

const inputFields = [
  { inputType: "input", type: "text", label: "Origin", name: "origin" },
  { inputType: "input", type: "text", label: "Destination", name: "destination" },
  { inputType: "select", options: ["voiture", "TGV", "avion"], label: "transport mode", name: "transportMode" },
];

const initialState = {
  message: "",
};

function AddTripForm({}: Props) {
  const [, formAction, pending] = useActionState(addTrip, initialState);
  return (
    <form action={formAction} className={styles.wrapper}>
      {inputFields.map(({ type, label, name, inputType, options }) => (
        <Input key={name} inputType={inputType} options={options} type={type} label={label} name={name} />
      ))}
      <Button
        label={pending ? "Loading..." : "Login"}
        classNames={["btn_primary", "with_icon"]}
        // icon={<ArrowIcon fill="white" width={15} height={15} />}
        type="submit"
        iconPosition="right"
        disabled={pending}
      ></Button>
      <Link href="/auth/register">
        <p>je n&apos;ai pas de compte</p>
      </Link>
    </form>
  );
}

export default AddTripForm;
