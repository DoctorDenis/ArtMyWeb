import axios from "axios";
import { token } from "../token";

const instance = axios.create({
  baseURL: "https://gorest.co.in/public/v1",
});

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export function getUsers(page = 5, per_page = 10) {
  return instance.get("/users", {
    params: { page, per_page },
  });
}

export function submitUser(user) {
  return instance.patch(`users/${user.id}`, { ...user });
}
