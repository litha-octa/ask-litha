import axios from "axios";

const getApiBaseUrl = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  // Use CORS proxy in development, direct URL in production
  return `${baseUrl}/generate-text`;
};

export const generateText = async (prompt: string) => {
  const response = await axios.post<{ response: string }>(
    getApiBaseUrl(),
    { prompt },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};