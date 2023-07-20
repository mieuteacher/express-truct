import axios from "axios"

module.exports =  {
    checkIp: async function(ipAdress) {
        return axios.get("http://ip-api.com/json/" + ipAdress)
        .then(res => res.data)
        .catch(er => false)
    }
}