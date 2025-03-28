"use client";
import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./registerForm.module.scss";
import { register } from "@/actions/auth";
import { useActionState } from "react";
import Link from "next/link";

type Props = object;

const inputFields = [
  { inputType: "input", type: "text", label: "Username", name: "username" },
  { inputType: "input", type: "text", label: "Email", name: "email" },
  { inputType: "input", type: "password", label: "Password", name: "password" },
];

const initialState = {
  message: "",
};

function RegisterForm({}: Props) {
  const [state, formAction, pending] = useActionState(register, initialState);
  console.log(state);
  return (
    <form action={formAction} className={styles.wrapper}>
      {inputFields.map(({ type, label, name, inputType }) => (
        <Input key={name} inputType={inputType} type={type} label={label} name={name} />
      ))}
      <Button
        label={pending ? "Loading..." : "Register"}
        classNames={["btn_primary", "with_icon"]}
        // icon={<ArrowIcon fill="white" width={15} height={15} />}
        type="submit"
        iconPosition="right"
        disabled={pending}
      ></Button>
      <Link href="/auth/login">
        <p>j&apos;ai deja un compte</p>
      </Link>
    </form>
  );
}

export default RegisterForm;
