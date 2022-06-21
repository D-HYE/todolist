import React from 'react';

export default function Item({thislist, toggleState}) {
    const toggleItem = (e) =>{
        const id = e.target.dataset.id
        toggleState(id)
    }
    const itemClass = thislist.status ==="done"?"done":"";
  return (
        <li
        key={thislist.id} data-id={thislist.id}
        onClick={toggleItem} className={itemClass}
        >{thislist.title}
        </li>

  );
}