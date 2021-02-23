import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {setCurrentStep, setStep2} from "../redux/reducer";
import Animation from "../Components/Animation";
import {useHistory} from "react-router-dom";

import PanelButton from "../Components/panelButton";


const Step2 = () => {
    const dispatch = useDispatch()
    const {step2} = useSelector(({film}) => film);
    const {register, handleSubmit, errors} = useForm({defaultValues: {step2}});
    const history = useHistory()
    const onSubmit = data => {
        dispatch(setStep2(Number(data.name)))
        dispatch(setCurrentStep(3))
        history.push('/step/3')
    }

    return (
        <Animation>
            <h2 className={'header'}>Количество этажей:</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={'test-body'}>
                    <input name="name" type="number"
                           ref={register({
                               required: true
                           })}/>
                    <p>{errors.name && 'Введите значение'}</p>
                </div>
                <PanelButton/>
            </form>
        </Animation>
    );
};

export default Step2;