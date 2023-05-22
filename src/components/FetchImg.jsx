import axios from 'axios';

const apiKey = '36351524-32f9ea6cfc89d6fe5933a5610';
const perPage = 12;
const baseURL = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}&q=`;

export const fetchImg = ({ query = '', currentPage = 1 }) => {
  const url = `${baseURL}${query}&page=${currentPage}`;
    return axios.get(url).then(({ data }) => {
        return data;
    });
};
