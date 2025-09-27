# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



1.What is JSX, and why is it used?
2.What is the difference between State and Props?
3.What is the useState hook, and how does it work?
4.How can you share state between components in React?
5.How is event handling done in React?


1.What is JSX, and why is it used?

JSX is a syntax extension for JavaScript used in React.It allows us to write HTML-like code inside JavaScript but not proper HTML.

1.	It makes the code easier to read and understand.
2.	React automatically changes JSX into JavaScript objects in the background.
3.	It allows me to write design (HTML) and logic (JavaScript) together in one place.





2.What is the difference between State and Props?

State is the data that belongs to a component itself. The component can change it whenever needed. For example, if a user is typing in a text box, the letters typed are stored in the state. State is managed inside the component using tools like useState.


Props are pieces of data that a parent component gives to a child component. The child cannot change them, it can only use them. For example, if a parent component sends a title text to a child, the child can show it but cannot edit it. Props are always controlled by the parent.




3.What is the useState hook, and how does it work?


The useState hook is a special function in React that lets me add and manage state inside a functional component. For example, 
"const [count, setCount] = useState(0)" 
means count is the current value (starting from 0), and setCount is a function to change it. Whenever I call "setCount(newValue)", React updates the value and re-renders the component to show the latest result.




4.How can you share state between components in React?


1.	Props (Top-down): Pass state as props from parent to child.
2.	Callback functions: Pass a function as prop to update parent state.
3.	Context API: Share state across multiple components without "prop drilling".
4.	State management libraries: Redux, Zustand, Recoil, etc.




5.How is event handling done in React?

In React, handling events is almost like normal JavaScript, but with small differences. Events are written in camelCase, like "onClick" or "onChange", and instead of a string, we pass a function. For example, 

function App() { 
      const sayHello = () => { 
           alert('Hello, Saiful!'); 
      }; 

      return <button onClick={sayHello}>Say Hello</button>; 
} 

will show a greeting when I click the button. React also uses Synthetic Events so events work the same in all browsers.
