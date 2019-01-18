'use strict';
const express = require('express');
const router = express.Router();

const GithubController = require('../controllers/Github');

router.get('/', (req, res) => {
    GithubController.getAllUser(req, res);
});

router.get('/:username/details', (req, res) => {
    GithubController.getUserDetails(req, res);
});

router.get('/:username/repos', (req, res) => {
    GithubController.getUserRepository(req, res);
});

module.exports = router;
