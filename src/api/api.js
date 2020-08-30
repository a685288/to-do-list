import axios from 'axios';

const userAxios = axios.create({
    // baseURL: "/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": 'true'
    }
})
const apiUrl = "/api"

/** get todo data
 * @returns { int } id
 * @returns { String } thing
 * @returns { int } isDone
 */
export const getTodo = () => userAxios.get(`${apiUrl}`);

/** create todo
 * @param { String } thing
 */
export const addTodo = (params) => {};

/** gat todo data hava status
 * @param { int } status // 0/1 未完成/已完成 
 */
export const getStatus = (status) => {};

/** delete todo
 * @param { int } id
 */
export const delTodo = (id) => {};

/** update done todo
 * @param { int } id
 */
export const doneTodo = (id) => {};

/** update todo thing
 * @param { int } id
 * @param { thing } thing
 */
export const updateTodo = (id, params) => {};