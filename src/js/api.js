const BASE_URL = 'https://callboard-backend.herokuapp.com';

// получает одну каттегорию
export const getOneCategory = query => {
  return fetch(`${BASE_URL}/call/specific/${query}`);
};
