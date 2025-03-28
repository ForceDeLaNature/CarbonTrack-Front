export const fetchRestApi = async (endpoint: string, method: string, body: object) => {
  const baseUrl = process.env.NEXT_PUBLIC_REST_ENDPOINT
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        body
      ),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

