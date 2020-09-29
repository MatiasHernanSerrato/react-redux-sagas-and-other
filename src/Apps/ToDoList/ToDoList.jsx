import React from 'react';

import './ToDoList.css';
import CustomButton from '../../Components/shared/CustomButton';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks: [
        {
          checked: false,
          text: 'Eat whatever'
        },],
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
    const tasksCache = JSON.parse(localStorage.getItem("tasksCache"));
    this.setState({ tasks: tasksCache })
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

  handleInput = input => {
    this.setState({ input });
  };

  handleOnClick = () => {
    const newTask = { checked: false, text: this.state.input }
    this.state.tasks.push(newTask)
    this.setState({ input: "" });
    localStorage.setItem("tasksCache", JSON.stringify(this.state.tasks));
  }

  render() {
    return (
      <div className={'containerTodoList'}>
        <h2>this was created as a basic example</h2>
        <p>this todolist has data persistence by using cache</p>
        <p>also this Component has been created as a Class Component which extends from React</p>
        <div className='todoListViewer'>
          <div className='taskAdder'>
            <p>What do you have to do? </p>
            <input onChange={event => this.handleInput(event.target.value)}
              value={this.state.input} /> <CustomButton onClickFn={this.handleOnClick} text='Add to the list' />
          </div>
          <div className='taskViewer'>
            {this.state.tasks.map((task, key) => <div key={key.toString()} className='taskContainer'><input onChange={event => console.log(event.target.value)} type="checkbox" name={key.toString()} checked={task.checked} /><label for={key.toString()}>{task.text}</label></div>)}
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoList;