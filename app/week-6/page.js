"use client";

import { useState } from "react";

import dogsData from "./dogs.json";

export default function Page() {
  const [selectedDogId, setSelectedDogId] = useState(null);

  let dogsCopy = [...dogsData]; // create a new copy

  /*dogsCopy.sort((a, b) => {
    //You could use localeCompare
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });*/
  dogsCopy.sort((a, b) => a.name.localeCompare(b.name));

  // filter the dogs like displaying dogs whose id >= specific value
  dogsCopy = dogsCopy.filter((dog) => dog.id >= 2);

  const handleClick = (id) => {
    if (selectedDogId == id) {
      setSelectedDogId(null);
    } else {
      setSelectedDogId(id);
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">Week 6 - Dogs Data</h1>
      <ul>
        {dogsCopy.map((dog) => (
          <li
            key={dog.id}
            onClick={() => handleClick(dog.id)}
            className={`m-2 lg:max-w-lg cursor-pointer ${
              selectedDogId == dog.id ? "bg-slate-500" : "bg-slate-300 "
            }`}
          >
            <div className="flex">
              <img
                src={dog.imageurl}
                alt={dog.name}
                className="w-24 h-24 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold">{dog.name}</h2>
                <p className="text-blue-700">{dog.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="font-bold text-green-900">
        You selected dog number {selectedDogId}
      </p>
    </main>
  );
}
