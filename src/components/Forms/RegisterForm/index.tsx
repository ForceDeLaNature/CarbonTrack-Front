'use client'
import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from './registerForm.module.scss'
import { register } from "@/actions/auth";
import { useActionState } from "react";

type Props = object;

const inputFields = [
  { type: "text", label: "Username", name: "username" },
  { type: "text", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" }
];

const initialState = {
  message: ""
}

function index({}: Props) {
  const [state, formAction, pending] = useActionState(register, initialState)
  console.log(state)
  return (
    <form action={formAction} className={styles.wrapper}>
      {inputFields.map(({ type, label, name }) => (
        <Input key={name} type={type} label={label} name={name} />
      ))}
      <Button
        label={pending ? "Loading..." : "Register"}
        classNames={["btn_primary", "with_icon"]}
        // icon={<ArrowIcon fill="white" width={15} height={15} />}
        type="submit"
        iconPosition="right"
        disabled={pending}
      ></Button>
    </form>
  );
}

export default index;
