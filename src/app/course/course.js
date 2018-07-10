// src/app/course/index.js

(function () {

    let fs = require('fs');
    let cp = require('child_process');
    let path = require('path');

    const config = require('../config/config');
    const c = config.getInstance();

    c.loadConfig('lessons.config.json', parseConfig);

    startDate = new Date();

    function parseConfig(err, data) {
        if (err) {
            console.log(err);
        }
        console.log('Lessons Config Loaded:', data);
    }

    // LessonFactory
    // Parent Constructor
    function LessonFactory() {}

    // Parent Method
    LessonFactory.prototype.execute = function () {
        console.log('Execute:', this.lessonName);
        if (this.tasks) {
            for (let i = 0; i < this.tasks.length; i++) {
                console.log('Task:', this.tasks[i]);
            }
        }
    };
    // Static Factory Method - factory
    LessonFactory.factory = function (lessonName, type) {
        var constr = type,
            newLesson;
        // Error if constructor doesn't exist
        if (typeof LessonFactory[constr] !== "function") {
            throw {
                name: "Error",
                message: constr + " doesn't exist"
            };
        }
        // Contructor is here, let's inherit 'execute' from parent constructor, but only once
        if (typeof LessonFactory[constr].prototype.execute !== "function") {
            LessonFactory[constr].prototype = new LessonFactory();
        }
        // Create new instance
        newLesson = new LessonFactory[constr]();
        newLesson.lessonName = lessonName;
        return newLesson;
    };
    // Concrete lesson constructions
    LessonFactory.Theoretical = function () {
        this.tasks = null;
    };
    LessonFactory.Practical = function () {
        this.tasks = [1, 2, 3];
    };

    // --------------------------------






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
        let lessonFilePath = path.join(__dirname, '..', 'lessons', lessonId, 'l-' + lessonId + '.js');

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

    console.log('-----------------------------------------------')

    loadAndParseAllLessonsAsAText();








    // --------------------------------    
    
    
    // Execute lesson to get output:
    function executeLesson(lessonId, callback) {
        cp.exec('node src/app/lessons/' + lessonId + '/l-' + lessonId + '.js', function(error, stdout, stderr) {
            callback(stdout);
        });
    }
    
    function parseLessonOutput(lessonOutput) {
        console.log('-----------------------------------------------')
        console.log('Lesson output:', lessonOutput);
    }

    executeLesson('02', parseLessonOutput);
    

    // --------------------------------



    // Public Module API
    exports.getStartDate = () => startDate;
    exports.createLesson = LessonFactory.factory;

})();