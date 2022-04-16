let Post = require('../../db/models/Post');

exports.postsCreate = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postsDelete = async (req, res) => {
  const { postId } = req.params;
  try {
    const foundPost = await Post.findByPk(+postId);
    if (foundPost) {
      await foundPost.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postsUpdate = async (req, res) => {
  const { postId } = req.params;
  try {
    const foundPost = Post.findByPk(+postId);
    if (foundPost) {
      await foundPost.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postsGet = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
