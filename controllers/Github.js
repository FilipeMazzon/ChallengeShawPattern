var rp = require('request-promise');

const getUserDetails = (req, res) => {
    const username = req.params.username;
    const options = {
        uri: `https://api.github.com/users/${username}`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (repos) {
            res.send(repos);
        }).catch(function (err) {
        res.send(err);
    });
};

const getUserRepository = (req, res) => {
    const username = req.params.username;
    const options = {
        uri: `https://api.github.com/users/${username}/repos`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (repos) {
            res.send(repos);
        }).catch(function (err) {
        res.send(err);
    });
};

const getAllUser = (req, res) => {
    const since = req.query.since;
    const options = {
        uri: `https://api.github.com/users?since=${since}`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(function (repos) {
            res.send(repos);
        }).catch(function (err) {
        res.send(err);
    });
};

exports = module.exports = {
    getUserDetails,
    getUserRepository,
    getAllUser
};