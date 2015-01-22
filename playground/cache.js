//'use strict';

/**
 *
 *
 * @author lockc
 */

/**
 * A CacheData class that stores a data object and an id to reference it by
 * @param id - the data reference
 * @param data - the stored data object
 * @returns {CacheData}
 * @constructor
 */
function CacheData(id, data) {
    if(!(this instanceof arguments.callee)) {
        return new CacheData(id, data);
    }

    var internalId = id;
    var internalData = data;

    this.id = function() { return internalId; };
    this.data = function() { return internalData; };
}

/**
 * A Cache class that provides access to stored CacheData objects
 * @returns {Cache}
 * @constructor
 */
function Cache() {
    if(!(this instanceof arguments.callee)) {
        return new Cache();
    }

    /*
     * The array of cached data
     */
    var cache = [];

    this.clear = function() {
        cache = [];
    };

    this.add = function(id, data) {
        for(index in cache) {
            if(cache[index].id() === id) {
                cache.splice(index);
                break;
            }
        }
        cache.push(new CacheData(id, data));
    };

    this.remove = function(id) {
        for(index in cache) {
            if(cache[index].id() === id) {
                cache.splice(index);
                break;
            }
        }
    };

    this.get = function(id) {
        for(index in cache) {
            if(cache[index].id() === id) {
                return cache[index].data();
            }
        }
    }
}
