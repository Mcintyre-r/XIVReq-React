import Axios from 'axios';


const userLogin = (oAuth, setLogin, setUser, user) => {
    if(user){
        if(typeof user === 'string'){
            setUser(JSON.parse(user))
        }
        setLogin(true)
    }
    else if(oAuth){
        const uuid = oAuth.split('=')[1]
        Axios.get(`${process.env.REACT_APP_BASEURL}/api/user/`, { params: {'uuid': uuid}})
            .then( res => {
                if(!res.data) return null
                localStorage.setItem('xivReqUser', JSON.stringify(res.data))
                setUser(res.data)
                setLogin(true)
            })
            .catch(err => console.log(err))
    }
}

export default userLogin;