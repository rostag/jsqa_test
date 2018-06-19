console.log('Enumerate properties');

function traceObject(obj, objName) {
    let result = '';
    for (let propertyName in obj) {
        console.log(objName + '.' + propertyName + ' = ' + obj[propertyName]);
    }
    return result;
}

function traceObjectByKeys(obj, objName) {
    let result = '';
    let keys = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(objName + '.' + keys[i] + ' = ' + obj[keys[i]]);
    }
    return result;
}

let nonEmpty = {
    name: 'Ford',
    year: 1969
};

let call1 = traceObjectByKeys({}, 'empty');
let call2 = traceObjectByKeys(nonEmpty, 'non-empty');

console.log(call1);
console.log(call2);

console.log(Object.keys(nonEmpty));

function Grass(height) {
    this.height = height;
}

let g1 = new Grass(15);

console.log(traceObjectByKeys(g1, 'Grass'));

console.log(g1.toString());

g1.toString = function () {
    return traceObject(g1, 'Grass');
}

console.log(g1.toString());

console.log('----');
console.log('----');
console.log(g1.valueOf());

console.log(new Date().valueOf());
console.log(new Date().toString());

console.log('----');

console.log(g1.hasOwnProperty('toString'));
console.log(g1.hasOwnProperty('valueOf'));

