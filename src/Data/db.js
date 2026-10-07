import pkg from "pg";
const {Pool} = pkg;

export const db = new Pool({
    user:"jaiyadav",
    host:"localhost",
    database:"Blogs",
    password:"1234",
    port:"5432"
})

console.log("Db connected")