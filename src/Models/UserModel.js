import {db} from "../Data/db.js";

export const Create = async(name,email,password) => {
    const result = await db.query("INSERT INTO users(name,email, password) VALUES ($1,$2,$3) RETURNING *", [name,email,password])
    return result.rows[0]
}

export const GetUser = async(email) => {
    const result = await db.query("SELECT * FROM userS where email = $1", [email])
    return result.rows[0]
}

