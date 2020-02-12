import React, { useState } from 'react';
import './App.css';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import TableModal from './components/Modal/Modal';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Page>
        <Grid>
          <GridColumn medium={12}>         
            <Sidebar></Sidebar>
            <TableModal/>
          </GridColumn>
        </Grid>
      </Page>
    </div>
  );
}

export default App;
