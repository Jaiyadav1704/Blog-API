import {db} from "../Data/db.js"

export const CreateBlog = async(title,content,userId) => {
    const result = await db.query("INSERT INTO blog(title,content,user_id) VALUES ($1,$2,$3) RETURNING *", [title,content,userId])
    return result.rows[0];
}

export const GetAllBlog = async() => {
    const result = await db.query("SELECT * FROM blog")
    return result.rows
}

export const GetBlog = async(userId) => {
    const result = await db.query("SELECT * FROM blog where user_id = $1", [userId])
    return result.rows
}

export const getBlogbyId = async(id) => {
    const result = await db.query("SELECT * FROM blog WHERE id = $1", [id])
    return result.rows[0]
}

export const Delete = async(id) => {
    const result = await db.query("DELETE FROM blog WHERE id = $1", [id])
    return result.rowCount
}
