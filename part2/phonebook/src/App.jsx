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
  const [message, setMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        // update
        services
          .updatePerson(foundName.id, newPerson)
          .then((response) => {
            console.log(response);
            getData();
            setUpdateMessage("message updated successfully.");
            setTimeout(() => {
              setUpdateMessage("");
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
            setErrorMessage(
              `information of ${foundName.name} has already been deleted by server`,
            );
            setTimeout(() => {
              setErrorMessage("");
            }, 3000);
          });
      }
    } else {
      setPersons(persons.concat(newPerson));
      services.addPerson(newPerson).then((data) => console.log(data));

      setMessage("person added successfully!");
      setTimeout(() => {
        setMessage("");
      }, 5000);
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
      <div
        style={
          message
            ? {
                padding: "5px",
                border: "3px solid green",
                marginBottom: "20px",
                color: "green",
                fontSize: "2rem",
              }
            : {}
        }
      >
        {message}
      </div>
      <div
        style={
          updateMessage
            ? {
                padding: "5px",
                border: "3px solid yellow",
                marginBottom: "20px",
                color: "yellow",
                fontSize: "2rem",
              }
            : {}
        }
      >
        {updateMessage}
      </div>
      <div
        style={
          errorMessage
            ? {
                padding: "5px",
                border: "3px solid red",
                marginBottom: "20px",
                color: "red",
                fontSize: "2rem",
              }
            : {}
        }
      >
        {errorMessage}
      </div>
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
