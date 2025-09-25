import './Items.css'

function Items(props){
    return (
        // since response is an array at index you have an object you can access them like that
  
  <>
  <h1>First User</h1>
  name is : {props.response[0].name}
  <br />
  age is :{props.response[0].age}

  <h1>Second User</h1>
name is : {props.response[1].name}
<br />
age is :{props.response[1].age}
  </>
  
)
}
export default Items