import axios from "axios";

const URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(URL).then((response) => response.data);
};

const addPerson = (person) => {
  return axios.post(URL, person).then((response) => response.data);
};

const deletePerson = (id, setPersons) => {
  return axios.delete(`${URL}/${id}`).then((response) => {
    getAll().then((data) => setPersons(data));
  });
};

export default { getAll, addPerson, deletePerson };
