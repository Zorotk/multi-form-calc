import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {requiredForm2, setStep2} from "../redux/reducer";
import Animation from "../Components/Animation";

const Step2 = () => {
    const dispatch = useDispatch()
    const {step2} = useSelector(({film}) => film);
    const {register, handleSubmit, errors} = useForm({defaultValues: {step2}});
    const onSubmit = data => dispatch(setStep2(Number(data.name)));

    useEffect(() => {
        if (step2 !== '') {
            dispatch(requiredForm2(true))

        }
    }, [step2])
    return (
        <div>
            <h2 className={'header'}>Количество этажей(число):</h2>
            <Animation>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <input name="name" type="number"
                           onChange={handleSubmit(onSubmit)}
                           ref={register({
                               required: true,
                               minLength: 1
                           })}/>
                    <p>{errors.name && 'Введите значение'}</p>
                </form>
            </Animation>
        </div>
    );
};

export default Step2;