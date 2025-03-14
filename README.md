Started with the basics of React and the importance of React in the development of web applications with chai and code.


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

![image](<readme images/Screenshot 2025-02-19 at 10.29.48 AM.png>)


On clicking the button, the background color changes to a selected color.


![image](<readme images/Screenshot 2025-02-19 at 10.30.13 AM.png>)

![image](<readme images/Screenshot 2025-02-19 at 10.30.28 AM.png>)


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

## Password Generator Project using useCallback , useEffect and useRef Hooks

Created a basic project to generate a random password using useCallback, useEffect and useRef hooks.

The project create the password of the user choice length and features like including numbers and special characters.It can also copy the password to the clipboard.

![password without nums and special characters](<readme images/Screenshot 2025-02-19 at 4.58.42 PM.png>)


![password with nums ans special character and copird to clipboard](<readme images/Screenshot 2025-02-19 at 4.59.19 PM.png>)


## Lecture 5: Custom Hooks

Custom hooks are functions that contain hooks and can be reused in multiple components.

## Currency Converter Project using Custom Hooks

Understood the concept of custom hooks by creating a currency converter project using custom hooks(useCurrencyInfo).

This hook contains the logic to fetch the currency data from the API and return the data to the component.

Here, I also created a component (InputBox) that contains the input field and the select dropdown for the currency.
Components make the code more readable and reusable.

![currency convertor](<readme images/Screenshot 2025-02-26 at 2.47.35 PM.png>)

This can input the amount in the first input box and select the currency from the dropdown and the converted amount will be displayed in the second input box. The second input box is disabled and the value is displayed in it.

![drop down](<readme images/Screenshot 2025-02-26 at 2.47.54 PM.png>)

output after conversion

![alt text](<readme images/Screenshot 2025-02-26 at 2.48.08 PM.png>)

The swap option in the middle is used to swap the currencies. The value in the first input box is swapped with the value in the second input box.

![swap](<readme images/Screenshot 2025-02-26 at 2.48.19 PM.png>)

## Lecture 6 : Understanding React Routers

React Router is a tool (or library) used in React applications to handle navigation (i.e., moving between different pages or views in the app). In a regular website, when you click on a link, the whole page reloads. But in a Single Page Application (SPA), the page doesn't reload. Instead, the content changes dynamically while staying on the same page.

So, React Router helps us navigate between different sections (or pages) of a React app without refreshing the entire page.

Here the website is created with the help of react-router-dom.

![project on reactRouter](<readme images/Screenshot 2025-03-09 at 11.31.19 AM.png>)

the syntax to create the react router is :

```
const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children :[ 
                {path:""},{elment : <Home/>}, 
                {path:"about" ,element : <About/>}]
}])

```
![alt text](<readme images/Screenshot 2025-03-09 at 11.31.57 AM.png>)

Layout file is used to fixed the layout of the page which reduces the need to include header and footer in every page.

This help to structure the page with 
            
            <Header/>   
            <Outlet/>
            <Footer/>

Outlet tool provided by the react-router-dom helps to dynamically allocate components.

The github page in the project , fetch the API of gituser and provide username and avatar img

![alt text](<readme images/Screenshot 2025-03-09 at 11.32.59 AM.png>)


## Lecture 7 : Context APIs

# useContext

useContext is a React Hook that lets you read and subscribe to context from your component.

Usage:
1. Passing data deeply into the tree.
2. Updating data passed via context.
3. Specifying a fallback default value.
4. Overriding context for a part of the tree.
5. Optimizing re-renders when passing objects and functions.

To use the context APIs, we use createContext() provided by react.

```
const UserContext = createContext()

```
A Provider is needed to use this UserContext

```
function UserContextProvider({children}) {
    const [user ,setUser] = useState(null)
    return (
        <UserContext value={{user,setUser}}>
            {children}
        </UserContext>
    )
}

```
This UserContextProvider helps in the access the component without sending unnessaccery data to the other components and syncing the data.


# context api project : Theme Switcher

On the of button the theme of the card toggles

## LightMode:
![light mode](<readme images/Screenshot 2025-03-11 at 7.56.40 PM.png>)

## DarkMode:
![dark mode](<readme images/Screenshot 2025-03-11 at 7.56.52 PM.png>)


## Lecture 8 : Redux Toolkit

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic.

Redux Toolkit includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.

# Redux Toolkit Project : Todo 

A basic todo project is created using Redux Toolkit.Understanding the concepts like store, action ,reducers, useDispatch and useSelector.

![todo app](<readme images/Screenshot 2025-03-14 at 5.25.26 PM.png>)

also installed redux chrome extension to see the state of the app.

![chrome access to redux extension](<readme images/Screenshot 2025-03-14 at 5.37.28 PM.png>)