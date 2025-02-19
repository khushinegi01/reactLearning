# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Input From the First Lecture

### Why Use React?

- React was developed to solve the problem of synchronization that used to occur between the state (handled by JavaScript) and the UI (controlled by the DOM).
  
- React generally renders two dependencies:
    - **React Native** - for mobile applications
    - **React DOM** - for websites

- A React project can be created in two ways:
    1. `npx create-next-app@latest`
    2. Using a bundler like Vite or Parcel: `npm create vite@latest` (generally more used)

---

## Lecture 2: How Does React Render?

The following syntax is **not valid in React** for creating a custom element:

```javascript
const customElements = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        style: 'color: red',
        target: '_blank'
    },
    children: ['Click me']
}
```

ReactRender follow a specific pattern :

     type,

     key,

     props

therefore the above code will be written as : 

```    'a' ,
    {href : 'https://www.google.com', 
    style : 'color: red', target : '_blank'},
    'Click me'
```

The reason for the first custom element not working is that React does not understand the custom element and it is not following the pattern of React. It is jsx that is being used in React i.e. javascipt with html. 


-> In React, varialbles can be used in the jsx by using curly braces.

   e.g. const name = 'Khushi';
        <h1>{name}</h1>

Just like in javascript, `${variable}` is used to use a variable in a string. 

This is called evaluted expression.Final outcome of the expression is passed in it.


## Lecture 3: Understanding Hooks

Hooks are functions that let you use state and other React features without writing a class.
They handle the UI logic of the component.

We use useState hook to use state in a functional component.

It return an array with two elements:
1. The current state value
2. A function that lets you update it

syntax: 
```
const [state, setState] = useState(initialState);
```


### BgColor Changer Project with Hooks (useState)

Created a basic project to change the background color of the page using useState hook.

![image](<Screenshot 2025-02-19 at 10.29.48 AM.png>)


On clicking the button, the background color changes to a selected color.


![image](<Screenshot 2025-02-19 at 10.30.13 AM.png>)

![image](<Screenshot 2025-02-19 at 10.30.28 AM.png>)


## Lecture 4:useCallback, useEffect , useRef  Hooks


### useCallback Hook

useCallback hook is used to memoize a function so that it does not get re-rendered every time the component re-renders.

### useEffect Hook

useEffect hook is used to perform side effects in a functional component. It is similar to componentDidMount, componentDidUpdate and componentWillUnmount in class components. 

It takes two arguments:
1. A function that contains the side effect
2. An array of dependencies that the function depends on    

### useRef Hook

useRef hook is used to create a mutable object that persists for the lifetime of the component. It is used to access the DOM nodes directly.

## Password generator Project using useCallback , useEffect and useRef Hooks

Created a basic project to generate a random password using useCallback, useEffect and useRef hooks.

The project create the password of the user choice length and features like including numbers and special characters.It can also copy the password to the clipboard.

![password without nums and special characters](<Screenshot 2025-02-19 at 4.58.42 PM.png>)


![password with nums ans special character and copird to clipboard](<Screenshot 2025-02-19 at 4.59.19 PM.png>)