# Secret

  An `in memory key value store module` for node.js



## Description

  [Global objects are evil in javascript](http://bit.ly/e6DUOi). They are easily to be overwritten, especially when you mix your code with others. Secret provides a way to store your data or functions that can be used later. It works cross modules and files without creating globals.



## Requires

  - node >= 0.4.x



## Installation

    npm install secret



## Usage

> Require module.

    var secret = require( 'secret' );

> Store data to be called or withdraw later..

    secret.set( 'age', 17 );
    secret.set( 'name', 'ben' );
    secret.set( 'do-some-thing', function( arg1, arg2, arg3 ){
      // do something here
    });

> Get stored data, it works cross modules and files.

    var age = secret.get( 'age' );

> Calling a stored function.

    // You can pass as many arguments as you wish
    secret.execute( 'do-some-thing', arg1, arg2, arg3 ... );

> Remove stored data.

    secret.remove( 'age' );



## License 

(The MIT License)

Copyright (c) 2011 dreamerslab &lt;ben@dreamerslab.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.