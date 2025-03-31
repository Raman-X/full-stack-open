import React from "react";

const Persons = ({ persons, filterName }) => {
  return (
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
  );
};

export default Persons;
