import React from 'react'
import '../styles/menu.css';

const List = ({id, task, setUpdateUI, updateMode}) => {
  return (
    <li>
        {task}
        <div className='icon_holder'> 

        </div>
    </li>

  )
}

export default List;