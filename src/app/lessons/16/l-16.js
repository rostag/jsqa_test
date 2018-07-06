/**
 * Leson 16. Using regular expressions to parse homeworks.
 */

'use strict';

(function () {

    // Import using relative file
    require('../../util/console');
    // Import using module name
    let fs = require('fs');
    let path = require('path');

    console.h1('Lesson 16. Using regular expressions to parse homeworks.');

    const lessonIds = ['01'];
    // const lessonIds = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

    const lessonSolutions = {
        '01': {
            '01': 'answer: ye+s',
            '02': 'use strict;',
            '03': 'boolean,number,string,null,undefined,symbol'
        },
        '02': [ ],
        '03': [ ],
        '04': [ ],
        '05': [ ],
        '06': [ ],
        '07': [ ]
    };

    function loadLessonAsAText(lessonId, callback) {
        let lessonFilePath = path.join(__dirname, '..', lessonId, 'l-' + lessonId + '.js');

        function augmentedCallback(err, data) {
            callback(err, data, lessonId);
        };

        fs.readFile(lessonFilePath, 'utf8', augmentedCallback);    
    }

    function parseLoadedLessonText(err, lessonText, lessonId) {
        if (err) {
            console.log('Error loading file:', err);
        }
        // console.log('Loaded Lesson by ID:', lessonId);
        console.log(`Lesson ${lessonId} Answers: ${lessonSolutions[lessonId]}`);
        console.log('Loaded Lesson Text:', lessonText);

        function extractTaskById(taskId, nextTaskId) {
            // let taskStartRegExp = /Task 01\.01/g;
            let taskStartRegExp = new RegExp('Task ' + lessonId + '\.' + taskId, 'g');
            // let taskEndRegExp = /Task 01\.02/g;
            let taskEndRegExp = new RegExp('Task ' + lessonId + '\.' + nextTaskId, 'g');
                
            taskStartRegExp.test(lessonText);
            taskEndRegExp.test(lessonText);
    
            console.log('Start index:', taskStartRegExp.lastIndex);
            console.log('End index:', taskEndRegExp.lastIndex);
    
            return lessonText.substring(taskStartRegExp.lastIndex, taskEndRegExp.lastIndex);
        }

        function checkTaskById(taskId, taskText) {
            let answerRegExp = new RegExp(lessonSolutions[lessonId][taskId], 'i');
            return answerRegExp.test(taskText)
        }
        
        console.log('-------------- Task text: ', extractTaskById('01', '02'));
        console.log('-------------- Answer matches: ', checkTaskById('01', extractTaskById('01', '02')));
        
    }

    function loadAndParseAllLessonsAsAText() {
        for (let i = 0; i < lessonIds.length; i++) {
            loadLessonAsAText(lessonIds[i], parseLoadedLessonText);
        }
    }

    loadAndParseAllLessonsAsAText();

})();