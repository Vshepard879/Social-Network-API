const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Set up Get all and Post at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);
    
// Set up Get one, Put, and Delete at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById) 
    .put(updateThought)
    .delete(deleteThought);
    
// Post at /api/thoughts/:id/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction);
    
// Delete at /api/thoughts/:id/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;    