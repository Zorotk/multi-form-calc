import React, {useEffect} from 'react';

import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {setRequiredForm4, setStep4} from "../redux/reducer";
import Animation from "../Components/Animation";

const Step4 = () => {
    const {step4} = useSelector(({film}) => film);
    const {register, handleSubmit} = useForm({defaultValues: {step4}});
    const dispatch = useDispatch()
    const onSubmit = data => dispatch(setStep4({width: data.width, height: data.height}));

    const history = useHistory()
    useEffect(() => {
        if (step4.width !== '' && step4.height !== '') {
            dispatch(setRequiredForm4(true))
        }
    }, [step4])


    return (
        <>
            <h2 className={'header'}>Длина стен(в метрах):</h2>

            <Animation>
                <form onSubmit={handleSubmit(onSubmit)} className={'calc-form'}>
                    <input type="number"
                           name={'width'}
                           onChange={handleSubmit(onSubmit)}
                           ref={register({
                               required: true,
                               minLength: 1
                           })}
                    />X<input type="number"
                              name={'height'}
                              onChange={handleSubmit(onSubmit)}
                              ref={register({
                                  required: true,
                                  minLength: 1
                              })}/>
                </form>
            </Animation>

        </>
    );
};

export default Step4;