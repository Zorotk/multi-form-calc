import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {setStep2} from "../redux/reducer";

const Step2 = () => {
    const dispatch = useDispatch()
    const {step2} = useSelector(({film}) => film);
    const {register, handleSubmit, errors} = useForm({defaultValues: {step2}});
    const onSubmit = data => dispatch(setStep2(data.name));

    return (
        <div>
            <h2 className={'header'}>Количество этажей(число):</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input name="name" type="text"
                       ref={register({
                           required: true
                       })}/>
                <p>{errors.name && 'Введите значение'}</p>
            </form>
        </div>
    );
};

export default Step2;