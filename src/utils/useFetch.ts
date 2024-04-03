import { useState } from "react";
import fetchApi from "./fetchApi"

type RequestType = 'GET' | 'POST' | 'DELETE' | 'PUT';
  
const useFetch = (endpoint: string, method: RequestType = 'GET', options: Omit<RequestInit, 'method'> = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const execute = async (body?: any) => {
    const res = await fetchApi(endpoint, {
      ...options,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(body) : null,
    });
  
    if (res.err) {
      setError(res.err);
    }
  
    if (res) {
      setData(res);
    }
  
    return res;
  };
  
  return {
    data,
    error,
    execute,
  };
};

export default useFetch;