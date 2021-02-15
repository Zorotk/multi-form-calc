import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {requiredForm2, setStep2} from "../redux/reducer";

const Step2 = () => {
    const dispatch = useDispatch()
    const {step2} = useSelector(({film}) => film);
    const {register, handleSubmit, errors} = useForm({defaultValues: {step2}});
    const onSubmit = data => dispatch(setStep2(Number(data.name)));
    console.log(step2)
    useEffect(() => {
        if (step2 !== '') {
            dispatch(requiredForm2(true))

        }
    }, [step2])
    return (
        <div>
            <h2 className={'header'}>Количество этажей(число):</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input name="name" type="number"
                       onChange={handleSubmit(onSubmit)}
                       ref={register({
                           required: true,
                           minLength: 1
                       })}/>
                <p>{errors.name && 'Введите значение'}</p>
            </form>
        </div>
    );
};

export default Step2;