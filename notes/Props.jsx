/*
✅ So, to access props, you can use:

1. props.key (dot notation)

2. props["key"] (bracket notation)

3. destructuring (const { key } = props)

4. array destructuring (const [a, b] = props.response)

5. Object.entries() for dynamic keys

6. optional chaining (props?.key)

*/

/* one example to access values from array of object

 // since response is an array at index you have an object you can access them like that
  
  <>
  <h1>First User</h1>
  name is : {props.response[0].name}
  <br />
  age is :{props.response[0].age}
*/