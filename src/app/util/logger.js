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

    Object.assign(exports, {
        c: console
    });
})();