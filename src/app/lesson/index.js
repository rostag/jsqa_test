const lesson = (function () {
    // A private id
    let _id = 0;
    return {
        // A public variable 
        myPublicVar: "foo",
        // A public function utilizing privates 
        getId: function () {
            // Call our private method using bar
            return _id;
        }
    };
})();

// конструктор
function School() {}

// батьківський метод
School.prototype.execute = function () {
    return 'Execute Lesson, homework: ' + this.homework;
};

// статичний метод фабрики
School.factory = function (lessonType) {
    let newLesson;
    // помилка, якщо конструктора не існує
    if (typeof School[lessonType] !== "function") {
        throw {
            name: 'Error',
            message: lessonType + ' doesnt exist'
        };
    }
    // На даний момент конструктор, як відомо, існує
    if (typeof School[lessonType].prototype.drive !== 'function') {
        School[lessonType].prototype = new School();
    }
    // створити новий екземпляр
    newLesson = new School[lessonType]();
    // необов'язково: викликати деякі методи, а потім повернути результат
    return newLesson;
};
// визначити типи уроків
School.Theoretical = function () {
    this.homework = null;
};
School.Practice = function () {
    this.homework = [];
};

exports.getId = lesson.getId;

exports.createLesson = School.factory;