// pages/index.js
import React from 'react';
import Tree from '../components/Tree';

const Home = () => {
  const treeData = [{ id: 1, value: 1 }, { id: 2, value: 1 }]; // Replace with actual tree data

  return (
    <div>
      <h1>Tree App</h1>
      <Tree treeData={treeData} />
    </div>
  );
};

export default Home;
