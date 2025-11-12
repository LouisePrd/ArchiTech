"use client";

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
    <div>
      <form onSubmit={handleLogin}>
        <h1>Connexion</h1>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Se connecter</button>

        <p>
          Pas encore de compte ? <a href="/signup">Crée-en un</a>
        </p>
      </form>
    </div>
  );
}
