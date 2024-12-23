const API_URL = process.env.API_URL || 'https://hyper-hire-five.vercel.app';

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
