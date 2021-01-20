// require('dotenv').config();

function hashSecret(api_call, param_call, secret) {
    let sha1 = require('js-sha1');
    let hash = sha1.create();
    hash.update(api_call + param_call + secret);
    return hash.hex();
}

export function createApiCall(api_call, params, secret) {
    
    const calls = Object.keys(params).map(key => {
        return key + "=" + params[key];
    })
    let param_call = "";
    for(let i = 0; i < calls.length; i++) {
        param_call += calls[i] + "&";
    }
    param_call = param_call.slice(0, -1);
    const checksum = hashSecret(api_call, param_call, secret);

    return param_call + "&checksum=" + checksum;    
}

export function urlCall(api_call, params) {
    return process.env.REACT_APP_BBB_PROXY + "/" + api_call + "/?" + createApiCall(api_call, params, process.env.REACT_APP_BBB_SECRET);
}

export function bbbCall(api_call, params) {
    return process.env.REACT_APP_BBB_HOST + "/bigbluebutton/api/" + api_call + "?" + createApiCall(api_call, params, process.env.REACT_APP_BBB_SECRET);
}