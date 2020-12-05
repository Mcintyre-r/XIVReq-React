import Axios from 'axios'


const requestHandler =  (setFunc) => {
    Axios.get('http://xivreq.herokuapp.com/api/request/').then( res => {
      const requests = res.data.Requests
      requests.sort( (a, b) => {
        return a.completed - b.completed
      })
      setFunc(requests)
    })
  }

export default requestHandler;