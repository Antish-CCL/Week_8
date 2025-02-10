import React, { useState } from "react";

function YearOfBirth() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthYear, setBirthYear] = useState(null);

  const calculateBirthYear = () => {
    if (!age || isNaN(age) || age <= 0) {
      alert("Please enter a valid age");
      return;
    }

    const currentYear = new Date().getFullYear();
    const calculatedYear = currentYear - age;
    setBirthYear(calculatedYear);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Birth Year Calculator</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateBirthYear}>Calculate Birth Year</button>

      {birthYear !== null && (
        <h3>Hello {name}, you were born in {birthYear}.</h3>
      )}
    </div>
  );
}

export default YearOfBirth;