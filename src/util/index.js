import axios from 'axios';

async function addNewSearch(category, site) {
  const newSearch = {
    category,
    site,
  };
  await axios.post('http://localhost:3001/data', newSearch);
}

export default addNewSearch;
