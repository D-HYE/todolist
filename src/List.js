import React from 'react';
import Item from './Item';

export default function List({todoname, toggle}) {
  return (
    <ul>
        {todoname.map(list => <Item thislist={list} toggleState={toggle}/>)}
    </ul>
  );
}


