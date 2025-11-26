"use client";

import styles from "../styles/Access.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (email === "test@test.com" && password === "1234") {
      router.push("/dashboard");
    } else {
      setError("Erreur d'inscription (exemple)");
    }
  };

  return (
    <div className={styles.accessContainer}>
      <form onSubmit={handleSignUp}>
        <div style={{ display: "flex", justifyContent: "center" , marginBottom: "1.5rem" }}>
          <Image
            src="/logo.svg"
            width={150}
            height={150}
            alt="ArchiTech Logo"
          />
        </div>

        {/* <h1>Inscription</h1> */}

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

        <div>
          <label className={styles.label}>Confirmer le mot de passe</label>
          <input className={styles.input}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit" className={styles.registerButton}>S'inscrire</button>

        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Déjà un compte ? <a href="/signin" className={styles.loginButton}>Connecte-toi</a>
        </p>
      </form>
    </div>
  );
}
