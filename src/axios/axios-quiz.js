import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-5e465.firebaseio.com/'
})