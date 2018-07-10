/**
 * Leson 17. Using regular expressions to parse homeworks.
 * Reading file's output.
 */

'use strict';

(function () {

    // Import using relative file
    require('../../util/console');
    // Import using module name

    let cp = require('child_process');
    cp.exec('echo "The \\$HOME dir is $HOME"', readOutput);

    // Read output:
    function readOutput(err, data) {
        if (err) {
            console.error(err, 'code: ', err.code, 'signal:', err.signal);
        }
        console.log('Output:', data);
    };

    // Execute lesson to get output:
    function executeLesson(lessonId, callback) {
        cp.exec('node src/app/lessons/' + lessonId + '/l-' + lessonId + '.js', function(error, stdout, stderr) {
            callback(stdout);
        });
    }

    function parseLessonOutput(lessonOutput) {
        console.log('Lesson output:', lessonOutput);
    }

    executeLesson('02', parseLessonOutput);


})();