import Dog from "./dog";
export default function Page() {
  // Create some objects
  const dog1 = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    color: "Golden",
  };
  const dog2 = {
    name: "Max",
    breed: "Beagle",
    age: 2,
    color: "Brown",
  };
  const dog3 = {
    name: "Bella",
    breed: "Bulldog",
    age: 5,
    color: "White",
  };
  return (
    <main>
      <h1 className="text-4xl font-bold"> Week 3</h1>
      <h2 className="text-3xl font-bold text-red-700">Dogs List</h2>
      <Dog dog={dog1} />
      <Dog dog={dog2} />
      <Dog dog={dog3} />
      <Dog dog={{ name: "Rocky", breed: "Boxer", age: 4, color: "Brindle" }} />
    </main>
  );
}
