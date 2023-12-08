import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.133:8081/api",
  timeout: 90000000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Add any additional headers you need
  },
});

api.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem('yourAuthTokenKey');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response interceptor to handle token expiration or refresh if needed
  api.interceptors.response.use(
    (response) => {
      // Do something with the response data
      return response;
    },
    async (error) => {
      // Handle token expiration or other errors
     
      return Promise.reject(error);
    }
  );

const user = {
  async login(username, password) {
    try {
      const response = await api.post("/auth/signin", { username, password });
      const token = response.data.accessToken;
        
      // Save the token to AsyncStorage or wherever you store it
      await AsyncStorage.setItem("yourAuthTokenKey", token);
      console.log(await AsyncStorage.getItem("yourAuthTokenKey"))
      return { success: true, token };
    } catch (error) {
      console.error("Login failed:", error);
      throw error
    }
  },

  async signup(username, password, email) {
    try {
      const response = await api.post("/auth/signup", { username, password, email });
      console.log(response)
      return { success: true, response };
    } catch (error) {
      console.error("Signup failed:", error.message);
      throw error
    }
  },
  async profile(){
    try {
      const res = await api.get("/user/profile");
      console.log(res)
      return res
    } catch (error) {
      throw error
    }
  }
};

const categories = {
  async getAll(){
    try {
      const categories = await api.get("/categories")
      return categories
    } catch (error) {
      throw error
    }
  }
}
export { api, user, categories };
