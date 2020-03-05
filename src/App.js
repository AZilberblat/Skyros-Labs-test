import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      newItem: "",
      list: [],
      numOfTasks:0,
      numOfTaksDone:0,
    }
  }

  onChange = (e) => {
    this.setState({newItem:e.target.value});
  }

  onClick = () => {
    const newItem = {
      id: 1+Math.random(),
      value: this.state.newItem
    };

    if(newItem.value !== ""){
      
    const list =[...this.state.list];
    list.push(newItem);

    this.setState({list:list, newItem:"", numOfTasks:this.state.numOfTasks+1, numOfTaksDone:this.state.numOfTaksDone+1});

    }

    else {
      console.log("Cannot enter empty string");
      
    }

  }

  deleteItem = (id) => {
    console.log(id);
    
   if(document.getElementById(id).className === "un-done"){
    document.getElementById(id).className="is-done";
    this.setState({
      numOfTaksDone:this.state.numOfTaksDone-1
     });
     
   }
   else {
     document.getElementById(id).className="un-done";
     this.setState({
      numOfTaksDone:this.state.numOfTaksDone+1
     })
     
   }
 
   
  }
  

  render() {
    return (
      <div className="App">
      <h1 className="app-title">MY LIST</h1>
        <div className="container">
          <div className="wrap">
            Add item to the list
            <br/>
            <input 
            type="text"
            placeholder="Enter your todo"
            value={this.state.newItem}
            onChange={this.onChange}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.onClick()
              }}}
            />
            <button onClick={this.onClick}>
            <i class="material-icons"> + </i>
            </button>
            <br/>
            <h3>{this.state.numOfTaksDone} reamaaining out of {this.state.numOfTasks}</h3>
            <ul>
              {this.state.list.map( item => {
                return(
                  <li className="un-done" id={item.id} key={item.id} onClick={()=>this.deleteItem(item.id)}>
                  <style>{`

                    .is-done {

                        text-decoration: line-through;

                      }

                    `}</style>
                    {item.value}
                  </li>
                )
              })}
            </ul>

          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
