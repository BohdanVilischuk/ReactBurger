import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';

function App() {
  return (
    <div className="">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
