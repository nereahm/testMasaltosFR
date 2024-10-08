import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
    const [result, setResult] = useState("");
    const [resultImage, setResultImage] = useState("");

    const calculateResult = () => {
        const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
        const form = document.forms["quizForm"];

        // Recorre las preguntas y acumula las respuestas
        for (let i = 1; i <= 5; i++) {
            const selected = form["q" + i].value;
            if (selected) {
                answers[selected]++;
            }
        }

        // Encuentra la respuesta mayoritaria
        let maxAnswer = 'a';
        for (const key in answers) {
            if (answers[key] > answers[maxAnswer]) {
                maxAnswer = key;
            }
        }

        // Define los resultados según la respuesta mayoritaria
        let resultText = "";
        let resultImageUrl = "";
        switch (maxAnswer) {
            case 'a':
                resultText = "Entrepreneur de l'année";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
                break;
            case 'b':
                resultText = "Sport";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
                break;
            case 'c':
                resultText = "Fiancé parfait";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/novioperfecto.png";
                break;
            case 'd':
                resultText = "Nice man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
                break;
            case 'e':
                resultText = "Familier";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/familiar.png";
                break;
            case 'f':
                resultText = "Party man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/fiestero.png";
                break;
        }

        // Actualiza el estado con el resultado y la imagen
        setResult(resultText);
        setResultImage(resultImageUrl);

        // Muestra el resultado en el pop-up
        document.getElementById("resultModal").style.display = "flex";
    };

    const closeModal = () => {
        document.getElementById("resultModal").style.display = "none";
    };

    return (
        <div className="quiz-container">
            <h1>Quel style cherchez-vous?</h1>
            <form id="quizForm">
                {/* Pregunta 1 */}
                <div className="question">
                    <p>1. Quelle est votre activité préférée pendant votre temps libre?</p>
                    <label><input type="radio" name="q1" value="a" /> Événements professionnels.</label>
                    <label><input type="radio" name="q1" value="b" /> Pratiquez du sport ou des activités de plein air.</label>
                    <label><input type="radio" name="q1" value="c" /> Préparations d'événements spéciaux.</label>
                    <label><input type="radio" name="q1" value="d" /> Sortez avec des amis.</label>
                    <label><input type="radio" name="q1" value="e" /> Passez du temps en famille.</label>
                    <label><input type="radio" name="q1" value="f" /> Assistez à des fêtes.</label>
                </div>

                {/* Pregunta 2 */}
                <div className="question">
                    <p>2. Comment décririez-vous votre approche de la mode?</p>
                    <label><input type="radio" name="q2" value="a" /> Élégant et professionnel.</label>
                    <label><input type="radio" name="q2" value="b" /> Décontracté et confortable.</label>
                    <label><input type="radio" name="q2" value="c" /> Raffiné et sophistiqué.</label>
                    <label><input type="radio" name="q2" value="d" /> Attrayant et polyvalent.</label>
                    <label><input type="radio" name="q2" value="e" /> Détendu et confortable.</label>
                    <label><input type="radio" name="q2" value="f" /> Branché.</label>
                </div>

                {/* Pregunta 3 */}
                <div className="question">
                    <p>3. À quel type d’événements préférez-vous assister?</p>
                    <label><input type="radio" name="q3" value="a" /> Événements d'entreprise.</label>
                    <label><input type="radio" name="q3" value="b" /> Compétitions sportives.</label>
                    <label><input type="radio" name="q3" value="c" /> Mariages, anniversaires et célébrations personnelles.</label>
                    <label><input type="radio" name="q3" value="d" /> Réunions sociales et dîners avec des amis.</label>
                    <label><input type="radio" name="q3" value="e" /> Activités familiales et dîners à la maison.</label>
                    <label><input type="radio" name="q3" value="f" /> Concerts, clubs et événements nocturnes.</label>
                </div>

                {/* Pregunta 4 */}
                <div className="question">
                    <p>4. Qu'est-ce qui est le plus important lors du choix d'une tenue?</p>
                    <label><input type="radio" name="q4" value="a" /> Projeter l'élégance et le professionnalisme.</label>
                    <label><input type="radio" name="q4" value="b" /> Confort et performance.</label>
                    <label><input type="radio" name="q4" value="c" /> Style et impact lors d'occasions spéciales.</label>
                    <label><input type="radio" name="q4" value="d" /> Adaptabilité à différentes situations sociales.</label>
                    <label><input type="radio" name="q4" value="e" /> Confort pour la vie quotidienne.</label>
                    <label><input type="radio" name="q4" value="f" /> Se démarquer lors d'événements nocturnes.</label>
                </div>

                {/* Pregunta 5 */}
                <div className="question">
                    <p>5. Avec quel style vous sentez-vous le plus confiant?</p>
                    <label><input type="radio" name="q5" value="a" /> Un look soigné et professionnel qui inspire confiance.</label>
                    <label><input type="radio" name="q5" value="b" /> Des vêtements qui permettent une liberté de mouvement et une fonctionnalité.</label>
                    <label><input type="radio" name="q5" value="c" /> Un style raffiné qui se démarque lors d'événements spéciaux.</label>
                    <label><input type="radio" name="q5" value="d" /> Une tenue qui vous fait briller lors de réunions sociales.</label>
                    <label><input type="radio" name="q5" value="e" /> Un style décontracté et confortable pour les moments en famille.</label>
                    <label><input type="radio" name="q5" value="f" /> Un look à la mode pour briller lors d'événements nocturnes.</label>
                </div>

                <button type="button" onClick={calculateResult}>Envoyer</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText">Votre style est: {result}</p>
                    {resultImage && (
                        <div style={{ textAlign: 'center' }}>
                            <img src={resultImage} alt={result} style={{ width: '200px', height: 'auto', margin: '10px' }} />
                        </div>
                    )}
                    <button className="close-button" onClick={closeModal}>Fermer</button>
                </div>
            </div>
        </div>
    );
}

export default App;
