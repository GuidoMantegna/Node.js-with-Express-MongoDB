// Import the mongoose object
const mongoose = require('mongoose');

/* The schema is going to define the structure of the document,
Is the thing that a module wraps around. */
const Schema = mongoose.Schema; // This is a constructor func.

/* Create a new instance of the Schema object. 
It'll define the structure of our document. It takes two arguments:
1. An object that define the structure of the doc that we want to store
in the blogs collection.
2. An options object: it will automatically create timestamps ptops. for our blog document.
*/
const blogSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
}, { timestamps: true });

/* The model wrap the schema and then provide us 
an interface to comunicate with a DB collection 
The model takes two arguments:
1. The name of the model.
2. The schema which is going to work with.
*/
const Blog = mongoose.model('Blog', blogSchema)

// Export the module
module.exports = Blog;