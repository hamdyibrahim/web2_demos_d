export default function Dog({ dog }) {
  const { name, breed, age, color } = dog; //destructring object
  return (
    <section className="bg-slate-300 p-4 w-1/4 m-3">
      <h2 className="text-xl font-bold text-blue-700">Name: {name}</h2>
      <p>Breed: {breed}</p>
      <p>Age: {age}</p>
      <p>Color: {color}</p>
    </section>
  );
}
