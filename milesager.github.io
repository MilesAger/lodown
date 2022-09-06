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
 * identity
 * takes in any value
 * returns value unchanged.
 * 
 * 
 * 
 * @param {*} value
 * @returns 
 */
function identity(value){
    return value;  
}
module.exports.identity = identity;

/**
 * typeOf
 * takes in any value 
 * returns the type of value as a string
 * 
 * 
 * @param {*} value
 * @returns 
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
 * first
 * takes in an array and a number
 * returns the first number item if array
 * 
 * @param {*} array
 * @param {*} num
 * @returns 
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
 * last
 * takes in an array and a number
 * returns the last number item of array.
 * 
 * @param {*} array
 * @param {*} num
 * @returns 
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
 * indexOf
 * takes in an array and a value
 * returns the index of array that is the first occu4rance of value
 * 
 * @param {*} array
 * @param {*} value
 * @returns 
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
 * contains
 * takes in an array and a value
 * returns true if array contains value and false if not.
 * 
 * 
 * @param {*} array
 * @param {*} value
 * @returns 
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
 * each
 * takes in a collection and a function
 * if collection is array call function once for each element with the arguments:
 *         the element, it's index, <collection>
 * if collection is object call function once for each property with the arguments:
 *         the property's value, it's key, <collection>
 * 
 * @param {*} collection
 * @param {*} action
 * @returns 
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
 * unique
 * takes in an array
 * returns a new array of all elemes from array with duplicates removed.
 * 
 * @param {*} array
 * @returns 
 */

function unique(array){
    return [...new Set(array)];
}

module.exports.unique = unique;

/**
 * filter
 * takes in an array and a function
 * calls function for each element in array passing the arguments:
 *      the element, it's index, <array>
 * returns new array of elements for which caling function returned true.
 * 
 * 
 * @param {*} array 
 * @param {*} func 
 * @returns 
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
 * reject
 * takes in an array and a function
 * calls function for each element in array passing the arguments:
 *      the element, it's index, <array>
 * returs a new array of elements for which calling function returned false.
 * 
 * 
 * @param {*} array 
 * @param {*} func 
 * @returns 
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
 * partition
 * takes in an array and a function
 * calls function for each element in array passing it the arguments:
 *       element, key, <array>
 *  returns an array made up of two sub arrays.
 * 0) An array that contains all the values for which <function> returned something truthy
 *  1) An array that contains all the values for which <function> returned something falsy
 * 
 * @param {*} array 
 * @param {*} func 
 * @returns 
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
 * map
 * takes in a collection and a function.
 * calls function for each element in collection pasing the arguments
 * if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 * returns new array of return values for each function call.
 * 
 * @param {*} collection
 * @param {*} func 
 * @returns 
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
 * pluck
 * takes in an array and object
 * returns and array containg the value of of <property> for every element in <array>
 * 
 * @param {*} array
 * @param {*} prop
 * @returns 
 */

function pluck(array, prop){
    //looping through array.
return _.map(array, (element) =>{
    return element[prop]
});
    
}

module.exports.pluck = pluck;

/**
 * every
 * takes in a collection and a function 
 * all <function> for every element of <collection> with the paramaters:
 *      if <collection> is an array:
 *          current element, it's index, <collection>
 *      if <collection> is an object:
 *          current value, current key, <collection>
 * If the return value of calling <function> for every element is true, return true
 *   If even one of them returns false, return false
 *   If <function> is not provided, return true if every element is truthy, otherwise return false
 * 
 * @param {*} collection
 * @param {*} func
 * @returns 
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
 * some
 * takes a collection and a function
 * Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
 * If the return value of calling <function> is true for at least one element, return true
*   If it is false for all elements, return false
*   If <function> is not provided return true if at least one element is truthy, otherwise return false
 * 
 * @param {*} collection
 * @param {*} func
 * @returns 
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
 * reduce 
 * takes in an array a function and a seed 
 * 
 *  Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *   Use the return value of <function> as the "previous result"
 *      for the next iteration
 *   On the very first iteration, use <seed> as the "previous result"
 *   If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *   After the last iteration, return the return value of the final <function> call
 * 
 * @param {*} array 
 * @param {*} func 
 * @param {*} seed 
 * @returns 
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
 * 
 * @param {*} object 
 * @returns 
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