/* Node Imports */


/* Framework Imports */
var express = require('express');
var router = express.Router();

/* Local Imports */
var common_utils = require("../utils/common_utils");
var our_teams_controller = require('../controller/our_teams_controller');
const response_codes = require('../utils/response_codes');


/* GET: all teams. */
const get_all_teams = async (req, res, next) => {
    const [ our_team, response_code, response_message ] = await our_teams_controller.read_teams_controller({});
    if (response_code != response_codes.CODE_RESPONSE_SUCCESS) {
        return res.send(common_utils.response_generator(
            response_code, 
            response_message
        ));
    }
    return res.send(common_utils.response_generator(
            response_code, 
            response_message, 
            response_data={our_teams: our_team}
            ));
}

router.get('/', async (req, res, next) => {
    // Send all teams from database with limited fields
    await common_utils.api_error_handler(req, res, next, get_all_teams);
});


/* GET: single team in detail. */
const get_single_team = async (req, res, next) => {
    const [ our_team, response_code, response_message ] = await our_teams_controller.read_teams_controller(req.params);
    if (response_code != response_codes.CODE_RESPONSE_SUCCESS) {
        return res.send(common_utils.response_generator(
            response_code, 
            response_message
        ));
    }
    return res.send(common_utils.response_generator(
            response_code, 
            response_message, 
            response_data={our_teams: our_team}
            ));
}

router.get('/:id', async (req, res, next) => {
    // Send team from database with all required fields
    await common_utils.api_error_handler(req, res, next, get_single_team);
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
