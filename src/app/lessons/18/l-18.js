/**
 * Leson 17. Using regular expressions to parse homeworks.
 * Reading file's output.
 */

'use strict';

(function () {

    // Import using relative file
    require('../../util/console');
    // Import using module name

    console.h1('Lesson 18 Started!');

    // async / await function example
    function resolveIn2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Resolved in 2 seconds');
            }, 2000)
        });
    }

    async function asyncCall() {
        console.log('calling async');
        const result = await resolveIn2Seconds();
        console.log('Result:', result);
    }

    asyncCall();

    // Old School:
    function saySomething(message) {
        console.log('Got message:', message);
    }

    setTimeout(() => saySomething("1 second passed"), 1000);

    // Promise way:
    const wait = ms => new Promise((resolve, reject) => {
        reject('Something strange happened!');
        setTimeout(resolve, ms);
    })

    wait(3000).then(() => saySomething('3 sec passed')).catch(errorMessage => {
        console.log('Error:', errorMessage);
    });

})();