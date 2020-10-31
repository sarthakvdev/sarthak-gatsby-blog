---
title: Next-Gen JavaScript concepts to Master before learning React
date: "2020-10-31T22:39:11.284Z"
description: This blog will tell you about the Next-Gen JavaScript concepts, which will ease your journey from JavaScript to React.
---

![React](https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2020/06/javascript-concepts-before-learning-react.jpg?w=730&ssl=1)


We all have been through that stage. You've just completed an online course or self-taught from some resources. And now you want to increase your skills by learning popular JavaScript Library, React. I know, getting started with your first JavaScript Framework/Library could be scary and you are mostly confused that you're ready to take the jump or not. I want you to know that Don't give up right now, and doubting yourself is just natural, we all have had doubts that we aren't ready yet and it is something every developer goes through. 

In this blog, I will tell you about the core JavaScript concepts, which will smoothen your journey from JS to React. Please read this post till the end, and even if you know these concepts then just skim and revise them.

> There’s no miracle people. It just happens they got interested in this thing and they learned all this stuff. They're just people.
>
> **Richard Feynman**



Let's get going!

**What we will be covering:**
1. let and const variables
2. ES6: Arrow Functions
3. Exports & Imports
4. Classes
5. Spread and Rest Operators
6. Destructuring Assignment


### 1. **let and const** **variables**

`let` and `const` basically replace `var`. You use `let` instead of `var` and `const` instead of `var` if you plan on never re-assigning this "variable" (effectively turning it into a constant, therefore).

- **const**: This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do **not** become properties of the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object, unlike [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) variables.

- **let**: The **`let`** statement declares a block-scoped local variable, optionally initializing it to a value.

<img src="./carbon.svg"/>



Read more about `let`: [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

Read more about `const`: [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---



### 2. **ES6: Arrow Functions** 

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the `this` keyword (see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this)).

Arrow function syntax may look strange but it's simple.

<img src="arrow.svg"/>

**Important:**

When having **no arguments**, you have to use empty parentheses in the function declaration:

```javascript
const callMe = () => { 
    console.log('Max!');
}
```

When having **exactly one argument**, you may omit the parentheses:

```javascript
const callMe = name => { 
    console.log(name);
}
```

When **just returning a value**, you can use the following shortcut:

```jsx
const returnMe = name => name
```

That's equal to:

```jsx
const returnMe = name => { 
    return name;
}
```



Read more at: [Arrow Function MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---



### 3. **Exports & Imports**

In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files, so-called modules. You do this, to keep each file/module focused and manageable. It makes the entire code easy to read and manage.

To still access functionality in another file, you need `export` (to make it available) and `import` (to get access) statements.



You got two different types of exports: **default** (unnamed) and **named** exports:

**default** => `export default ...;` 

**named** => `export const someData = ...;` 

- You can import **default exports** like this:

  <img src="./import.svg"/>

  Surprisingly, `someNameOfYourChoice` is totally up to you.

- **Named exports** have to be imported by their name:

  <img src="./import-name.svg"/>

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in the same file.

- When importing **named exports**, you can also import all named exports at once with the following syntax:`import * as upToYou from './path/to/file.js';` 

`upToYou` is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you `export const someData = ...` (`/path/to/file.js` ) you can access it on `upToYou` like this: `upToYou.someData` .



For more reference and details:
- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

---



### 4. **Classes**

Classes are the heart of Object-Oriented languages. They are nothing but templates for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-alike semantics.

Classes are a feature which replaces constructor functions and prototypes. You can define blueprints for JavaScript objects with them.

Like this:

<img src="./class-1.svg"/>



In the above example, not only the class but also a property of that class (=> `name` ) is defined. The syntax you see there is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

<img src="./class-2.svg"/>



You can also define methods. Either like this:

<img src="./class-3.svg"/>

Or like this:

<img src="./class-4.svg"/>



The second approach has the same advantage as all arrow functions have: The `this` keyword doesn't change its reference.

You can also use **inheritance** when using classes:

<img src="./class-5.svg"/>



Read more at: [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---



### 5. **Spread & Rest Operator**

The spread and rest operators use the same syntax: `...` 

Yes, that is the operator - just three dots. Its usage determines whether you're using it as the spread or rest operator.

**Using the Spread Operator:**

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

```javascript
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
```

<img src="./spread.svg"/>

The spread operator is extremely useful for cloning arrays and objects. Since both are [reference types (and not primitives)](https://youtu.be/9ooYYRLdg_g), copying them safely (i.e. preventing the future mutation of the copied original) can be tricky. With the spread operator, you have an easy way of creating a (shallow!) clone of the object or array.



Read more at:

- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [REST parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) 

---



### 6. **Destructuring** **Assignment**

Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

```jsx
const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
```



And here for an object:

```javascript
const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
```



Destructuring is very useful when working with function arguments. Consider this example:

<img src="./destrut.svg"/>



Here, we only want to print the name in the function but we pass a complete person object to the function. Of course, this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

<img src="./destrut-2.svg"/>

We get the same result as above but we save some code. By destructuring, we simply pull out the `name` property and store it in a variable/ argument named `name` which we then can use in the function body.



Read more at: [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)





## Conclusion

Finally, If you have understood all the Next-JS, it's very good news. You can safely start learning React JS but, don't rush. I repeat, don't rush. If you are missing some JS concepts, go back, re-learn then and come back. Not knowing some concept will make your React journey miserable.

I have listed the very important concepts you need to get started with your React, but remember this is not everything.

Thanks for reading, I hope you liked this article.
