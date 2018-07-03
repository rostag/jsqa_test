/**
 * Le**on 15. Regular expressions. Part 2
 */

'use strict';

(function () {
    require('../../util/console');    

    console.h1('Le**on 15. Regular expressions');

    function testRegexpOnAString(str, regex) {
        console.log(`\nString: "${str}" RegExp: ${regex}`);
        console.log('Search result:', str.match(regex));
    }

    let regex = /s{2}/g;
    let regexLocal = /s{2}/;
    let str = 'Lesson 14 is finished, Lesson 15 is not. Assuming you are still working on it.';

    // Test:
    console.h3('RegExp.prototype.test() [GLOBAL]');

    console.log(regex.test(str), regex.lastIndex);
    console.log(regex.test(str), regex.lastIndex);
    console.log(regex.test(str), regex.lastIndex);
    console.log(regex.test(str), regex.lastIndex);

    console.h3('RegExp.prototype.test() [LOCAL]');

    console.log(regexLocal.test(str), regexLocal.lastIndex);
    console.log(regexLocal.test(str), regexLocal.lastIndex);
    console.log(regexLocal.test(str), regexLocal.lastIndex);
    console.log(regexLocal.test(str), regexLocal.lastIndex);

    // Execute:
    console.h3('RegExp.prototype.exec() [GLOBAL]');

    console.log(regex.exec(str), regex.lastIndex);
    console.log(regex.exec(str), regex.lastIndex);
    console.log(regex.exec(str), regex.lastIndex);
    console.log(regex.exec(str), regex.lastIndex);

    console.h3('RegExp.prototype.exec() [LOCAL]');

    console.log(regexLocal.exec(str), regexLocal.lastIndex);
    console.log(regexLocal.exec(str), regexLocal.lastIndex);
    console.log(regexLocal.exec(str), regexLocal.lastIndex);
    console.log(regexLocal.exec(str), regexLocal.lastIndex);



    // Match:
    console.h3('String.prototype.match() [GLOBAL]');

    console.log(str.match(regex), regex.lastIndex);
    console.log(str.match(regex), regex.lastIndex);
    console.log(str.match(regex), regex.lastIndex);
    console.log(str.match(regex), regex.lastIndex);
    
    console.h3('String.prototype.match() [LOCAL]');
    
    console.log(str.match(regexLocal), regexLocal.lastIndex);
    console.log(str.match(regexLocal), regexLocal.lastIndex);
    console.log(str.match(regexLocal), regexLocal.lastIndex);
    console.log(str.match(regexLocal), regexLocal.lastIndex);

    // Search
    
    console.h3('String.prototype.search() [GLOBAL]');
    console.log(str.search(regex), regex.lastIndex);
    console.log(str.search(regex), regex.lastIndex);
    console.log(str.search(regex), regex.lastIndex);
    console.log(str.search(regex), regex.lastIndex);
        
    console.h3('String.prototype.search() [LOCAL]');
    console.log(str.search(regexLocal), regexLocal.lastIndex);
    console.log(str.search(regexLocal), regexLocal.lastIndex);
    console.log(str.search(regexLocal), regexLocal.lastIndex);
    console.log(str.search(regexLocal), regexLocal.lastIndex);

    // Homework
    // Task 1 - Review Slide # 23

}());