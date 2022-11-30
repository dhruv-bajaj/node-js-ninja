const express = require('express');
const {
    blog_index, blog_details, blog_create_post,blog_create_get, blog_delete
} = require('../controllers/blogControllers');

const router = express.Router();


router.get('/', (req, res) => {
    res.redirect("/blogs");
})

router.get('/blogs', blog_index);

router.get("/blogs/create", blog_create_get);

router.get('/blogs/:id',blog_details);

router.post('/blogs', blog_create_post);

router.get('/add-blog', blog_create_post);

router.delete('/blogs/:id', blog_delete);

module.exports = router;