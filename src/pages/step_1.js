import React from 'react';
import '../test.scss'

import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setStep} from "../redux/reducer";

const Step1 = () => {
    const dispatch = useDispatch();

    return (
        <>
            <h2 className={'header'}>Что будем строить?</h2>
            <Link onClick={() => dispatch(setStep(2))} to="/step/2">Жилой дом</Link>
            <Link onClick={() => dispatch(setStep(2))} to="/step/3">Гараж</Link>
        </>
    );
};

export default Step1;