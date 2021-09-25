import React, {useState, useEffect, useCallback, useMemo} from 'react';
import './ProgressBar.scss'


export const ProgressBar = ({step}) => {

    const [activeStep, setactiveStep] = useState(1)
    useEffect(() => {
        setactiveStep(step)
    }, [step])

    const steps = Array(5).fill(0).map((_, i) => i + 1)

    return (
        <>
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

