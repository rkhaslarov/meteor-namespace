rkhaslarov:namespace
=================

This package provides a simple javascript app namespacing utility.
It means that we have one global object App and namespace method which helps to create new namespace.

# Usage
Calling the App.namespace function creates a global namespace and returns it.
```js
let module = App.namespace('modules.module1');
console.log(module === App.modules.module1); //true
```
Also App.namespace has second parameter which can be object or function. 
When passing a function 'this' context is bound to the created namespace. 
```js
//App.modules.module1.property 
App.namespace('modules.module1', function(){
	this.property = 'test';
}); 
```
If passing an object the key/value pairs will be added to the created namespace.
```js
//App.modules.module1.property 
App.namespace('modules.module1', {
	property: 'test'
}); 
```
### Inheritance

Also App.namespace has 3rd parameter which must be an object and it is a prototype of created namespace. 
```js
//App.modules.module1.name 
App.namespace('modules.module1', {
	property: 'test'
}, {
	name: 'prototype_name'
}); 
```

# Change Log

### 1.1.4
### 2017-02-01
- Cloning with prototype

### 1.1.3
### 2017-01-09
- Change App.define to App.namespace;
- Add prototype argument;
- Fix object creating and namespace initializing.

### 1.1.2
### 2017-01-05
- Underscore dependency removed;
- Bugs with object and function arguments fixed.