import axios from 'axios'
import { GET_ERRORS } from '../constants'


export const registerUser = (userData, history) => dispatch => {
    axios.post('http://localhost:5000/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => console.log(err))
}
