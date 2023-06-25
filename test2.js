const axios = require('axios')

let header = {
'headers':{'Content-Type':'application/json'},
'email':'abdi@gmail.com', 'password':'abdi'}

const retrive = async ()=>{
    let response = await axios.post('http://127.0.0.1:8000/api/token/', header)
    console.log(response)
}
retrive()