import React, { Fragment } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import SumAndSubtraction from './Apps/SumAndSubstraction';
import './App.css';

const AppRouter = () => {
  return (
    <Fragment>
      <div className="App">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>Home</MenuItem>
            <SubMenu title="My mini apps">
              <MenuItem>Sub and Substraction</MenuItem>
              <MenuItem>App in progress</MenuItem>
            </SubMenu>
            <MenuItem>About me</MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </Fragment>
  )
}

export default AppRouter;