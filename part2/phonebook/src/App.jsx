import { useEffect, useState } from "react";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h2>Add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
