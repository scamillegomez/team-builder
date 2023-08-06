import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Antonio',
    email: 'antonio@antonio.com',
    role: 'The Boss',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Cooper',
    email: 'cooper@cooper.com',
    role: 'The Noble Steed',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Whitney',
    email: 'whitney@whitney.com',
    role: 'The Really Smart Sister',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default  {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { username, email, role }) {
    const newTeamMember = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}