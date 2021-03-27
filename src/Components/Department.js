import React from 'react'
import './Department.css';

function Department() {
    return (
        <div className="departments">
            <div className="overlap">
                <div className="rectangle"></div>
                <h1 className="departments__title">Digital Marketing</h1>
            </div>

            <div className="overlap">
                <div className="rectangle"></div>
                <h1 className="departments__title">Visual Content Production</h1>
            </div>

            <div className="overlap">
                <div className="rectangle"></div>
                <h1 className="departments__title">Web Design & Development</h1>
            </div>

            <div className="overlap">
                <div className="rectangle"></div>
                <h1 className="departments__title">Brand Identity</h1>
            </div>

            <div className="overlap">
                <div className="rectangle"></div>
                <h1 className="departments__title">Product Design</h1>
            </div>

            <div className="overlap">
                <div className="rectangle"></div>
                <h1 className="departments__title">Modeling & Animation</h1>
            </div>
        </div>         
    )}

export default Department
