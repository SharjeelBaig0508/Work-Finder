/* Node Imports */

/* Framework Imports */

/* Local Imports */
var our_teams_model = require('../model/our_teams_model');
var our_teams_utils = require('../utils/our_teams_utils');
var response_codes = require("../utils/response_codes");
var common_utils = require("../utils/common_utils");
var our_teams_utils = require("../utils/our_teams_utils");


const read_teams_controller = async(filter_body) => {
    if (!filter_body) {
        const user = await our_teams_model.find();
        return our_teams_utils.filter_multiple_our_teams_object(our_team), 
            response_codes.CODE_RESPONSE_SUCCESS, 
            response_codes.MESSAGE_RESPONSE_SUCCESS
    }
    
    const user = await our_teams_model.findById(filter_body.id);
    return our_teams_utils.filter_our_teams_object(our_team), 
        response_codes.CODE_RESPONSE_SUCCESS, 
        response_codes.MESSAGE_RESPONSE_SUCCESS
}


module.exports = {
    read_teams_controller: read_teams_controller,
}
