import {useDispatch, useSelector} from "react-redux";
import Step1 from "../../pages/step_1";
import Step2 from "../../pages/step_2";
import Step3 from "../../pages/step_3";
import Step4 from "../../pages/step_4";
import Results from "../../pages/results";
import {setCurrentStep, setDefault} from "../../redux/reducer";
import {useHistory, useParams} from "react-router-dom";
import Button from "../button/button";
import React from "react";
import useDefaultStep from "../hook/useDefaultStep";

const Test = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {step = 1} = useParams()
    const steps = [Step1, Step2, Step3, Step4, Results]
    const {currentStep, requiredForm2, requiredForm4} = useSelector(({film}) => film);
    const defaultStep = useDefaultStep()
    const Component = steps[step - 1]
    const nextStep = () => {
        dispatch(setCurrentStep(currentStep + 1))
        history.push(`/step/${Number(step) + 1}`)
    }


    return (
        <div>
            <div className={'test'}>
                <h2>Калькулятор цены конструкции</h2>
                <div>Шаг {currentStep}</div>
                <Component/>
                <div className={'test-panel-button'}>
                    {step == 5 && <Button
                        onClick={defaultStep}>{'Заново'}</Button>}
                    {step == 3 || step == 1 ? <span>
                               <Button onClick={defaultStep}>Отмена</Button>&nbsp;
                        <Button disabled={steps.length == step}
                                onClick={nextStep}>{'Далее'}</Button>
                            </span> : null}
                </div>
            </div>
        </div>
    )
}
export default Test