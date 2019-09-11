import axios from "axios";

const serverURL = "http://localhost:3001/persons";

const getAll = () => {
    return axios
        .get(serverURL)
        .then(x => x.data);
}

const add = (person) => {
    return axios
        .post(serverURL, person)
        .then(x => x.data);
}

const remove = (id) => {
    return axios
        .delete(`${serverURL}/${id}`)
        .then(x => x.data);
}

export default {getAll, add, remove};
