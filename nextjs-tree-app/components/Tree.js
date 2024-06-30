// components/Tree.js
import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ treeData }) => {
  return (
    <div>
      {treeData.map(node => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Tree;
