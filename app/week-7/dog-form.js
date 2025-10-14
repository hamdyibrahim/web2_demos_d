"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  // create a dog state for managing a dog object (id, name, age).
  const [dog, setDog] = useState({ id: null, name: "", age: 0 });

  /* Create handleSubmit() that
     1- prevent the default behavior of form submission
     2- Display the dog to the console
     3- Update/re-initialize the dog state to reset the form after submission 
     */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dog Submitted: ", dog);
    onAddDog(dog);
    setDog({ id: null, name: "", age: 0 });
  };

  // Create handleNameChange() to update the name property in dog state
  const handleNameChange = (e) => {
    setDog({ ...dog, name: e.target.value });
  };

  // Create handleAgeChange() to update the age property in dog state
  const handleAgeChange = (e) => {
    setDog({ ...dog, age: parseInt(e.target.value, 10) || 0 });
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Dog Form</h2>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Add a Dog</h2>
        <label>
          Name:
          <input
            type="text"
            value={dog.name}
            onChange={handleNameChange}
            className="border-2 m-2"
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={dog.age}
            onChange={handleAgeChange}
            className="border-2 m-2"
          />
        </label>
        <button type="submit" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
}
