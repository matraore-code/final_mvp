const express = require('express');
const { check } = require('express-validator');

const notesControllers = require('../controllers/notes-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.use(checkAuth);

router.get('/:nid', notesControllers.getNoteById);

router.get('/user/:uid', notesControllers.getNotesByUserId);

router.post('/',
    [
        check('description').not().isEmpty()
    ],
    notesControllers.createNote
);

router.patch('/:nid',
    [
        check('description').not().isEmpty()
    ],
    notesControllers.updateNote
);

router.delete('/:nid', notesControllers.deleteNote);

module.exports = router;