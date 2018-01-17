let url = 'http://localhost:3001'

if(process.env.NODE_ENV === 'production'){
    url = 'https://bus-app-backend.herokuapp.com'
}

export default {
    url
}
