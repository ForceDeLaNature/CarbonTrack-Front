import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/login");
  return (
    <div className={styles.page}>
      
    </div>
  );
}
