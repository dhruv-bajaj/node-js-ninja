const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},{timestamps:true})

// "Blog" : Singular of collection name, it will be plularized Blogs(a collection in db will be made)
// and will be looked inside db
const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;