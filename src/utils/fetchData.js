import axios from "axios";
export const fetchData = async (searchJob) => {
     
     console.log('search job '+searchJob);
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: searchJob,
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'e78841befdmsh29ae223635b28eap1fbae7jsnb6936356052e',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
  
    
  }