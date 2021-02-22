import React from 'react';

import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {setCurrentStep, setStep4} from "../redux/reducer";
import Animation from "../Components/Animation";
import PanelButton from "../Components/panelButton";

const Step4 = () => {
    const {currentStep, step4} = useSelector(({film}) => film);
    const {register, handleSubmit, errors} = useForm({defaultValues: {step4}});
    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch(setStep4({width: data.width, height: data.height}));
        dispatch(setCurrentStep(Number(currentStep + 1)))
        history.push('/step/5')
    }
    const history = useHistory()


    return (
        <Animation>
            <h2 className={'header'}>Длина стен(в метрах):</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={'calc-form'}>
                <div className={'test-body'}>
                    <input type="number"
                           name={'width'}
                           placeholder={'width'}
                           ref={register({
                               required: true,
                               minLength: 1
                           })}/>
                    <p>{errors.width && 'Введите значение'}</p>
                    X<input type="number"
                            name={'height'}
                            placeholder={'height'}
                            ref={register({
                                required: true,
                                minLength: 1
                            })}/>
                    <p>{errors.height && 'Введите значение'}</p>
                </div>
                <PanelButton/>
            </form>
        </Animation>
    );
};

export default Step4;