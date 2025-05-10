export const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  };