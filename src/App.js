import React from "react";
import "./App.css"; // Asegúrate de tener un archivo App.css para los estilos

function App() {
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
    let maxAnswer = "a";
    for (const key in answers) {
      if (answers[key] > answers[maxAnswer]) {
        maxAnswer = key;
      }
    }

    // Define los resultados según la respuesta mayoritaria
    let result;
    switch (maxAnswer) {
      case "a":
        result = "Entrepreneur de l'année";
        break;
      case "b":
        result = "Sport";
        break;
      case "c":
        result = "Fiancé parfait";
        break;
      case "d":
        result = "Nice man";
        break;
      case "e":
        result = "Familier";
        break;
      case "f":
        result = "Party man";
        break;
    }

    // Muestra el resultado en el pop-up
    document.getElementById("resultText").textContent =
      "Votre style est: " + result;
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
          <label>
            <input type="radio" name="q1" value="a" /> Événements
            professionnels.
          </label>
          <label>
            <input type="radio" name="q1" value="b" /> Pratiquez du sport ou des
            activités de plein air.
          </label>
          <label>
            <input type="radio" name="q1" value="c" /> Préparations d'événements
            spéciaux.
          </label>
          <label>
            <input type="radio" name="q1" value="d" /> Sortez avec des amis.
          </label>
          <label>
            <input type="radio" name="q1" value="e" /> Passez du temps en
            famille.
          </label>
          <label>
            <input type="radio" name="q1" value="f" /> Assistez à des fêtes.
          </label>
        </div>

        {/* Pregunta 2 */}
        <div className="question">
          <p>2. Comment décririez-vous votre approche de la mode?</p>
          <label>
            <input type="radio" name="q2" value="a" /> Élégant et professionnel.
          </label>
          <label>
            <input type="radio" name="q2" value="b" /> Décontracté et
            confortable.
          </label>
          <label>
            <input type="radio" name="q2" value="c" /> Raffiné et sophistiqué.
          </label>
          <label>
            <input type="radio" name="q2" value="d" /> Attrayant et polyvalent.
          </label>
          <label>
            <input type="radio" name="q2" value="e" /> Détendu et confortable.
          </label>
          <label>
            <input type="radio" name="q2" value="f" /> Branché.
          </label>
        </div>

        {/* Pregunta 3 */}
        <div className="question">
          <p>3. À quel type d’événements préférez-vous assister?</p>
          <label>
            <input type="radio" name="q3" value="a" /> Événements d'entreprise.
          </label>
          <label>
            <input type="radio" name="q3" value="b" /> Compétitions sportives.
          </label>
          <label>
            <input type="radio" name="q3" value="c" /> Mariages, anniversaires
            et célébrations personnelles.
          </label>
          <label>
            <input type="radio" name="q3" value="d" /> Rencontres sociales,
            dîners et sorties entre amis.
          </label>
          <label>
            <input type="radio" name="q3" value="e" /> Activités familiales,
            réunions et dîners à la maison.
          </label>
          <label>
            <input type="radio" name="q3" value="f" /> Concerts, clubs et
            soirées.
          </label>
        </div>

        {/* Pregunta 4 */}
        <div className="question">
          <p>
            4. Qu'est-ce qui est le plus important pour vous lors du choix d'une
            tenue ?
          </p>
          <label>
            <input type="radio" name="q4" value="a" /> Impression
            professionnelle et élégance.
          </label>
          <label>
            <input type="radio" name="q4" value="b" /> Confort et performance
            dans les activités.
          </label>
          <label>
            <input type="radio" name="q4" value="c" /> Style et impact lors
            d'occasions spéciales.
          </label>
          <label>
            <input type="radio" name="q4" value="d" /> La capacité de s'adapter
            à différentes situations sociales.
          </label>
          <label>
            <input type="radio" name="q4" value="e" /> Approche confortable et
            décontractée de la vie quotidienne.
          </label>
          <label>
            <input type="radio" name="q4" value="f" /> La capacité de se
            démarquer.
          </label>
        </div>

        {/* Pregunta 5 */}
        <div className="question">
          <p>5. Comment vous sentez-vous le plus sûr de vous?</p>
          <label>
            <input type="radio" name="q5" value="a" /> Avec un look soigné et
            professionnel qui projette la confiance.
          </label>
          <label>
            <input type="radio" name="q5" value="b" /> Avec des vêtements qui
            permettent liberté de mouvement et fonctionnalité.
          </label>
          <label>
            <input type="radio" name="q5" value="c" /> Avec un style raffiné qui
            se démarque lors d'événements spéciaux.
          </label>
          <label>
            <input type="radio" name="q5" value="d" /> Avec une tenue qui vous
            démarque lors des réunions sociales.
          </label>
          <label>
            <input type="radio" name="q5" value="e" /> Avec un style décontracté
            et confortable pour passer du temps en famille.
          </label>
          <label>
            <input type="radio" name="q5" value="f" /> Avec un look tendance qui
            vous fera briller lors des événements nocturnes.
          </label>
        </div>

        <button type="button" onClick={calculateResult}>
          Envoyer
        </button>
      </form>

      {/* Modal para mostrar el resultado */}
      <div id="resultModal" className="modal" style={{ display: "none" }}>
        <div className="modal-content">
          <p className="result-text" id="resultText"></p>
          <button className="close-button" onClick={closeModal}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
