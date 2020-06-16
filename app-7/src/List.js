import React, {Component} from 'react';
import ToDo from './ToDo';


export default class List extends Component {
  render() {
      let list = this.props.tasks.map((element, index) => {
          return <ToDo key={index} task={element} /> ;
      });

      return <div>{list}</div>
  }
}
