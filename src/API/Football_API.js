const API_KEY = '87d3bb6ab301a3fda78e0231b54bfcaf';
const BASE_URL = 'https://v3.football.api-sports.io';

export const fetchMatches = async () => {
    try {
      const response = await fetch(`${BASE_URL}/fixtures?league=39&season=2022`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error fetching matches:', error.message);
      return [];
    }
};