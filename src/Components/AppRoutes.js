import React from 'react';

import {BrowserRouter, Redirect, Route, Switch, useParams} from "react-router-dom";
import Step1 from "../pages/step_1";
import Step2 from "../pages/step_2";
import Step3 from "../pages/step_3";
import Step4 from "../pages/step_4";
import Button from "./button/button";
import {setCurrentStep, setDefault} from "../redux/reducer";
import {useHistory} from "react-router-dom";
import Results from "../pages/results";
import {useDispatch, useSelector} from "react-redux";


const Test = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {step = 1} = useParams()
    const steps = [Step1, Step2, Step3, Step4, Results]
    const {currentStep, requiredForm2, requiredForm4} = useSelector(({film}) => film);

    const Component = steps[step - 1]
    const nextStep = () => {
        dispatch(setCurrentStep(currentStep + 1))
        history.push(`/step/${Number(step) + 1}`)
    }

    const defaultStep = () => {
        history.push(`/step/${Number(1)}`)
        dispatch(setCurrentStep(1))
        dispatch(setDefault())

    }
    return (
        <div>
            <div className={'test'}>
                <h2>Калькулятор цены конструкции</h2>
                <div>Шаг {currentStep}</div>
                <div className={'test-body-container'}>
                    <div className={'test-body'}>
                        <Component/>
                    </div>
                </div>
                <div className={'test-panel-button'}>
                    {step != 5 ? <span>
                                 <Button onClick={defaultStep}>Отмена</Button>&nbsp;
                        <Button disabled={steps.length == step
                        || !requiredForm2 && step == 2
                        || !requiredForm4 && step == 4}
                                onClick={nextStep}>{step == 4 ? 'Рассчитать' : 'Далее'}</Button>
                            </span> : <Button onClick={defaultStep}>Новый расчет</Button>}
                </div>
            </div>
        </div>
    )
}
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/step/:step' component={Test}/>
                <Redirect to={'/step/1'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;