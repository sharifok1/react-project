import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fireEvent } from '@testing-library/dom';

function App() {
  const h2Style = {
    backgroundColor:'#f5f',
    border:'2px soloid red',
    borderRadius:'10px'
  }
  const blogProps = [
    {heading:'Programming Hero' ,author:'Jhankar Mahbub'},
  ];
  return (
    <div className="App">
     <article className="blog">
       <h1 style={h2Style}>Article 1</h1>
       <p style ={{
        backgroundColor:'#f9f',
        border:'1px soloid red',
        borderRadius:'10px',
        padding:'10px'
          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, debitis sint in, quos earum dolores obcaecati atque numquam eligendi ad iusto qui accusamus perferendis nihil! Soluta non esse praesentium iste possimus iure quo natus rem blanditiis optio. Amet debitis laboriosam doloribus voluptatem nemo quisquam et sunt, provident enim? Mollitia illum nulla voluptas aperiam fuga autem debitis, commodi aliquam voluptate aspernatur cum facilis blanditiis, maxime facere doloribus voluptatibus maiores id impedit at, fugit nesciunt. Accusantium voluptatum odio sit maiores aspernatur, error, iure ad in quibusdam quis esse similique. Esse aliquid quae officia optio expedita recusandae quam fugiat. Quae voluptatibus ipsum aliquid!</p>
     </article>
      {/* // problem-6,7,8 */}
     {
       blogProps.map(prop =><Blog heading={prop.heading} author={prop.author}></Blog>)
     }
  <Mobile></Mobile>
  <Todo></Todo>
    
    
    </div>
     
  );
}
 {/* // problem-6,7,8 */}
function Blog(props){
  return(
    <div>
     <h2>{props.heading}</h2>
     <h2> Name:{props.author}</h2>
    </div>
  )
}
function Mobile(){
  const[charge,setCharge]=useState(100)
  const batteryDown=() =>{
    if(charge>0){
      const downCharge = charge-10;
    setCharge(downCharge)
    }
  }
  const batteryUp=() =>{
    if(charge<100){
      const downCharge = charge+10;
    setCharge(downCharge)
    }
  }

  return (
    <div>
      <h1>{charge}%</h1>
      <button onClick={batteryDown}>Battery Down</button>
      <button onClick={batteryUp}>Battery Down</button>
    </div>
  )
}
function Todo(){
  const[users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  return(
    <div>
      {
        users.map(user=> <div><h1>User Id:{user.id}</h1> <h4>{user.title}</h4></div>)
      }
    </div>
  )

}


export default App;
