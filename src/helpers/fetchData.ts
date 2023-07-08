export async function fetchData<T>(url: RequestInfo, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}
