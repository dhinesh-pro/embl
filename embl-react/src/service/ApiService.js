import axios from 'axios';

const PERSON_API_URL = 'http://localhost:8080/users';

class ApiService {

    fetchUsers() {
        return axios.get(PERSON_API_URL);
    }

    fetchUserById(userId) {
        return axios.get(PERSON_API_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(PERSON_API_URL + '/' + userId);
    }

    addUser(user) {
        console.log(user);
        return axios.post(""+PERSON_API_URL, user);
    }

    editUser(user) {
        return axios.put(PERSON_API_URL + '/' + user.id, user);
    }

}

export default new ApiService();