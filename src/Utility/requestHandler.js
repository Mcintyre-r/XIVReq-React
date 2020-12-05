import Axios from 'axios'


const requestHandler =  (setFunc, user) => {
  let query = ''
    if(user){
      query = `?id=${user.uuid}`
    }
    console.log(user)
    Axios.get(`https://xivreq.herokuapp.com/api/requests/${user.crafter?'':query}`).then( res => {
      const requests = res.data.Requests
      requests.sort( (a, b) => {
        return a.completed - b.completed
      })
      setFunc(requests)
    })
  }

export default requestHandler;