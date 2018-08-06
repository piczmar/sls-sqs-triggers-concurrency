'use strict';

exports.handler = (event, context, callback) => {

    console.log("Start");

    const interval = setTimeout(() => {
        console.log("Wake up!");
        clearInterval(interval);
        console.log("End");
        callback(null, "");
    }, 10000); // delay 10 sec

};
