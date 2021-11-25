/* Node Imports */


/* Framework Imports */
var express = require('express');
var router = express.Router();

/* Local Imports */
var common_utils = require("../utils/common_utils");
var our_teams_controller = require('../controller/our_teams_controller');
const response_codes = require('../utils/response_codes');


/* GET: all teams. */
router.get('/', (req, res, next) => {
    // Send all teams from database with limited fields
    const { our_teams, response_code, response_message } = our_teams_controller.read_teams_controller(req.body);
    if (response_code != response_codes.CODE_RESPONSE_SUCCESS) {
        res.send(common_utils.response_generator(
            response_code, 
            response_message
        ));
    }
    res.send(common_utils.response_generator(
        response_code, 
        response_message, 
        response_data={our_teams: our_teams}
    ));
});


/* GET: single team in detail. */
router.get('/:id', (req, res, next) => {
    // Send team from database with all required fields
});


/* POST: Create a team member. */
router.post('/', (req, res, next) => {
    // Create a team member
});


/* PUT: Update a team member. */
router.put('/:id', (req, res, next) => {
    // Update a team in database
});


/* DELETE: Delete a team member. */
router.delete('/:id', (req, res, next) => {
    // Remove a team in database
});


module.exports = router;
