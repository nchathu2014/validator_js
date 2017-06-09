import validate from 'validate.js';

let response={};
let constraints = {
  txtTitle: {
    presence: true,
  }
};

/**
 * Public message cater from the triggering point
 * @returns {string}
 */
export default function vqbValidator(){
 let returnMsg='';
  switch(arguments[0]){
    case "txtTitle":
      returnMsg = _handleTitleValidation(arguments[1]);
      break;
  }
  return returnMsg;
}

/**
 * Private method handling the title validation
 * @param validateContent
 * @returns {{}}
 * @private
 */
function _handleTitleValidation(validateContent){
  var result = validate({txtTitle:validateContent},{txtTitle:{presence: true}});
  if(result){
    response['status']= true;
    response['message']="Title cannot be empty"
  }else if(validateContent.length > 8){
    response['status']=true;
    response['message']="Length exceed"
  }else{
    response['status']=false;
    response['message']=""
  }
  return response
}



