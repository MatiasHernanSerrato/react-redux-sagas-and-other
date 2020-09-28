import React, { Fragment } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SumAndSubtraction from './Apps/SumAndSubstraction';
import './App.css';
import Home from './Apps/Home';
import ToDoList from './Apps/ToDoList';

const AppRouter = () => {
  return (
    <Fragment>
      <div className="App">
        <Router>
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem>Home <Link to="/" /></MenuItem>
              <SubMenu title="My mini apps">
                <MenuItem>Sub and Substraction<Link to="/subandsubsapp" /></MenuItem>
                <MenuItem>ToDoList <Link to="/ToDoList" /></MenuItem>
              </SubMenu>
              <MenuItem>About me</MenuItem>
            </Menu>
          </ProSidebar>
          <Switch>
            <Route exact path="/subandsubsapp">
              <SumAndSubtraction />
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/ToDoList">
              <ToDoList></ToDoList>
            </Route>
          </Switch>
        </Router>

      </div>
    </Fragment>
  )
}

export default AppRouter;