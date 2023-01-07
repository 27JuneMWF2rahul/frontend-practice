// import React from 'react';
import { Link, Route } from 'react-router-dom';
import { createBrowserRouter, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import WelcomeToClassCompo from './01WelcomeToClassCompo';
import JSXClassCompo from './02JSXClassCompo';
import ClassCompoMenu from './ClassCompoMenu';

import Clock from '../functionalComponet/Clock';
import PropsInClassCompo from '../ClassComponent/03PropsInClassCompo';
import StateInClassCompo from './04StateInClassCompo';
import StateLifeCycleInClassCompo from './05StateLifeCycleInClassCompo';
import ConditionalRenderingInClassCompo from './06ConditionalRenderingInClassCompo';
import ListKeysInClassCompo from './07ListKeysInClassCompo';
import ControlledCompoInClassCompo from './08ControlledCompoInClassCompo';



class classRoutes extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <li><Link to="classcompointro"> Class Compo intro</Link></li>
                            <li><Link to="jsxclasscompo">Jsx</Link></li>
                            <li><Link to="Functionalclock">Clock</Link></li>    
                            <li><Link to="propsinclass">props</Link></li>
                            <li><Link to="stateinclass">stateinclass</Link></li>
                            <li><Link to="statelifecycleinclass">state Lifecycleinclass</Link></li>
                            <li><Link to="conditionalrendering">conditionalrendering</Link></li>
                            <li><Link to="listandkeys">listandkeys</Link></li>
                            <li><Link to="controlledcompo">controlledcompo</Link></li>

                            <Routes>
                                <Route path="/" element={<ClassCompoMenu />} />
                                <Route path="/Functionalclock" element={<Clock/>}/>
                                <Route path="classcompointro" element={<WelcomeToClassCompo />} />
                                <Route path="jsxclasscompo" element={<JSXClassCompo />} />
                                <Route path="propsinclass" element={<PropsInClassCompo />} />
                                <Route path="stateinclass" element={<StateInClassCompo />} />
                                <Route path="statelifecycleinclass" element={<StateLifeCycleInClassCompo />} />
                                <Route path="conditionalrendering" element={<ConditionalRenderingInClassCompo />} />
                                <Route path="listandkeys" element={<ListKeysInClassCompo />} />
                                <Route path="controlledcompo" element={<ControlledCompoInClassCompo />} />

                            </Routes>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default classRoutes;
