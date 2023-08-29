import { BASE_URL } from "../constants/apiPath";

export async function fetcher<T>(url: RequestInfo, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    const errorText = await response.text();
    const errorData = JSON.parse(errorText);
    console.log("rrr:", errorData);

    // const errorData = await response.json();
    const errorMessage = errorData.message || `Request failed with status ${response.status}.`;
    throw new Error(errorMessage);
  }

  const data = await response.json();
  console.log("data:", data);
  
  return data;

  
}
