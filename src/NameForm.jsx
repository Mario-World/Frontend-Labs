import React, { useState } from "react";

function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName(""); // clear if incomplete
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Enter Your Name</h2>

      {/* This is the static heading Cypress expects on initial load */}
      <h3>Full Name Display</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <br /><br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Only render this after valid submission */}
      {fullName && (
        <h3 data-testid="full-name" style={{ marginTop: "20px" }}>
          Full Name: {fullName}
        </h3>
      )}
    </div>
  );
}

export default NameForm;
