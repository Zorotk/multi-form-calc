import React from 'react';

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentStep, setStep3} from "../redux/reducer";

const Step3 = () => {
    const dispatch = useDispatch();
    const {currentStep} = useSelector(({film}) => film);
    const nextStep = (value) => {
        dispatch(setStep3(value))
        dispatch(setCurrentStep(currentStep + 1))
    }


    const link = '/step/4';
    return (
        <>
            <h2 className={'header'}>Материал стен:</h2>
            <Link onClick={() => nextStep(1)} to={link}>Кирпич</Link>
            <Link onClick={() => nextStep(2)} to={link}>Шлакоблок</Link>
            <Link onClick={() => nextStep(3)} to={link}>Деревянный брус</Link>
        </>
    );
};

export default Step3;