"use client";

import styles from "../styles/Access.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === "test@test.com" && password === "1234") {
      router.push("/dashboard");
    } else {
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className={styles.accessContainer}>
      <form onSubmit={handleLogin}>
        <h1>Connexion</h1>

        <div>
          <label className={styles.label}>Email</label>
          <input className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className={styles.label}>Mot de passe</label>
          <input className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p>{error}</p>}

        <button className={styles.loginButton} type="submit">Se connecter</button>

        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Pas encore de compte ? <a href="/signup" className={styles.registerButton}>Crée-en un</a>
        </p>
      </form>
    </div>
  );
}
