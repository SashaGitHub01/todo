import axios from 'axios'

export class API {
   static getUsers = async () => {
      const data = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data
   }
}