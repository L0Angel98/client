const configurationFetch = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};

export function getFetch (url)  {

  const fetchData = async () => {
    const response = await fetch(url, {
      method: "GET",
      ...configurationFetch
    });
    return response.json();
  }

  return fetchData();
};

export function postFetch (url, dataSend)  {

  const fetchData = async () => {
    const response = await fetch(url, {
      method: "POST",
      ...configurationFetch,
      body: JSON.stringify(dataSend)
    });
    return response.json();
  }
 
  return fetchData();
};