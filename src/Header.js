import React from 'react';

function Header({todoname}) {
  return (
    <div className="App-header">
        <h2>Todo List</h2>
        <p>오늘의 할 일은 {todoname.filter(item => item.status==="todo").length}개가 있습니다.</p>
    </div>
  );
}

export default Header;
