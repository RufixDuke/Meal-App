import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MealBuilder from './containers/MealBuilder/MealBuilder';
import Details from './containers/Details/Detsails';
const App = props => {
  return (
    <div>
      <Layout>
        <MealBuilder />
      </Layout>
    </div>
  );
}



export default App;
