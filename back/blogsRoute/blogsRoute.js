//TASK 8: RESTful API Design: Design and implement a REST API in Express.js for a simple blog application with routes for creating, reading, updating, and deleting blog posts.

import  express  from 'express';
const router = express.Router();

let blogPosts = [];
let postId = 1;

// Create a new blog post
router.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: postId++, title, content };
  blogPosts.push(newPost);
  res.status(201).json({ message: 'Post created', post: newPost });
});

// Get all blog posts
router.get('/posts', (req, res) => {
  res.json(blogPosts);
});

// Get a single blog post by ID
router.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const post = blogPosts.find((p) => p.id === parseInt(id));
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

// Update a blog post by ID
router.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = blogPosts.find((p) => p.id === parseInt(id));
  if (!post) return res.status(404).json({ message: 'Post not found' });

  post.title = title || post.title;
  post.content = content || post.content;

  res.json({ message: 'Post updated', post });
});

// Delete a blog post by ID
router.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  blogPosts = blogPosts.filter((p) => p.id !== parseInt(id));
  res.json({ message: 'Post deleted' });
});

export default router;
