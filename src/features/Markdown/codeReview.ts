export const codeReview =`1. Check if there are any new npm packages added.

2. Check if there is no functionality duplicates like date-fns + moment.

3. Also check for imports, as sometimes tree shaking is not working as you wish, and you could bundle the whole library and use just a single method like the below:

        import _ from 'lodash';
        //should became more precise import like:
        import uniq from 'lodash/uniq';

4. If your app is using translations – check if all new areas have also translations. If not, point that out and the developer should be aware of that in the future.

        const NewComponent = () => {
            return (<div> New static text inside new component should be translated!</div>)
        }

5. Check for missing or invalid types if you are using TypeScript. All “ANY” types should also be fixed unless you have a really, really good explanation for not doing so. Below we have missing props types and any in the method.

          const NewComponent = ({items, data}) => {
          const getItemId = (data: any) => data.id
          return (
              <div>
                 {items.map(item => (
                     <span key={getItemId(item)}>
                         <h1>{item.title}</h1>
                         <p>{item.description}</p>
                     </span>
                 ))}
             </div>
          )}
6.     Check for variables, functions, and naming conventions. They should all declare what they are and what they do.
7. For boolean values, use prefixes is/are/should to declare their behaviour (visible => isVisible) to avoid treating them as HTML properties. 
8. Ensure functions declare their purpose, and if they return anything, name them accordingly. For example, if they manipulate data: updateUsers => addUniqId, parseData => parseToAPIFormat, etc. 
9. Check for weird logic patterns (things you have never seen before). Sometimes when a React developer takes too much time on a single task – they start to be really creative while writing code and create methods or flow that have no sense at all and can destroy the project structure. You should provide feedback and suggest more suitable solutions to provide a better code. 
10. Check for too complicated code chunks. If someone is adding an ID into an array using 20 lines of code instead of 1, take some actions. Or when you are using some 3rd party packages like lodash, but the developer keeps writing all the methods by himself. 
11. If you can’t understand what a specific chunk of code is doing, add descriptive comments to clarify its purpose. Alternatively, request an explanation from the developer to avoid future confusion. 
12. Check for hardcoded names, paths, and values. Separate that kind of code, so you can easily change it in one place. Use paths instead. They are (in most cases) used in routing configuration and in every link and redirection. Also, separate types, date formats and everything that can be used in multiple places – to easily change them. 
13. Check for backward compatibility issues like changes in props from optional to required. Or changes in some methods’ parameter types. If you made such a change with TypeScript – it should throw a compilation error. If you are using just JavaScript – you need to track that manually. 
14. Check for code repetition. If you’ve seen the same/similar logic in multiple places – point that out. Code should be reusable and if you will need to update that logic, you will have to update it in a single place. Not 3 of them. 
15. Check for missing form validations or incorrect form validations. I’ve never seen React apps that have a form without field validation. 
16. Check for missing error handlers from API responses to provide appropriate feedback to users. Pay attention to try/catch blocks and their handling in catch. 
17. Check for async methods – can they be done in parallel, or do we need all the data in a sequence? Check if we actually wait for this data if we need it, or if we read from the promise object. 
18. Sometimes you may notice potential bugs. A big part of knowledge comes with experience. If you are a good React developer and see something you’ve done in the past, but it caused errors – don’t make it happen again. Explain that you’ve been there, and you know the way out as you’ve made it work before.`