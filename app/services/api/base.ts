import axios, { AxiosError, AxiosResponse } from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: 'http://localhost:3000',
    headers: {
      "Content-Type": "application/json",
    },
  };
  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(async (config: any) => {
    // const [token, _error] = await LocalStorage.get(
    //   GLOBAL_CONSTANTS.lsKeys.token
    // );
    config.headers["x-identity-token"] = '';

    return config;
  });
  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      // const [encryption, _enc_error] = await LocalStorage.get(
      //   GLOBAL_CONSTANTS.lsKeys.encryption
      // );
      // if (encryption) {
      //   // response.data = decrypt(response.data)
      // }
      return response;
    },
    async (err: AxiosError) => {
      console.log(
        "api request err-------------------",
        err?.response?.data,
        err?.response?.request?._url
      );
      // const [token, _error] = await LocalStorage.get(GLOBAL_CONSTANTS.lsKeys.token);
      if (err?.response?.data === "You have been logged out from this device") {
        // store.dispatch(handleLogout(true));
      }
      // if (err?.response?.data === "token expired") {
      //   store.dispatch(handleLogout(true));
      // }
      return Promise.reject(err);
    }
  );
  return instance;
};

const BaseApi = fetchClient()
export default BaseApi;
