import React from 'react';

import {useHistory} from "react-router-dom";

const Step4 = () => {
    const history = useHistory()
    const nextStep = () => {
        history.push(`/step3`)
    }
    return (
        <>
            <h2 className={'header'}>Длина стен(в метрах):</h2>
            <form className={'calc-form'}>
                <input type="number"/>X<input type="number"/>
            </form>
        </>
    );
};

export default Step4;