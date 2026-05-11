import axios from "axios";
import type { Alumno } from "../types";

const url = 'http://localhost:3001/alumnos'

const getAll = ()=> {
  const request =axios.get(url)
  return request.then(response => response.data)
  
}
const get = (ids)=> {
  const i = ids.find(val => val.id === id )
  const request = axios.get(`${url}/${i}`)
  return request.then(response =>  response.data)
}
const post = (newUser)=> {
 const request = axios.post(url,newUser)
  return request.then(response => response.data)
}
export default {
  getAll,
  post,
  get
}