import "./ImcCalc.css";
import { useState } from "react";
import Button from "./Button";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleHeight = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeight = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={handleHeight}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
              onChange={handleWeight}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
