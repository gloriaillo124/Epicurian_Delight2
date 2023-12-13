import React from 'react';
import { MenuList } from '../helpers/MenuList';
import { Key } from '@mui/icons-material';

function Menu(props) {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Nos Menus</h1>
            <div className='menuList'>{MenuList.map((menuItem ,Key) => {
                return <div>{menuItem.name}</div>;
            })}</div>
        </div>
    );
}

export default Menu;