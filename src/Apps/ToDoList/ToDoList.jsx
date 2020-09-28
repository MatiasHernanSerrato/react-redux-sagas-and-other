import React from 'react';

import './ToDoList.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      tasks: ['como sea', 'whatever', 'angeles', 'mira', 'como sea', 'whatever', 'angeles', 'mira',],
    };
  }
  // MOUNTING

  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount has been called');
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('UNSAFE_componentWillReceiveProps has been called');
  }

  static getDerivedStateFromProps(props, state) {
    // replace UNSAFE_componentWillReceiveProps
    console.log('getDerivedStateFromProps has been called', props, state)
  }

  componentDidMount() {
    console.log('component Mounted')
  }

  // UPDATING

  // shouldComponentUpdate(){}

  componentDidUpdate() {
    console.log('Component updated');
  }

  // UNMOUNTING

  componentWillUnmount() {
    console.log('Component will unmount has been called')
  }


  render() {
    return (
      <div className={'containerTodoList'}>
        <h2>this was created as a basic example</h2>
        <p>this todolist has data persistence by using cache</p>
        <p>also this Component has been created as a Class Component which extends from React</p>
        <div className='todoListViewer'>
          <div className='taskAdder'>
            <p>What do you have to do? </p><input type="text" />
          </div>
          <div className='taskViewer'>
            {this.state.tasks.map((task, key) => <div key={key.toString()} className='taskContainer'>{task}</div>)}
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoList;