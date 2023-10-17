export const memoization = `
**Memoization**

With *memo*, you can create a component that React will not re-render when its parent re-renders so long as its new props are the same as the old props. Optimizing with memo  is only valuable when your component re-renders often with the same exact props, and its re-rendering logic is expensive. If there is no perceptible lag when your component re-renders, memo is unnecessary. Keep in mind that memo is completely useless if the props passed to your component are always different, such as if you pass an object or a plain function defined during rendering. This is why you will often need useMemo and useCallback together with memo.

    const Chart = memo(function Chart({ dataPoints }) {// ...
    }, (oldProps, newProps) => {return oldProps == newProps} //optionals);


*useCallback* caches a function between re-renders until its dependencies change: useCallback(fn, dependencies)

- fn: React will give you the same function again if the dependencies have not changed since the last render

- dependecios: are the list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.

example

    // ...
    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
        });
    }, [productId, referrer]);
    // ...
    <ShippingForm onSubmit={handleSubmit} /
    // ...
    const ShippingForm = memo(function ShippingForm({ onSubmit }) {
        // ...
    });

Caching a function with useCallback  is only valuable in a few cases:

- You pass it as a prop to a component wrapped in memo. You want to skip re-rendering if the value hasn’t changed. Memoization lets your component re-render only if dependencies changed.
- The function you’re passing is later used as a dependency of some Hook. For example, another function wrapped in useCallback depends on it, or you depend on this function from useEffect.


*useMemo* 


The difference is in what they’re letting you cache:


        import { useMemo, useCallback } from 'react';
        function ProductPage({ productId, referrer }) {
            const product = useData('/product/' + productId);
            const requirements = useMemo(() => { // Calls your function and caches its result
                return computeRequirements(product);
            }, [product]);
            const handleSubmit = useCallback((orderDetails) => { // Caches your function itself
                post('/product/' + productId + '/buy', {
                    referrer,
                    orderDetails,
                });
            }, [productId, referrer]);
            return (
                <div className={theme}>
                    <ShippingForm requirements={requirements} onSubmit={handleSubmit} />
                </div>
            );
        }
    
- useMemo caches the result of calling your function. In this example, it caches the result of calling computeRequirements(product) so that it doesn’t change unless product has changed. This lets you pass the requirements object down without unnecessarily re-rendering ShippingForm. When necessary, React will call the function you’ve passed during rendering to calculate the result.
- useCallback caches the function itself. Unlike useMemo, it does not call the function you provide. Instead, it caches the function you provided so that handleSubmit itself doesn’t change unless productId or referrer has changed. This lets you pass the handleSubmit function down without unnecessarily re-rendering ShippingForm. Your code won’t run until the user submits the form.`