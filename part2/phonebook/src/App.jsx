import { useEffect, useState } from "react";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import axios from "axios";
import services from "./services/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filterName, setFilterName] = useState("");

  function getData() {
    return services.getAll().then((data) => setPersons(data));
  }

  useEffect(() => {
    getData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const foundName = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );
    const newPerson = {
      id: Date.now().toString(),
      name: newName,
      number: newNumber,
    };
    if (foundName) {
      if (
        window.confirm(
          `${foundName.name} already exists! would you like to replace the old number with the new one`,
        )
      ) {
        axios
          .put(`http://localhost:3001/persons/${foundName.id}`, newPerson)
          .then((response) => {
            console.log(response.data);
            getData();
          });
      }
    } else {
      setPersons(persons.concat(newPerson));

      services.addPerson(newPerson).then((data) => console.log(data));
    }
    setNewName("");
    setNewNumber("");
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this person?")) {
      services.deletePerson(id).then((data) => {
        console.log(data);
        getData(); //update state after deletion
      });
    }
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
      <Persons
        persons={persons}
        filterName={filterName}
        setPersons={setPersons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
