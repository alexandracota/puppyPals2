import axios from 'axios';
// import keys from 'keys.js';

// export default {
// 	SearchDog: function() {
// 		return axios.get('http://api.petfinder.com/my.method?' + {keys.apiKey} + '&arg1=dachshund');
// 	}
// }

const BASE_URL = 'http://localhost:3333';

export {getDogData};

function getDogData() {
	const url = `${BASE_URL}/api/dogs`;
	return axios.get(url).then(response => response.data); 
}