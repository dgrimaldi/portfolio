export const referencing = `**Referencing**

When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a *ref*.



        import { useRef } from 'react';
        export default function Counter() {
            let ref = useRef(0);
        
            function handleClick() {
                ref.current = ref.current + 1;
                alert('You clicked ' + ref.current + ' times!');
            }
        
            console.log("render only first time")
        
            return (
                <button onClick={handleClick}>
                    Click me!
            {ref.current} //Error! You’d never see the count change
            </button>
        )}


*Differences between refs and state*
Perhaps you’re thinking refs seem less “strict” than state—you can mutate them instead of always having to use a state
setting function, for instance. But in most cases, you’ll want to use state. Refs are an “escape hatch” you won’t need
often. Here’s how state and refs compare:

| refs                                                                               | state |
|------------------------------------------------------------------------------------|:-----:|
| useRef(initialValue) returns { current: initialValue }                             |useState(initialValue) returns the current value of a state variable and a state setter function ( [value, setValue])|
| Doesn’t trigger re-render when you change it.                                      |Triggers re-render when you change it.|
| Mutable—you can modify and update current’s value outside of the rendering process.|“Immutable”—you must use the state setting function to modify state variables to queue a re-render.|
| You shouldn’t read (or write) the current value during rendering.                  |You can read state at any time. However, each render has its own snapshot of state which does not change.|


*When to use refs*

Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often
a browser API that won’t impact the appearance of the component. Here are a few of these rare situations:

- Storing timeout IDs
- Storing and manipulating DOM elements, which we cover on the next page
- Storing other objects that aren’t necessary to calculate the JSX.

*DOM*
React automatically updates the DOM to match your render output, so your components won’t often need to manipulate it.
    However, sometimes you might need access to the DOM elements managed by React—for example, to focus a node, scroll to
it, or measure its size and position. There is no built-in way to do those things in React, so you will need a ref to
the DOM node.

        import { forwardRef, useRef } from 'react';
        const MyInput = forwardRef((props, ref) => {
            return <input {...props} ref={ref} />;
        });
        
        export default function Form() {
            const inputRef = useRef(null);
        
            function handleClick() {
                inputRef.current.focus();
            }
        
            return (
                <>
                    <MyInput ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
            </>
        );}

In React, every update is split in two phases:

- During render, React calls your components to figure out what should be on the screen.
- During commit, React applies changes to the DOM.

In general, you don’t want to access refs during rendering. That goes for refs holding DOM nodes as well. During the
first render, the DOM nodes have not yet been created, so ref.current will be null. And during the rendering of updates,
the DOM nodes haven’t been updated yet. So it’s too early to read them.

React sets ref.current during the commit. Before updating the DOM, React sets the affected ref.current values to null.
After updating the DOM, React immediately sets them to the corresponding DOM nodes.

Refs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this
include managing focus, scroll position, or calling browser APIs that React does not expose.
If you stick to non-destructive actions like focusing and scrolling, you shouldn’t encounter any problems. However,
if you try to modify the DOM manually, you can risk conflicting with the changes React is making.
To illustrate this problem. Take two buttons, the first button toggles its
presence using conditional rendering and state, as you would usually do in React. The second button uses the remove()
DOM API to forcefully remove it from the DOM outside of React’s control. After you’ve manually removed the DOM element,
trying to use setState to show it again will lead to a crash. This is because you’ve changed the DOM, and React doesn’t
know how to continue managing it correctly. *Avoid changing DOM nodes managed by React*`