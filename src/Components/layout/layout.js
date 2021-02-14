import React, {useCallback} from 'react';
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../../redux/reducer";
import {BrowserRouter} from "react-router-dom";
import {useParams, useLocation, useHistory} from "react-router-dom";

const Layout = (props) => {
    // const {step} = useSelector(({film}) => film)
    const dispatch = useDispatch()
    const history = useHistory()
    const {step = 1} = useParams()

    const nextStep = useCallback(() => {
        console.log(`/step/${Number(step) + 1}`)
        return history.push(`/step/${Number(step) + 1}`)
    }, [step, history])

    return (
        <>
            <div className={'main-container'}>
                {/*<div className={'test'}>*/}
                {/*    <div>Шаг {step}</div>*/}

                {/*    <div className={'test-body-container'}>*/}
                {/*        <div className={'test-body'}>*/}
                {props.children}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={'test-panel-button'}>*/}
                {/*             <span>*/}
                {/*                  <Button onClick={() => dispatch(setStep(1))}>Отмена</Button>&nbsp;*/}
                {/*                 <Button onClick={nextStep}>Далее</Button>*/}
                {/*            </span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default Layout;