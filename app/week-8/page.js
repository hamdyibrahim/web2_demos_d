"use client";

import { useState, useEffect } from "react";

export default function Page() {
  // create a state to store the url of random dog image
  const [randomDog, setRandomDog] = useState(null);
  const [breeds, setBreeds] = useState([]);

  async function fetchRandomDog(breed) {
    const response =
      breed && breed !== "Random Dog"
        ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        : await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(data);
    return data.message;
  }

  const fetchBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return Object.keys(data.message);
  };

  const loadRandomDog = async () => {
    const newRandomDog = await fetchRandomDog();
    setRandomDog(newRandomDog);
  };

  const loadBreeds = async () => {
    const breedList = await fetchBreeds();
    setBreeds(["Random Dog", ...breedList]);
  };

  const handleBreedChange = async (event) => {
    const selectedBreed = event.target.value;
    const newRandomDog = await fetchRandomDog(selectedBreed);
    setRandomDog(newRandomDog);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-500">
        Week 8 - Fetching Data
      </h1>
      <select onChange={handleBreedChange}>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <img src={randomDog} alt="Random Dog" className="rounded-lg w-64 h-64" />
    </div>
  );
}
