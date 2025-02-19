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