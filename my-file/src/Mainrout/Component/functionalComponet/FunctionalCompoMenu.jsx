import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-6">

                        <ul>
                            <li><Link to="functionalclock">Clock</Link></li>
                        </ul>
                    </div>
                    
                </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;