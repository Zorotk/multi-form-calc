import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";


export default function StepLinks() {

    const {step1, step2, step3, step4} = useSelector(({film}) => film);


    const isStep1 = step1
    const isStep2 = step2
    const isStep3 = step3
    const isStep4 = !!step4.width && !!step4.height

    return (
        <div className="step-links">
            <NavLink to="/step/1" exact>
                {isStep1 ? '✅' : '❌'} Шаг 1 <span/>
            </NavLink>

            {isStep1 ? (
                <NavLink to="/step/2">
                    {isStep2 || step1 == 2 ? '✅' : '❌'} Шаг 2 <span/>
                </NavLink>
            ) : (
                <a>
                    Шаг 2 <span/>
                </a>
            )}
            {isStep2 || step1 == 2 ? (
                <NavLink to="/step/3">
                    {isStep3 ? '✅' : '❌'} Шаг 3 <span/>
                </NavLink>
            ) : (
                <a>
                    Шаг 3<span/>
                </a>
            )}
            {isStep3 ? (
                <NavLink to="/step/4">
                    {isStep4 ? '✅' : '❌'} Шаг 4 <span/>
                </NavLink>
            ) : (
                <a>
                    Шаг 4<span/>
                </a>
            )}


            {isStep1 && isStep2 && isStep3 && isStep4 ? (
                <NavLink to="/step/5" style={{float: 'right'}}>
                    Шаг 5 <span/>
                </NavLink>
            ) : (
                <a style={{float: 'right'}}>
                    Результат <span/>
                </a>
            )}
        </div>
    );
}
