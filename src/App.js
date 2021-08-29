import './App.css';
import React, { Component } from 'react';
import NavBar from "./components/navbar";
import Counters from './components/counters';
class App extends Component {
  state = {
    counters : [{id:1, value : 4},
                {id:2, value : 0},
                {id:3, value : 0},
                {id:4, value : 0}]
 };
 handleNavBar=()=>{
      const val=this.state.counters.filter(c=> c.value>0).length;
       return val;
 };
 
 handleDelete=(cId)=>{
     const arr = this.state.counters.filter(c=> c.id !== cId);
     this.setState({counters: arr});

     
 }

 handleReset = ()=> {
     const arr2 =this.state.counters.map(c=>{c.value=0;
      return c ;})
     this.setState({counters:arr2});
     };
    
     handleIncrement= (counter)=> {
        const arr3=[... this.state.counters];
        const index= arr3.indexOf(counter);
        arr3[index]={... counter}
        arr3[index].value++;
        // console.log(this.state.counters[0].value);
        this.setState({counters : arr3});
        console.log(arr3.length);
    }
    handleDecrement= (counter)=> {
        const arr4=[... this.state.counters];
        const index= arr4.indexOf(counter);
        arr4[index]={... counter}
       if(arr4[index].value>0) 
       {arr4[index].value--;}
        // console.log(this.state.counters[0].value);
        this.setState({counters : arr4});
        console.log(arr4.length);
    }
  render() { 
    return ( <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter(c=> c.value>0).length}
          dispNav={this.handleNavBar}/>
            <main className="container">
              <Counters counters={this.state.counters}
              onDelete={this.handleDelete} 
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onReset={this.handleReset} />
            </main>
            </React.Fragment>
            
            );
  }
}
 
export default App ;



