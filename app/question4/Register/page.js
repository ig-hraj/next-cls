"use client"

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNo, setRegNo] = useState("");
  const [category, setCategory] = useState("");
  const [contact, setContact] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    // 1. Check required fields
    if (!name || !email || !regNo || !category) {
      setError("Name, Email, Registration No and Event Category are required");
      return;
    }

    // 2. Check name length
    if (name.length < 4) {
      setError("Name must contain at least 4 characters");
      return;
    }

    // 3. Check email
    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid Email");
      return;
    }

    // 4. Check registration number
    if (regNo.length > 8) {
      setError("Registration number should not be more than 8 characters");
      return;
    }

    // 5. Check contact number
    if (contact.length > 10) {
      setError("Contact number should not be more than 10 characters");
      return;
    }

    setSuccess("Registration successfully completed!");
  }

  return (
    <div>
      <h1>College Event Registration</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Registration No:</label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
        </div>

        <div>
          <label>Event Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Technical">Technical</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>

      </form>

      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
}