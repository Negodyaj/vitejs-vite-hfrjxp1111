import wretch, { WretchError } from "wretch";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const sendGetRequest = async <T>(path: string): Promise<T> => {
  return await wretch(baseUrl)
    .get(path)
    .badRequest((err) => console.log(err.status))
    .unauthorized((err) => console.log(err.status))
    .forbidden((err) => console.log(err.status))
    .notFound((err) => handleNotFound(err))
    .timeout((err) => console.log(err.status))
    .internalError((err) => console.log(err.status))
    .error(422, (err) => console.log(err.status))
    .fetchError((err) => console.log(err))
    .json();
};

export const sendPostRequest = async (path: string, payload: unknown) => {
  return await wretch(baseUrl)
    .url(path)
    .post(payload)
    .badRequest((err) => console.log(err.status))
    .unauthorized((err) => console.log(err.status))
    .forbidden((err) => console.log(err.status))
    .notFound((err) => handleNotFound(err))
    .timeout((err) => console.log(err.status))
    .internalError((err) => console.log(err.status))
    .error(422, (err) => console.log(err.status))
    .fetchError((err) => console.log(err))
    .res();
};

const handleNotFound = (err: WretchError) => {
  console.log("please check your request url: " + err.url);
};
