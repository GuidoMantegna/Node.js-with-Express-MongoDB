/*
blog_index to get all the blogs and inject those into the index view
blog_details to get a single blog
blog_create_get to send back the actual form (GET request)
blog_create_post to add a new blog (POST request)
blog_delete to delete a blog (DELETE request)
*/

// Comunicate with the DB
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    //Find all blogs in DB and sort it from newest to oldest
    Blog.find().sort({ createdAt: -1 }) 
        .then(result => {
            //Render index.js passing this props.
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch(err => console.log(err));
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blog not found' });
        });
};

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
};

const blog_contact_get = (req, res) => {
    res.render('contact', { title: 'Contact us' });
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then(result => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_contact_get,
    blog_create_post,
    blog_delete,
}