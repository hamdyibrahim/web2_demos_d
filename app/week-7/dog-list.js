import Dog from "./dog";
export default function DogList({ dogs, onDeleteDog }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-600">Dog List</h2>
      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDelete={onDeleteDog}
        />
      ))}
    </div>
  );
}
