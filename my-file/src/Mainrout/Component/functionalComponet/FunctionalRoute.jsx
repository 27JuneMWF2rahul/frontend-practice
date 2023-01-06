import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
// import ClassCompoMenu from './ClassCompoMenu';
import FunctionalCompoMenu from './FunctionalCompoMenu'
import Clock from './Clock';

class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="functionalclock" element={<Clock />} />
                       
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;