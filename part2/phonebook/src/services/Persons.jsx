import axios from "axios";

const URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(URL).then((response) => response.data);
};

const addPerson = (person) => {
  return axios.post(URL, person).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${URL}/${id}`).then((response) => {
    return response.data;
  });
};
const updatePerson = (id, person) => {
  return axios.put(`${URL}/${id}`, person).then((response) => {
    return response.data;
  });
};
export default { getAll, addPerson, deletePerson, updatePerson };
