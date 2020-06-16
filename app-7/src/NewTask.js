import React, {Component} from 'react';

export default class NewTask extends Component {
    constructor () {
        super ();

        this.state ={ 
            input: ''
        }

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
}

handleInputChange(value) {
  this.setState({ input: value });
}

handleAddTask() {
    this.props.add(this.state.input);
    this.setState({ input: ''});
}

  render() {

    return (
        <div>
            <input
                value={this.state.input}
                placeholder="Add New Task"
                onChange={e=> this.handleInputChange(e.target.value)}
                />
            
            <button onClick={this.handleAddTask}>Add</button>

        </div>

    )
  }
}