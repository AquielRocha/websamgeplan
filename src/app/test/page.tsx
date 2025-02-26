"use client"
import React, { useState } from "react";

export default function FontEvaluationPage() {
    const [font, setFont] = useState("Arial");
    const [rating, setRating] = useState<number | null>(null);
    const [feedback, setFeedback] = useState("");

    const fonts = ["Arial", "Times New Roman", "Courier New", "Georgia", "Verdana"];

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Fonte:", font, "Avaliação:", rating, "Feedback:", feedback);
        // Lógica para enviar os dados para o servidor pode ser adicionada aqui
        alert("Avaliação enviada!");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "2.5rem" }}>Avaliação de Fontes</h1>
            <p>Selecione a fonte e avalie conforme sua preferência.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="font-select">Escolha a fonte:</label>
                    <select
                        id="font-select"
                        value={font}
                        onChange={(e) => setFont(e.target.value)}
                        style={{ marginLeft: "10px" }}
                    >
                        {fonts.map((fontItem) => (
                            <option key={fontItem} value={fontItem}>
                                {fontItem}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ marginTop: "15px" }}>
                    <span>Avalie de 1 a 5: </span>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} style={{ marginRight: "10px" }}>
                            <input
                                type="radio"
                                name="rating"
                                value={num}
                                checked={rating === num}
                                onChange={() => setRating(num)}
                            />
                            {num}
                        </label>
                    ))}
                </div>
                <div style={{ marginTop: "15px" }}>
                    <label htmlFor="feedback">Feedback:</label>
                    <br />
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={5}
                        cols={50}
                        placeholder="Deixe aqui seu feedback sobre a fonte..."
                    />
                </div>
                <button type="submit" style={{ marginTop: "15px" }}>
                    Enviar Avaliação
                </button>
            </form>
        </div>
    );
}