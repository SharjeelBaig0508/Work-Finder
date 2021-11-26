/* Node Imports */

const common_utils = require("./common_utils");

/* Framework Imports */

/* Local Imports */


function filter_multiple_our_teams_object(our_teams){
    let our_teams_array = [];
    our_teams.forEach(our_team => {
        our_teams_array.push({
            id: our_team._id,
            name: our_team.name,
            designation: our_team.designation,
            short_description: our_team.short_description,
            social_media_links: our_team.social_media_links
        })
    });
    return our_teams_array;
}


function filter_our_teams_object(our_team){
    if (!our_team){
        return {}
    }
    return {
        id: our_team._id,
        name: our_team.name,
        designation: our_team.designation,
        short_description: our_team.short_description,
        full_description: our_team.full_description,
        social_media_links: our_team.social_media_links,
        email_address: our_team.email_address
    }
}


module.exports = {
    filter_multiple_our_teams_object: filter_multiple_our_teams_object,
    filter_our_teams_object: filter_our_teams_object,
}
