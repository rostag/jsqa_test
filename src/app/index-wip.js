// src/app/app.js
const logger = require('./util/logger');
const lesson = require('./lesson/');
const namespace = require('./util/namespace');

logger.c.h1('Application started');
logger.c.h2('Initialization');

const l1 = lesson.createLesson('Theoretical');
const l2 = lesson.createLesson('Practice');

console.log('lesson 1:', l1.execute() );
console.log('lesson 2:', l2.execute() );

// namespace.create('modules.modules');
// console.h1('JSQA_APP: ', JSON.stringify(namespace.JSQA_APP));
// console.log(JSQA_APP);

// Task: create safe module reference function