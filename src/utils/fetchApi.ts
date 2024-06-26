const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  const res = await fetch(endpoint, options);
  
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  
  const json = await res.json();
  
  return json;
};

export default fetchApi;