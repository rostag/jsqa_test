/**
 * Les****on 14. 
 */

'use strict';

(function () {
    // This is relative path
    require('../../util/console');    

    console.h1('Lesson 14');

    function testRegexpOnAString(str, regex) {
        console.log(`\nString: "${str}" RegExp: ${regex}`);
        console.log('Search result:', str.match(regex));
    }

    testRegexpOnAString('Lesson 14', /14$/);
    testRegexpOnAString('eater', /t$/);
    testRegexpOnAString('eat', /t$/);
    
    testRegexpOnAString(`RegExr v3 was
    Re-created`, /^R/gm);

    testRegexpOnAString('et', /a+/);
    testRegexpOnAString('et', /a*/);
    
    testRegexpOnAString('angel', /e?le?/);
    testRegexpOnAString('elaborate', /e?le?/);
    testRegexpOnAString('lion', /e?le?/);
    testRegexpOnAString('elections', /e?le?/);
    
    testRegexpOnAString('elections.', /.+\./);
    
    
    const replaceResult = 'foo bar foo bar'.replace(/(foo) (bar) \1 \2/, 'Replaced: $2 $1');

    console.log('Replace result:', replaceResult);

    testRegexpOnAString('elelelections.', /le{1,2}/);
    testRegexpOnAString('elelelections.', /(?:le){1,2}/);
    
    // Lookahead:
    testRegexpOnAString('Elections are zoom.', /are(?=\ssoon|\szoom)/);

    // Negated Lookahead:
    testRegexpOnAString('Elections are soon.', /are(?!\ssoon)/);
    
    testRegexpOnAString('Electins soon are soon.', /(Elections|are)(?=\ssoon)/);
    
    testRegexpOnAString('Elections soon are soon.', /Elections|are/);
    
    testRegexpOnAString('Elections are soon, very sooooooon.', /o{1,2}/g);

}());