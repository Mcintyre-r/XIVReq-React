import Axios from 'axios'


const requestHandler =  (setFunc, user) => {
  let query = ''
    console.log(user)
    if(user){
      query = `?id=${user.uuid}`
      console.log("query check:", query)
      console.log("user id check:", user.uuid)
    }
    Axios.get(`${process.env.REACT_APP_BASEAPIURL}/api/requests/${user.crafter?'':query}`).then( res => {
      const requests = res.data.Requests
      requests.sort( (a, b) => {
        return a.completed - b.completed
      })
      console.log(requests)
      setFunc(requests)
    })
  }

export default requestHandler;
