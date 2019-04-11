const baseUrl = "https://www.atg.se/services/racinginfo/v1/api/";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const api = async (endPoint, body = {}, method = "GET") => {
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  let data = null;

  if (method === "GET") {
    data = {
      method: `${method}`,
      headers: defaultHeaders
    };
  } else {
    data = {
      method: `${method}`,
      headers: defaultHeaders,
      body: JSON.stringify(body)
    };
  }

  const responseData = await fetch(proxyurl + baseUrl + endPoint, data).then(
    response => {
      if (!response.ok) {
        throw response.statusText;
      }
      return response.json();
    }
  );

  return responseData;
};

export default api;
