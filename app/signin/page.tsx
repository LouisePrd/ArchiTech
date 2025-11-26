"use client";

import styles from "../styles/Access.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'

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
        <div style={{ display: "flex", justifyContent: "center" , marginBottom: "1.5rem" }}>
          <Image
            src="/logo.svg"
            width={150}
            height={150}
            alt="ArchiTech Logo"
          />
        </div>
        
        {/* <h1>Connexion</h1> */}

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
          <p style={{ textAlign: "center", color: "#FF2525", marginTop: "0.5rem" }}>
            Mot de passe oublié ?
          </p>
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
