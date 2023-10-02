const router = require('express').Router();
const { Comments } = require('../../models');
const { User } = require('../../models');

const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(newComment)
      res.status(200).json(newComment);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const commentData = await Comments.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
        where: {
            project_id: req.params.id
          }
      });
  
      // Serialize data so the template can read it
      const comments = commentData.map((comment) => comment.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.json({ 
        comments, 
        logged_in: req.session.logged_in 
    });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
