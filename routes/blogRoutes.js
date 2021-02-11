const express = require('express');
const blogController = require('../controllers/blogController')

// Create a new instance of a Router Object
const router = express.Router();

// Blog routes
// get all the blogs and inject those into the index view
router.get('/', blogController.blog_index);
// add a new blog (POST request)
router.post('/', blogController.blog_create_post);
// send back the actual form (GET request)
router.get('/create', blogController.blog_create_get);
// send back the contact form (GET request)
router.get('/contact', blogController.blog_contact_get);
// get a single blog
router.get('/:id', blogController.blog_details);
// delete a blog (DELETE request)
router.delete('/:id', blogController.blog_delete);

// Export the router
module.exports = router;