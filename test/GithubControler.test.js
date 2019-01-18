'use strict';

const rp = require('request-promise');
let options = {
    uri: '',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

const baseUrl = "http://localhost:3000/api/users";
describe('Transaction', () => {
    it('test endpoint get user by sincee', () => {
        options.uri = `${baseUrl}?since=5`;
        rp(options)
            .then((err, result) => {
                expect(err).toEqual(null);
                expect(result[0].id).toEqual(6);
            });
    });
    it('test endpoint get user detail my profile', () => {
        options.uri = `${baseUrl}/filipemazzon/details`;
        rp(options)
            .then((err, result) => {
                expect(err).toEqual(null);
                expect(result.login.toLowerCase()).toEqual("filipemazzon");
            });
    });
    it('test endpoint get user detail my profile', () => {
        options.uri = `${baseUrl}/filipemazzon/details`;
        rp(options)
            .then((err, result) => {
                expect(err).toEqual(null);
                expect(result.login.toLowerCase()).toEqual("filipemazzon");
            });
    });
    it('test endpoint get user repositories my profile', () => {
        options.uri = `${baseUrl}/filipemazzon/repos`;
        rp(options)
            .then((err, result) => {
                expect(err).toEqual(null);

            });
    });
    it('test endpoint not exist', () => {
        options.uri = `${baseUrl}/filipemazzon/notexist`;
        rp(options)
            .then((err, result) => {
                expect(err).toEqual(null);
                expect(result).toEqual({
                    "message": "Not Found"
                })
            });
    });
    it('test endpoint with user not exist', () => {
        options.uri = `${baseUrl}/aijassijsa/details`;
        rp(options)
            .then((err, result) => {
                expect(err).toEqual(null);
                expect(result.statuscode).toEqual(404)
            });
    });


});
