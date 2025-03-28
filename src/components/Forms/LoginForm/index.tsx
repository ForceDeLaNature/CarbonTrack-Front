"use client";
import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./loginForm.module.scss";
import { login } from "@/actions/auth";
import { useActionState } from "react";
import Link from "next/link";

type Props = object;

const inputFields = [
  { inputType: "input", type: "text", label: "Email", name: "email" },
  { inputType: "input", type: "password", label: "Password", name: "password" },
];

const initialState = {
  message: "",
};

function LoginForm({}: Props) {
  const [state, formAction, pending] = useActionState(login, initialState);
  console.log(state);
  return (
    <form action={formAction} className={styles.wrapper}>
      {inputFields.map(({ type, label, name, inputType }) => (
        <Input key={name} inputType={inputType} type={type} label={label} name={name} />
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
      <Link href="/dashboard">
        <p>go to dashboard</p>
      </Link>
    </form>
  );
}

export default LoginForm;
