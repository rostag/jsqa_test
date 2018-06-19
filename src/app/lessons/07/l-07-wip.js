console.log('\nPlease implement this task');

(function () {


    // Функція, що визначає сама себе: 
    var selfDefining = function (arg) {
        console.log("Initialization");
        console.log("phase 1");
        selfDefining = function (arg2, arg3) {
            console.log("phase 2");
        }
    }

    selfDefining();
    selfDefining();

    console.log(selfDefining.name);
    console.log(selfDefining.length);
    console.log(selfDefining.apply);
    console.log(selfDefining.call);

    console.h1('Memoization:')

    // Мемоїзація - запам'ятовування

    function calculation(x, y) {
        var startTime = new Date().getTime();

        var key = x.toString() + "|" + y.toString();
        var result = 0;
        if (!calculation.cache[key]) {
            for (var i = 0; i < y; ++i) result += x;
            console.log('\tcalculation for', key)
            calculation.cache[key] = result;
        }
        console.log('\time of calculation:' + (new Date().getTime() - startTime));
        return calculation.cache[key];
    }
    calculation.cache = {};

    console.log('calc', calculation(1, 1));
    console.log('calc', calculation(2, 2));
    console.log('calc', calculation(2, 2000000000));
    console.log('calc', calculation(2, 2000000000));
    console.log('calc', calculation(2, 2000000000));
    console.log('calc', calculation(2, 2000000000));

    console.h1('Arrow func')

    // Стрілочні функції

    const arrowFunc = a => a * 2;
    const nonArrowF = function (a) {
        return a * 2;
    }

    console.log(arrowFunc(2));
    console.log(nonArrowF(2));

})();