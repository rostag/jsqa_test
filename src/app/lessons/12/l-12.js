/**
 * Lesson 12. 
 *  NodeJS
 *      Loading and Writing Files
 *          fs module
 *          path module
 *          Using Relative Paths
 *          readFile vs readFileSync
 *          Asynchronous Code vs Synchronous Code
 *      Callbacks in Practice
 *  Loading App Config via Singleton Service
 */

'use strict';

(function () {
    // This is relative path!
    require('../../util/console');
    let fs = require('fs');
    var path = require('path');
    var jsonPath = path.join(__dirname, '..', '..', 'data', 'students.json');

    console.h1('Lesson 12');
    console.h2('Load file:');

    // Read File using absolute path:
    // fs.readFile('/etc/hosts', 'utf8', function (err, data) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data);
    // });

    // 

    // Load Students:
    fs.readFile(jsonPath, 'utf8', function (err, data) {
        if (err) {
            return console.log('Data load error: ', err);
        }
        console.log(data);
    });

}());