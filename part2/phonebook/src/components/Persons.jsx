import React from "react";
import axios from "axios";
import services from "../services/Persons.jsx";

const Persons = ({ persons, filterName, setPersons, handleDelete }) => {
  return (
    <ul>
      {persons.map((person, index) => {
        if (person.name.toLowerCase().includes(filterName.toLowerCase())) {
          return (
            <li key={person.id}>
              {person.name} {person.number}{" "}
              <button
                onClick={() => {
                  handleDelete(person.id);
                }}
              >
                delete
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Persons;
