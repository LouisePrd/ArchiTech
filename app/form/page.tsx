"use client";

import { useEffect, useState } from "react";
// react-jsonschema-form imports
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { UiSchema } from '@rjsf/utils';
// Firebase imports
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const uiSchema: UiSchema = {
    "administratif": {
        "ui:order": ["maitreOuvrage", "contexte"],
        "contexte": {
            "ui:order": ["refCadastrale", "surfaceSol", "immatriculation", "siretMO", "mandatMO", "dateReglementCopro", "anneeResiliation", "nbLotsCopro", "nbLotsPrincipaux", "typeSyndicatCopro", "aslAfulUnionSyndic"],
            "surfaceSol": {
                "ui:placeholder": "Surface en m²"
            }
        }
    }
};

const firebaseConfig = {
  apiKey: "AIzaSyAI7Dh4TawsL61QjWAk7FWBBE_uBTPqCwc",
  authDomain: "dynamic-form-3351d.firebaseapp.com",
  databaseURL: "https://dynamic-form-3351d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dynamic-form-3351d",
  storageBucket: "dynamic-form-3351d.firebasestorage.app",
  messagingSenderId: "120320036748",
  appId: "1:120320036748:web:5ed3a6a09dff6191af50a9",
  measurementId: "G-ZCQEHLJXHG"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function DynamicFormPage() {
    const [schema, setSchema] = useState<any>(null);
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        async function fetchSchema() {
            try {
                const schemaRef = ref(database);
                const snap = await get(schemaRef);
            
                if (!snap.exists()) {
                    console.error("Aucun schéma trouvé");
                    return;
                }
                console.log("SCHEMA RECU :", snap.val());
                setSchema(snap.val());
            } 
            catch (err) {
                console.error("Erreur lors de la récupération du schéma :", err);
            }
        }
        fetchSchema();
    }, []);

    if (!schema) return <p>Chargement du formulaire...</p>;

    return (
        <div>
            <Form
                schema={schema}
                uiSchema={uiSchema}
                validator={validator}
                formData={formData}
                onChange={(e) => setFormData(e.formData)}
                onSubmit={(e) => console.log("SUBMITTED:", e.formData)}
                onError={(e) => console.log("ERRORS:", e)}
            />
        </div>
    );
}