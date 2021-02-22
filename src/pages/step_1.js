import React from 'react';
import '../Components/test/test.scss'

import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setCurrentStep, setStep1} from "../redux/reducer";
import Animation from "../Components/Animation";
import PanelButton from "../Components/panelButton";


const Step1 = () => {
    const dispatch = useDispatch();
    const nextStep = (value) => {
        dispatch(setStep1(value))
        dispatch(setCurrentStep(2))
    }
    return (
        <Animation>
            <h2 className={'header'}>Что будем строить?</h2>
            <div className={'test-body'}>
                <Link onClick={() => nextStep(1)} to="/step/2">Жилой дом</Link>
                <Link onClick={() => nextStep(2)} to="/step/3">Гараж</Link>
            </div>
            <PanelButton/>
        </Animation>
    );
};

export default Step1;