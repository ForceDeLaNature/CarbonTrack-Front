import "../globals.css";
import styles from "./layout.module.scss";
import Image from "next/image";
import authJpg from "../../../public/tree.jpg";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(styles)
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_container}>
        <Image src={authJpg} alt="background" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.right_container}>{children}</div>
    </div>
  );
}
