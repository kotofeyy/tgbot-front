import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationContainer } from "./RegistrationContainer";
import "./styles.css";
import { Button } from "../../components/Button/Button";
import { cities } from "../../utils/cities";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [stepRegistration, setStepRegistration] = useState(0);
  const headerOptions = ["Возраст", "Имя", "Город"];
  const ageOptions = [
    { value: "", label: "Выберите возраст" },
    { value: "0-10", label: "0-10 лет" },
    { value: "11-20", label: "11-20 лет" },
    { value: "21-30", label: "21-30 лет" },
    { value: "31-40", label: "31-40 лет" },
    { value: "41-50", label: "41-50 лет" },
    { value: "51-60", label: "51-60 лет" },
    { value: "61+", label: "61 и более лет" },
  ];
  const handleNextStep = () => setStepRegistration((step) => step + 1);
  const handleBacktStep = () => setStepRegistration((step) => step + 1);

  const handleCompletionRegistration = () => navigate("/meow");

  return (
    <div className="reg-content">
      <header className="header">Немного о себе</header>
      <div className="main-content">
        <div className="reg-inputs">
          <select
            className="inputs"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            {ageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <input
            className="inputs"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
          />

          <select
            className="inputs"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.city}
              </option>
            ))}
          </select>

          <Button onClick={() => handleCompletionRegistration()}>
            Создать аккаунт
          </Button>
        </div>
      </div>
    </div>
  );
};
