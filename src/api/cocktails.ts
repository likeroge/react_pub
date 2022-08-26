import axios from "axios";

export const cocktailsApi = axios.create({
	baseURL: "https://62dff18afa8ed271c47b41a6.mockapi.io/api/v1/",
});
