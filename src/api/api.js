import axios from 'axios';

const userAxios = axios.create({
    // baseURL: "/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": 'true'
    }
})
const apiUrl = '/api'

/** create todo
 * @param { String } thing
 */
export const addTodo = (params) => userAxios.post(`${apiUrl}`, params);

/** get todo data
 * @param { int } id
 * @param { String } thing
 * @param { int } isDone 
 */
export const getTodo = () => userAxios.get(`${apiUrl}`);

/** gat todo data hava status
 * @param { int } status // 0/1 未完成/已完成 
 */
export const getStatus = (status) => userAxios.get(`${apiUrl}/${status}`);

/** delete todo
 * 
 */
export const delTodo = (id) => userAxios.delete(`${apiUrl}/${id}`);

/** update done todo
 * 
 */
export const doneTodo = (id) => userAxios.put(`${apiUrl}/${id}`);

/** update todo content
 * 
 */
export const updateTodo = (id, params) => userAxios.put(`${apiUrl}/info/${id}`, params);