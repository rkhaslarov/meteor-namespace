rkhaslarov:namespace
=================

This package provides a simple javascript app namespacing utility.
It means that we have one global object App and define method which helps to create new namespace.

# Usage
Calling the App.define function creates a global namespace and returns it.
```js
let module = App.define('modules.module1');
console.log(module === App.modules.module1); //true
```
Also App.define has second parameter which can be object or function. 
When passing a function 'this' context is bound to the created namespace. 
```js
//App.modules.module1.property 
App.define('modules.module1', function(){
	this.property = 'test';
}); 
```
If passing an object the key/value pairs will be added to the created namespace.
```js
//App.modules.module1.property 
App.define('modules.module1', {
	property: 'test'
}); 
```

# Change Log


### 1.1.1 - 2017-01-05
### Changed
- Underscore dependency removed;
- Bugs with object and function arguments fixed.