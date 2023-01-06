import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
             
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;