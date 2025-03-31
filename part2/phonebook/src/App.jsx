import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filterName, setFilterName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const foundName = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );

    if (foundName) {
      alert(`${foundName.name} already exists!`);
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: persons[persons.length - 1].id + 1,
        }),
      );
    }
    setNewName("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input
          type="text"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => {
          if (person.name.toLowerCase().includes(filterName.toLowerCase())) {
            return (
              <li key={person.name}>
                {person.name} {person.number}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default App;
