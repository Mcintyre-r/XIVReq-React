import Axios from 'axios'


const requestHandler =  (setFunc) => {
    Axios.get('http://localhost:5000/api/requests/').then( res => {
      const requests = res.data.Requests
      requests.sort( (a, b) => {
        return a.completed - b.completed
      })
      setFunc(requests)
    })
  }

export default requestHandler;