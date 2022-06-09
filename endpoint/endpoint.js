const supertest = require ('supertest');

const api = supertest('https://reqres.in/');

export const get = () => api.get('api/users?page=2');

export const post = (body) => api.post('api/users')
.send(body)


