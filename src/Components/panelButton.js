import React from 'react';
import Button from "./button/button";
import useDefaultStep from "./hook/useDefaultStep";
import {useHistory, useParams} from "react-router-dom";
import {setCurrentStep} from "../redux/reducer";
import {useDispatch, useSelector} from "react-redux";

const PanelButton = () => {
    const history = useHistory()
    const {currentStep} = useSelector(({film}) => film);
    const {step = 1} = useParams()
    const defaultStep = useDefaultStep()
    const dispatch = useDispatch()
    const nextStep = () => {
        dispatch(setCurrentStep(currentStep + 1))
        history.push(`/step/${Number(step) + 1}`)
    }
    return (
        <div className={'test-panel-button'}>
            {
                step == 3 || step == 1 ? <>
                        <Button onClick={defaultStep}>Отмена</Button>&nbsp;
                        <Button
                            onClick={nextStep}>Далее</Button>
                    </> :
                    <>{step == 5
                        ? <Button onClick={defaultStep}>Заново</Button>
                        : <>
                            <Button onClick={defaultStep}>Отмена</Button>
                            <Button type="submit">{step == 4 ? 'Расчитать' : 'Далее'}</Button>
                        </>
                    }
                    </>}
        </div>
    );
};

export default PanelButton;