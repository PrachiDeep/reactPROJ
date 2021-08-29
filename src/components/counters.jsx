import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  

        // handleNavBar(){
        //     const arr4=[... this.state.counters];
        //     return arr4.length;
       // };
       
        //     render() { 
        //         return (  );
        //     }
        // }
         
       
      
    render ()
     { const {onDelete,onIncrement,counters,onDecrement,onReset}= this.props;
        return ( 
        <div>
             {/* <span className={"badge m-2 badge-primary"}>Navbar: {this.handleNavBar()}<br/></span> */}
             
             <button onClick={onReset} 
             className="btn m-2 btn-primary btn-sm ">Reset</button> 
              
           {counters.map(counter =>
             <Counter 
             key={counter.id} 
             onDelete={onDelete} 
             onIncrement={onIncrement}
             onDecrement={onDecrement}
             onReset={this.resetValues} 
             counter={counter}
             />)}
        </div> );
    }
}

 
export default Counters;