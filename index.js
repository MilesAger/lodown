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