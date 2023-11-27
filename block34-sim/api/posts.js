const express = require('express');
const postsRouter = express.Router();

const { requireUser } = require('./utils');

const { 
  createPost,
  getAllPosts,
  updatePost,
  getPostById,
} = require('../db');

postsRouter.post('/', requireUser, async (req, res, next) => {
  const { title, content, tags = [] } = req.body;

  const postData = {
    authorId: req.user.id,
    title,
    content,
  };
  try {
    const post = await createPost(postData);

    if(post){
      if(tags.length > 0){
        await createTags(tags);
        await addTagsToPost(post.id, tags);
      }
      res.send(post);
    } else {
      next({
        name: 'PostCreateError',
        message: 'Error creating post, try again.',
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});


postsRouter.patch('/:postId', requireUser, async (req, res, next) => {
  const { postId } = req.params;
  const { title, content, tags } = req.body;

  const updateFields = {};

  if (tags && tags.length > 0) {
    updateFields.tags = tags.trim().split(/\s+/);
  }

  if (title) {
    updateFields.title = title;
  }

  if (content) {
    updateFields.content = content;
  }

  try {
    const originalPost = await getPostById(postId);

    if (originalPost.author.id === req.user.id) {
      const updatedPost = await updatePost(postId, updateFields);
      res.send({ post: updatedPost })
    } else {
      next({
        name: 'UnauthorizedUserError',
        message: 'You cannot update a post that is not yours'
      })
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

postsRouter.delete('/:postId', requireUser, async (req, res, next) => {
  try {
    const post = await getPostById(req.params.postId);

    if (post && post.author.id === req.user.id) {
      const updatedPost = await updatePost(post.id, { active: false });

      res.send({ post: updatedPost });
    } else {
      next(post ? { 
        name: "UnauthorizedUserError",
        message: "You cannot delete a post which is not yours!"
      } : {
        name: "PostNotFoundError",
        message: "That post does not exist!"
      });
    }

  } catch ({ name, message }) {
    next({ name, message })
  }
});

module.exports = postsRouter;