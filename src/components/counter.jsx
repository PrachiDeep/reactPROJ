import React, { Component } from 'react';
class Counter extends Component {
  //state is an object count is a property
  // state= {value: this.props.counter.value 
  //          //tags: ["tag1","tag2","tag3"]
  //       };
        // binding event handlers by using constrctor and using bind method or converting functions into arrow functions  = () => 
  
 
  
  // resetValues = ()=> {
  //   this.setState({count: 0});
  // }

  // conditional rendering
  // renderTags(){
  //   if (this.state.tags.length === 0) return <p>there are no tags</p>;
  //   return<ul>{this.state.tags.map (tag=><li key= {tag}>{tag}</li>)}</ul>
  // }
 
    render() { 
      return ( 
                 <div>
                      {/* {class aname is an attribute} */}
                      <span className={this.getBadgeClasses()} >{this.formatCount()} </span>
                    {/* <button onClick={this.resetValues} className="btn m-2 btn-secondary ">Reset</button> */}
                      <button 
                      onClick={()=> this.props.onIncrement(this.props.counter)} 
                      className="btn m-2 btn-secondary btn-sm">
                        Increment
                        </button>
                        <button 
                       onClick={()=> this.props.onDecrement(this.props.counter)}
                       className="btn btn-secondary btn-sm">
                        Decrement
                         </button>
                        <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                        className="btn btn-danger m-2 btn-sm">
                          Delete
                          </button>
                  {/*   //rendering tags 
                        {this.renderTags()}
                       { this.state.tags.length === 0 && "Please enter some text"}*/}
                </div>
               );
    }

    // rendering classes dynamically acording to conditions
    //helper methods
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }
//helper methods
 formatCount(){
   const {value} =this.props.counter;
   return value === 0?"Zero":value;
 }
}
export default Counter ;