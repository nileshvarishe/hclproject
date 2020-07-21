import axios from "axios";

//fetch country data from "rapidapi"
export const fetchBooks = () => {
  return axios({
    method: "GET",
    url:
      "https://google-books.p.rapidapi.com/volumes?filter=paid-ebooks&maxResults=20&fields=items(id,volumeInfo/description,volumeInfo/title,volumeInfo/imageLinks/thumbnail,saleInfo/listPrice/amount)",
    headers: {
      "x-rapidapi-host": "google-books.p.rapidapi.com",
      "x-rapidapi-key": "9d01bd09b6msh28ecc0191ae81cbp1afa12jsn8977574f94d8",
    },
    kind: "books#volumes",
    totalItems: 1,
  }).then((response) => {
    return response.data;
  });
};
