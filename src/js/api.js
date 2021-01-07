const BASE_URL = 'https://callboard-backend.herokuapp.com';

// получает все элементы одной каттегории товара
export const getOneCategory = query => {
  return fetch(`${BASE_URL}/call/specific/${query}`).then(data => data.json());
};
