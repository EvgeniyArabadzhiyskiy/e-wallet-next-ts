import { BASE_URL } from "../constants/apiPath";

export async function fetcher<T>(url: RequestInfo, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return await response.json();
}
