import React from 'react';
import '../test.scss'

import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setCurrentStep, setStep1} from "../redux/reducer";

const Step1 = () => {
    const dispatch = useDispatch();
    const nextStep = (value) => {
        dispatch(setStep1(value))
        dispatch(setCurrentStep(2))
    }
    return (
        <>
            <h2 className={'header'}>Что будем строить?</h2>
            <Link onClick={() => nextStep(1)} to="/step/2">Жилой дом</Link>
            <Link onClick={() => nextStep(2)} to="/step/3">Гараж</Link>
        </>
    );
};

export default Step1;