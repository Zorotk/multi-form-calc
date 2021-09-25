import React, {useState, useEffect, useMemo} from 'react';
import './ProgressBar.scss'


export const ProgressBar = ({step}) => {
    const [countStep, setcountStep] = useState(5)
    const [activeStep, setactiveStep] = useState(1)
    useEffect(() => {
        setactiveStep(Number(step))
    }, [step])

    const steps = useMemo(() => Array(Number(countStep)).fill(0).map((_, i) => i + 1)
        , [countStep])


    return (
        <>
            <b>Количество шагов</b>
            <input value={countStep} onChange={(e) => setcountStep(e.target.value)} type="number"/>
            <div className={"steps"}>
                <div className={'progress'}
                     style={{width: `${(activeStep * (100 / (steps.length - 1))) - 100 / (steps.length - 1)}%`}}/>
                {steps.map(el => (<div key={el}
                                       onClick={() => setactiveStep(el > activeStep + 1 ? activeStep : el)}
                                       className={activeStep >= el ? "step active" : "step"}>{el}</div>))}
            </div>
        </>
    );
};

