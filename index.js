// MYEACH FUNCTION

function myEach(collection, callback) {
    // check if passed collection is array or object
    let array = [];
    if (Array.isArray(collection) === false) {
        array = Object.values(collection);
    } else {
        array = collection;
    }
    // loop through each element of array
    for (const element of array) {
        callback(element);
    }
    return collection;
}

// testing callback
const print = function (x) {
    console.log(`I am the element ${x}`)
}

// console.log(myEach({one: 1, two: 2, three: 3}, print))
// console.log(myEach([1, 2, 3], print))



// MYMAP FUNCTION

function myMap(collection, callback) {
    let array = [];
    if (Array.isArray(collection) === false) {
        array = Object.values(collection);
    } else {
        array = collection;
    }
    let newArray = []
    for (const element of array) {
        newArray.push(callback(element))
    }
    return newArray
}

// testing callback
const cb = function (el) {
    return el * 3;
}

// console.log(myMap({one: 1, two: 2, three: 3}, cb))
// console.log(mymap([1, 2, 3], cb))



// MYREDUCE FUNCTION

function myReduce(collection, callback, accumulator) {
    let array = [];
    if (Array.isArray(collection) === false) {
        array = Object.values(collection);
    } else {
        array = collection;
    }
    if (!accumulator) {
        accumulator = array[0]
        array = array.slice(1)

    }
    for (const element of array) {

        accumulator = callback(accumulator, element, array)
    }
  return accumulator;
}




const reducer = function (acc, el, collec) {
    return acc += el
}


// console.log(myReduce({one: 1, two: 2, three: 3}, reducer))
// console.log(myReduce([1, 2, 3], reducer, 3))



// MYFILTER FUNCTION

function myFilter(collection, predicate) {
    let array = [];
    if (Array.isArray(collection) === false) {
        array = Object.values(collection);
    } else {
        array = collection;
    }
    let newArray = []
    for (const element of array) {
    if (predicate(element) === true) {
        newArray.push(element);
    } else {
        newArray = newArray;
        }
    }
    return newArray
}

// testing callback
const callback = function(n) {
    return typeof(n) === "number";
}


// console.log(myFilter({one: "oi", two: 2, three: 3}, callback))


// MYFIND FUNCTION

function myFind(collection, predicate) {
    let array = [];
    if (Array.isArray(collection) === false) {
        array = Object.values(collection);
    } else {
        array = collection;
    }
    let newArray = []
    for (const element of collection) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
}


const cbFind = function(n) {
    return n + 3 === 5;
}

// console.log(myFind([1, 9, 3, 4], cbFind))






// ARRAYS FUNCTIONS

// MYSIZE FUNCTION

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        const keysArray = Object.keys(collection)
        return keysArray.length;
        
    }
}


// MYFIRST FUNCTION

function myFirst (array, n) {
    if (!n) {
        return array[0];
    } else {  
        return array.slice(0, n)
    }
}



// MYLAST FUNCTION


function myLast (array, n) {
    if (!n) {
        return array.slice(-1)[0]
    } else {
        return array.slice(array.length - n, array.length)
    }
}



// OBJECT FUNCTIONS


function myKeys (object) {
    return Object.keys(object);
}


function myValues (object) {
    return Object.values(object);
}