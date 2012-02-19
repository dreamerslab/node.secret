/*!
 * Secret
 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * An`in memory key value store module` for node.js.
 * With Secret you can store data in a clousure and use it later without creating globals.
 */



/**
 * @private
 * @namespace A namespace to store data.
 */
var trunk = {};



/**
 * @public
 */
module.exports = {

  version : '1.0.2',



/**
 * Store data in a closure to be called or withdraw later.
 * @this {Secret}
 * @param {String} key Data key.
 * @param {String|Number|Array|Object|Function} value Data value.
 * @returns {this} Return `this` to enable chaining.
 * @example
 *
 *     var secret = require( 'secret' );
 *     secret.set( 'age', 17 );
 *     secret.set( 'name', 'ben' );
 *     secret.set( 'do-some-thing', function( arg1, arg2, arg3 ){
 *       // do something here
 *     });
 */
  set : function( key, value ){
    // data can be overwritten
    trunk[ key ] = value;

    return this;
  },



/**
 * Get stored data.
 * @this {Secret}
 * @param {String} key Data key.
 * @returns {data|false} Return the stored data if available.
 * @example
 *
 *     var secret = require( 'secret' );
 *     secret.get( 'age' );
 */
  get : function( key ){
    // make sure the calling out name exist
    if( trunk[ key ] !== undefined ){
      return trunk[ key ];
    }
    return false;
  },



/**
 * Calling a stored function.
 * @this {Secret}
 * @param {String} arguments[ 0 ] Data key.
 * @param {String|Number|Array|Object|Function} [arguments[ 1 ]] Arguments to be passed to the stored function.
 * @returns {Result} Return the executed function result.
 * @example
 *
 *     var secret = require( 'secret' );
 *     // You can pass as many arguments as you wish
 *     secret.execute( 'do-some-thing', arg1, arg2, arg3 ... );
 */
  execute : function(){
    var key, tmp;

    key = [].shift.call( arguments );
    // make sure the calling function exist
    if( trunk[ key ] !== undefined ){

      // execute store function
      tmp = trunk[ key ];
      if( {}.toString.call( tmp ) === '[object Function]' ){
        return tmp.apply( this, arguments );
      }else{
        throw 'Secret error: on action "execute" - "' + key + '" is not a function';
      }
    }
  },



/**
 * Remove stored data.
 * @this {Secret}
 * @param {String} key Data key.
 * @returns {this} Return `this` to enable chaining.
 * @example
 *
 *     var secret = require( 'secret' );
 *     secret.remove( 'age' );
 */
  remove : function( key ){
    delete trunk[ key ];

    return this;
  }
};