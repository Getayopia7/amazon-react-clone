import axios from 'axios';
const instance = axios.create({
	baseURL: "https://us-central1-react-clone-36f72.cloudfunctions.net/api",
});
export default instance;
// http://localhost:5001/clone-ef0ad/us-central1/api
//http://127.0.0.1:5001/react-clone-36f72/us-central1/api
///baseUrl:https://us-central1-clone-ef0ad.cloudfunctions.net/api
//https://us-central1-react-clone-36f72.cloudfunctions.net/api