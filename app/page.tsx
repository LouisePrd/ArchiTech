import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <div className={styles.links}>
        <Link href="/signin" className={styles.link}>Sign In</Link>
        <Link href="/signup" className={styles.link}>Sign Up</Link>
      </div>
    </main>
  );
}
