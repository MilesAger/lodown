'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

/**
 * identity: function returns the input value unchanged.
 * @param {value}: function takes in any input value
 * @returns {value}: returns the input value unchanged.
 */
function identity(value){
    return value;  
}
module.exports.identity = identity;

/**
 * typeOf: function returns the data type of the input value
 * @param {value}: function takes in any input value. 
 * @returns {string}: returns the data type of the input value as a string
 */

function typeOf(value){
    var t = '';
if (Array.isArray(value)) {
    return 'array'; 
} 
else if (value === null) {
    return 'null';
}
else {
    t += typeof value;
    return t;
}
}
module.exports.typeOf = typeOf;

/**
 * first: function returns the first n number of elements from an array in an output array.
 * @param {Array}: function takes in input array.
 * @param {Number}: function takes in a number representing the number of elements to return from array.
 * @return {Array}: Returns first n number of elements from an input array, etc.
 */
function first(array, num){
    // If <array> is not an array, return []
    if (!(Array.isArray(array))) {
return [];
    } //If <number> is not given or not a number, return just the first element in <array>.
    else if (typeof num !== 'number' || num === null) {
        return array[0]; 
    } //Otherwise, return the first <number> items of <array>
    else { for (var i = 0; i < array.length; i++){
        if (i > num && num < array.length) {
            return [];
    
    } else {
        return array.slice(array[0], num);
    }
    }
}
}
module.exports.first = first;
/**
 * last: function returns the last n number of elements from an array in an output array.
 * @param {Array}: function takes in input array.
 * @param {Number}: function takes in a number representing the number of elements to return from array.
 * @return {Array}: Returns last n number of elements from an input array, etc.
 */

function last(array, num){
    // If <array> is not an array, return []
    if (!(Array.isArray(array))) {
return [];
    } //If <number> is not given or not a number, return just the first element in <array>.
    else if (typeof num !== 'number' || num === null) {
        return array[(array.length - 1)]; 
    } //Otherwise, return the last <number> items of <array>
    else { for (var i = array.length; i >= 0; i--){
        if (num > array.length) {
            return array;
    
    } else {
        return array.slice((array.length - num));
    }
    }
}
}
module.exports.last= last;

/**
 * indexOf: function takes in an input array and takes in a value and returns the index of the element in the array with the first occurance of the value. 
 * @param {Array} : function takes in input array.
 * @param {value} : function takes in a value
 * @returns {Number} : returns an output number representing the index of the array that is the first occurance of the value 
 */

function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return array[i].length;
        }
    }
    return -1;
}

module.exports.indexOf= indexOf;

/**
 * contains: function takes in an array and a value. returns true if array contains the value, and false if not.
 * @param {Array}: function takes in an input array.
 * @param {value}: function takes in a value.
 * @returns {Boolean}: returns either true if the array conains the value, or false if array does not contain value. 
 */

function contains(array, value){
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value){
            return true;
        }
    }
    return false;
    }
    
module.exports.contains = contains;


/**
 * each: function takes in a collection either object or array and a function. funtion is called once for each element in array or each propery in object. * 
 * @param {Array or Object}: takes in an input array or object
 * @param {Function}: takes in a callback function.  passing in arguemnt array[i], i, <array> if array, and object[key], key, object if object 
 * @returns {}: no value is returned for each, unless the callback function fed in as an argument returns a value.
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: function takes in an array and returns a new array of all elements from array with duplicates removed.
 * @param {Array}: function takes in an input array.
 * @returns {Array}: returns a new array of all elements from array with duplicates removed.
 */

function unique(array){
    return [...new Set(array)];
}

module.exports.unique = unique;

/**
 * filter: function takes in an input array and a callback function. calls function for each element in array. returns a new array that contains all the elements from the input array where the callback function returns a truethy value. 
 * @param {Array}: function takes in an input array.
 * @param {Function}: function takes in a callback function. passing in arguemnt array[i], i, <array>
 * @returns {Array}: returns an array containing all elements from the input value where the callback function produced a truethy output. 
 */

function filter(array, func){
    //looping through elements
    var collect = [];
for (var i = 0; i < array.length; i++){
    //putting in function
    if (func(array[i], i, array)){
collect.push(array[i]);
    }
}
return collect;
}
module.exports.filter = filter;

/**
 * reject: function that takes in an array and a function and calls function for each element in array. returns new array of elements for which caling function returned false.
 * @param {Array}: function takes in an input array.
 * @param {Function}: function takes in a callback function. passing in arguemnt array[i], i, <array>
 * @returns {Array}: returns a new array that contains all the elements from the input array for which the callback function resulted in a falsey output.
 */

function reject(array, func){
    //looping through elements
    var collect = [];
for (var i = 0; i < array.length; i++){
    //putting in function if false
    if (!func(array[i], i, array)){
collect.push(array[i]);
    }
}
return collect;
}

module.exports.reject = reject;

/**
 * partition: function that takes in an input array and a callback function. calls the function for each element in array.
 * @param {Array}: function takes in an input array.
 * @param {Function}: function takes in a callback function. passing in arguemnt array[i], i, <array>
 * @returns {Array}: returns two new arrays. One that contains all the elements from the input array for which the callback function resulted in a truethy output and an array for all the elements that the callbac function resulted in a falsey output.
 */

function partition(array, func){
    //loop through array
    var collect = [];
    var collect2 = [];
for (var i = 0; i < array.length; i++){
    //putting in function if false
    if (func(array[i], i, array)){
collect.push(array[i]);
    } else {
collect2.push(array[i]);
    } 
}
return [collect, collect2];
}

module.exports.partition = partition;

/**
 * map: function takes in an input collection, either object or array, and a callback function. calls function for each elemnt in collection and returns a new array of values produced from function being called on each element.  
 * @param {Array or Object}: takes in an input array or object
 * @param {Function}: takes in a callback function.  passing in arguemnt array[i], i, <array> if array, and object[key], key, object if object 
 * @returns {Array}: returns a new array of return values for each function call.
 */

function map(collection, func) {
    //call function for each element in collection parameter.
    let output = [];
if(Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++) { 
        output.push(func(collection[i], i, collection)); 
}
} else { 
    for (let key in collection) {
        output.push(func(collection[key], key, collection));
    }
}
return output;
    //if collection is array, elemet 
}

module.exports.map = map;

/**
 * pluck: function takes in an input array and a value representing an object property. returns an array containing the value for each object property within the elements of the input array.
 * @param {Array}: function takes in an input array
 * @param {value}: function takes in a value representing an object property.
 * @returns {Array}: returns an array containg the value of of the object property for every element in the input array 
 */

function pluck(array, prop){
    //looping through array.
return _.map(array, (element) =>{
    return element[prop]
});
    
}

module.exports.pluck = pluck;

/**
 * every: function takes in an input collection, either an array or an object, and takes in a callback function. calls function for every element of the collection. if the return value for every element is true, return true. otherwise, return false.
 * @param {Array or Object}: takes in an input array or object
 * @param {Function}: takes in a callback function.  passing in arguemnt array[i], i, <array> if array, and object[key], key, object if object 
 * @returns {Boolean}: returns a boolean value of true if every element in the input array returns true with the callback function, else the function will return the boolean value of false.
 */

function every(collection, func){
    if (!func){
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (!collection[i]){
                    return false
                }
            }
        } else {
            for(let key in collection){
                if (!collection[key]){
                    return false
                }
            }
        }
    } else {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (func(collection[i], i, collection) === false){
                    return false
                }
            }
        } else {
            for (let key in collection){
                if (func(collection[key], key, collection) === false){
                    return false
                }
            }
        }
    }
    return true
}

module.exports.every = every;

/**
 * some: function takes an input collection, either an array or an object, and takes a callback function. calls function for every element in the array. if the outcome of calling the callback function on every element returns at least one true value, we some returns true. else some returns false.  
 * @param {Array or Object}: takes in an input array or object
 * @param {Function}: takes in a callback function.  passing in arguemnt array[i], i, <array> if array, and object[key], key, object if object 
 * @returns {Boolean}: returns a boolean value of true if at least one element in the input array returns true with the callback function, else the function will return the boolean value of false.
 */

function some(collection, func){
    if (!func){
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (collection[i]){
                    return true
                }
            }
        } else {
            for(let key in collection){
                if (collection[key]){
                    return true
                }
            }
        }
    } else {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (func(collection[i], i, collection) === true){
                    return true
                }
            }
        } else {
            for (let key in collection){
                if (func(collection[key], key, collection) === true){
                    return true
                }
            }
        }
    }
    return false
}

module.exports.some = some;

/**
 * reduce: function takes in an input array, a callback function, and a seed (previous result). calls function for every element in array. the callback function will pass in the arguement's previous result (or the seed), element, index. After the last iteration, the value of the final function call is returned.
 * @param {Array}: function takes in an input array.
 * @param {Function}: function takes in a callback function. passing in arguemnt previous value, current value, index
 * @param {seed}: function takes in a seed as one of the arguments in the callback function 
 * @returns {value}: returns the value produced by the final function call. 
 */
function reduce(array, func, seed){
    //looping through collection
    if (seed === 0) {
        return 0;
    }
    if (seed === undefined) {
        seed = 1;
    } else {
    seed = array[0];
    } 
    for (var i = 0; i < array.length; i++) {
        // if (i === 0 || seed === undefined){
        //     seed = array[0];
        // }
        seed = func(seed, array[i], i);
        if (i === (array.length - 1)) {
            return seed
        }
    }
    }
    module.exports.reduce = reduce;

/**
 * extend: function takes in a target object and any number of additional objects. Copies all properties from all objects and adds them to the target object, and returns the updated object. 
 * @param {Object}: function takes in a target object and any number of additional objects. 
 * @returns {Object}: returns the updated target object with all properties from all additional objects concatenated to the target object. 
 */

    function extend(object){
        var o = object;
        for(var i = 1; i < arguments.length; i++) {
          var arg = arguments[i];
          for(var p in arg) {
            Object.assign(o, arg);
          }
        }
        return o;
    }

    module.exports.extend = extend;