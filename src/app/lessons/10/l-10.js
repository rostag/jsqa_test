/**
 * Вивчення JavaScript. Урок 10. Шаблони
 *  Design Patterns
 *  - Factory
 * 
 *  node src/app/lessons/10/l-10.js
 */

'use strict';

(function () {

    // 
    // Шаблони проектування
    // 

    // Книга: Дизайн-патерни - просто, як двері Андрія Будая
    // https://sites.google.com/site/designpatternseasy/

    var JSQA_APP = JSQA_APP || {};
    JSQA_APP.namespace = function (ns_string) {
        var parts = ns_string.split('.'),
            parent = JSQA_APP,
            i;
        if (parts[0] === 'JSQA_APP') parts = parts.slice(1);
        for (i = 0; i < parts.length; i++) {
            if (typeof parent[parts[i]] === 'undefined') parent[parts[i]] = {};
            parent = parent[parts[i]];
        }
        return parent;
    };

    // 
    // Factory - Фабрика
    //

    // Призначення фабрики в тому, щоб створювати об'єкти.
    // Цей шаблон зазвичай реалізується у вигляді класів або у вигляді статичних методів класів.

    // Виконання повторюваних операцій, необхідних при створенні схожих об'єктів
    // Запропонувати користувачам фабрики спосіб створення об'єктів без необхідності знати їх тип (клас) на етапі компіляції.
    // Об'єкти, які створюються фабричним методом (або класом), зазвичай успадковують один і той же батьківський об'єкт;
    // вони є підкласами, що реалізують спеціалізовані функціональні можливості. Іноді спільним предком є той же клас, 
    // який містить фабричний метод.

    // Застосування: Створення об'єктів, що мають однаковий інтерфейс. Наприклад, фабрика, яка створює об'єкти типу Car,
    // що мають однакові властивості color, model, carBody etc.


    // Factory - приклад реалізації з:
    // • Спільним пращуром - конструктором CarMaker.
    // • Статичним методом уCarMaker, що зветься factory(), який створює об'єкти.
    // • Спеціалізовані конструктори CarMaker.Compact, CarMaker.SUV, і CarMaker. 
    // Кабріолет, який успадковує від CarMaker. 
    // Всі вони будуть визначені як статичні властивості батьків, 
    // тому ми будемо мати чистий глобальний простір імен, і будемо знати, де їх знайти, 
    // коли вони нам потрібні.

    // Ця частина ймовірно, найбільш впізнавана у фабриці. 
    // У вас є метод, який приймає тип, заданий як рядок під час виконання, 
    // а потім створює і повертає об'єкти запитуваного типу. 
    // Немає конструкторів, які використовуються з новими літерами чи об'єктами, 
    // є просто функція, яка створює об'єкти на основі типу, ідентифікованого рядком.
    // var corolla = CarMaker.factory('Compact');

    // Ось приклад реалізації шаблону фабрики, який зробить так, щоб код вище працював:

    // батьківський конструктор
    function CarMaker() {}
    // батьківський метод
    CarMaker.prototype.drive = function () {
        return "Vroom, I have " + this.doors + " doors";
    };
    // статичний метод фабрики - factory
    CarMaker.factory = function (type) {
        var constr = type,
            newcar;
        // помилка, якщо конструктора не існує
        if (typeof CarMaker[constr] !== "function") {
            throw {
                name: "Error",
                message: constr + " doesn't exist"
            };
        }
        // На даний момент конструктор, як відомо, існує
        // зробимо, щоб він успадкував батька, але тільки один раз
        if (typeof CarMaker[constr].prototype.drive !== "function") {
            CarMaker[constr].prototype = new CarMaker();
        }
        // створити новий екземпляр
        newcar = new CarMaker[constr]();
        // необов'язково: викликати деякі методи, а потім повернути результат
        return newcar;
    };
    // визначити конкретних виробників автомобілів
    CarMaker.Compact = function () {
        this.doors = 4;
    };
    CarMaker.Convertible = function () {
        this.doors = 2;
    };
    CarMaker.SUV = function () {
        this.doors = 17;
    };

    // Немає нічого особливо важкого для реалізації заводської схеми.
    // Все, що вам потрібно зробити, це функція конструктора, яка створює об'єкт потрібного типу.
    // У цьому випадку звичайна конвенція з іменування була використана для співставлення 
    // типів об'єктів тим конструкторам, які їх створюють.
    // Частина з успадкуванням — це приклад спільного повторюваного фрагмента коду,
    // який можна було б застосувати до заводського методу замість повторення для кожного типу конструктора.

    // Допоміжний код:

    /**
     * Розширюємо стандартну консоль власними методами - для зручності
     *  - Зверни увагу на використання стрілочних функцій
     *  - Зверни увагу, що тепер ця функція викликає себе сама:
     */
    (function augmentConsole() {
        const consoleUpdate = {
            h1: arg => console.log(`\n\n=== ${arg} ===`),
            h2: arg => console.log(`\n\n== ${arg} ==`),
            h3: arg => console.log(`\n\n= ${arg} =`),
            s: () => console.log('--------------------------------------')
        };
        Object.assign(console, consoleUpdate);
    })();

    // 
    // Домашня робота
    //

    JSQA_APP.namespace('JSQA_APP.modules.student');
    JSQA_APP.namespace('JSQA_APP.modules.student.modul');

    console.log(JSQA_APP);

    JSQA_APP.modules.student = (function () {
        const ID = 'Privat ID';
        return {
            studentName: 'Oles',
            getId: function () {
                return ID;
            }
        };
    })();

    JSQA_APP.modules.student.modul = (function () {
        let analyzeHomeworkTask, homework_id_var;
        homework_id_var = 'Lesson 9';
        analyzeHomeworkTask = function (homework_id) {
            console.log('Privat function result: ' + homework_id_var + homework_id);
        };
        return {
            publicID: 'publick ID',
            doHomework: function (homework_id) {
                analyzeHomeworkTask(homework_id);
            }
        };
    })();

    console.log(JSQA_APP.modules.student.modul.doHomework('Task 4'));

    console.log(JSON.stringify(JSQA_APP, null, '  '));

    // Так це буде використовуватися в готовій реалізації:

    var corolla = CarMaker.factory('Compact');
    var solstice = CarMaker.factory('Convertible');
    var cherokee = CarMaker.factory('SUV');
    console.log(corolla.drive()); // "Vroom, I have 4 doors"
    console.log(solstice.drive()); // "Vroom, I have 2 doors"
    console.log(cherokee.drive()); // "Vroom, I have 17 doors"

    console.log(corolla.drive()); // "Vroom, I have 4 doors"

})();