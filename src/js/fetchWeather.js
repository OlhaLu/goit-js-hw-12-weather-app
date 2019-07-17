export default function fetchLocalWeather(query) {
  const baseUrl = 'http://api.apixu.com/v1';
  const resource = '/current.json';
  const reqParams = `?key=78f1a6c1d8a84e2fa2d152923192506&q=${query}`;

  return new Promise((resolve, reject) => {
    fetch(baseUrl + resource + reqParams)  
    .then(response => {
      if(response.ok) 
      return response.json();
      throw new Error()
    })
    .then(resolve)
    .catch(reject);
  });   
};
