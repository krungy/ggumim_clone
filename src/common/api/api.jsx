import axios from 'axios';

const { REACT_APP_API_POINT } = process.env;

const api = async () => {
  return await axios.get(REACT_APP_API_POINT).then((response) => response);
};

export default api;
