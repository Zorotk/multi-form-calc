import { useSelector} from "react-redux";
import Step1 from "../../pages/step_1";
import Step2 from "../../pages/step_2";
import Step3 from "../../pages/step_3";
import Step4 from "../../pages/step_4";
import Results from "../../pages/results";

import { useParams} from "react-router-dom";

import React from "react";
import StepLinks from "../StepLinks";
import {ProgressBar} from "../progressBar/ProgressBar";


const Test = () => {
    const {step } = useParams()
    const steps = [Step1, Step2, Step3, Step4, Results]
    const {currentStep} = useSelector(({film}) => film);
    const Component = steps[step - 1]


    return (
        <div>
            <div className={'test'}>
                <ProgressBar step={step}/>
                <StepLinks/>
                <h2>Калькулятор цены конструкции</h2>
                <div>Шаг {currentStep}</div>
                <Component/>
            </div>
        </div>
    )
}
export default Test
