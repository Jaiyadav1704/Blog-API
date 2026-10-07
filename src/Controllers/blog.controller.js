import * as blogModel from "../Models/BlogModel.js"

export const createblog = async(req, res) => {
    const {title, content} = req.body
    const userId = req.userId

    const newblog = await blogModel.CreateBlog(title,content,userId)

    res.status(201).json({
        message:"New blog added",
        blog: newblog
    })
}

export const getAllBlogs = async(req,res) => {

    const filterBlog = await blogModel.GetAllBlog()
    res.json(filterBlog)
}

export const getMyBlogs = async(req,res) => {
    const userId = req.userId;

    const myblog = await blogModel.GetBlog(userId)
    res.json(myblog)
}

export const deleteBlog = async(req,res) => {
    const blogId = Number(req.params.id);

    const blogIndex = await blogModel.getBlogbyId(blogId)

    if (!blogIndex) {
        return res.status(404).json({ message: "Blog not found" });
    }

    if (blogIndex.user_id !== req.userId) {
        return res.status(403).json({ message: "Not allowed" });
    }

    await blogModel.Delete(blogId)

    res.json({ message: "Blog deleted" });
}
