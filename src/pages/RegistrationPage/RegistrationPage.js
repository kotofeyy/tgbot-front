import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [stepRegistration, setStepRegistration] = useState(1);
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
  const cities = [
    { value: "moscow", label: "Москва" },
    { value: "spb", label: "Санкт-Петербург" },
    { value: "ekb", label: "Екатеринбург" },
    // и т.д.
  ];
  const handleNextStep = () => setStepRegistration((step) => step + 1);
  const handleBacktStep = () => setStepRegistration((step) => step + 1);
  return (
    <div className="reg-content">
      <div className="content">
        <header className="header">
          {headerOptions[stepRegistration - 1]}
        </header>
        {stepRegistration === 1 && (
          <div>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "2px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {ageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button onClick={() => handleNextStep()}>Далее</button>
          </div>
        )}

        {stepRegistration === 2 && (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "2px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <button onClick={() => handleNextStep()}>Далее</button>
          </div>
        )}

        {stepRegistration === 3 && (
          <div>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "2px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
            <button
              onClick={() =>
                console.log(`Ваш возраст: ${age}, имя: ${name}, город: ${city}`)
              }
            >
              Готово
            </button>
          </div>
        )}
      </div>
    </div>
  );
};