import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Fetch fleet list with pagination & search
export const getFleetList = async (page = 1, limit = 20, search = '') => {
  try {
    // RandomUser API doesn't support search, but we simulate it using seed + page
    const res = await api.get(`?page=${page}&results=${limit}&seed=fleet`);
    let results = res.data.results;

    // Filter locally for search simulation
    if (search) {
      results = results.filter((item) =>
        `${item.name.first} ${item.name.last}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    return results;
  } catch (error) {
    console.log('Fleet API Error:', error.message);
    throw error;
  }
};
