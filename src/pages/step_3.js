import React from 'react';

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../redux/reducer";

const Step3 = () => {
    const dispatch = useDispatch();
    const {currentStep} = useSelector(({film}) => film);

    const link = '/step/4';
    return (
        <>
            <h2 className={'header'}>Материал стен:</h2>
            <Link onClick={() => dispatch(setStep(currentStep + 1))} to={link}>Кирпич</Link>
            <Link onClick={() => dispatch(setStep(currentStep + 1))} to={link}>Шлакоблок</Link>
            <Link onClick={() => dispatch(setStep(currentStep + 1))} to={link}>Деревянный брус</Link>
        </>
    );
};

export default Step3;