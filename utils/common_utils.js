/* Node Imports */

/* Framework Imports */

/* Local Imports */
var response_codes = require("../utils/response_codes");


const api_error_handler = async (req, res, next, call_back) => {
  try{
    return await call_back(req, res, next);
  }
  catch (err) {
    console.error(err);
    return res.json({
      response_code: response_codes.CODE_INTERNAL_SERVER_ERROR,
      response_message: response_codes.MESSAGE_RESPONSE_INTERNAL_SERVER_ERROR
    });
  }
}


const response_generator = (response_code, response_message, response_data = null) => {
  if (!response_data)
    return { response_code: response_code, response_message: response_message };
  
  return {
    response_code: response_code,
    response_message: response_message,
    response_data: response_data,
  };
};

const object_is_empty = (object) => {
  return Object.keys(object).length < 1
}

module.exports = {
  api_error_handler: api_error_handler,
  response_generator: response_generator,
  object_is_empty: object_is_empty,
};
