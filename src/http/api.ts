const BASE_URL = "https://paidiem-nest.herokuapp.com/";
// const BASE_URL = "http://localhost:3200/";

const api = async (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => {
      console.log("Error in API call", err);
    });
};

export const GET_COUNTRIES = () => {
  let url = `${BASE_URL}countries`;
  return api(url);
};

export const GET_COUNTRY = async (code: string) => {
  let url = `${BASE_URL}countries/${code}`;
  return api(url);
};

export const SEARCH = async (artistId: number, country?: string) => {
  let url = `${BASE_URL}search?artistId=${artistId}&country=${country}`;
  return api(url);
};
