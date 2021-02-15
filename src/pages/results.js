import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/reducer";


const Results = () => {
    const {fetchResult, results, step1, step2 = 1, step3, step4} = useSelector(({film}) => film);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData(
            `?building=${step1}&height=${step2}&material=${step3}&sizex=${step4.width}&sizey=${step4.height}`))
    }, [dispatch]);

    return (
        <div>
            <h2 className={'header'}>{fetchResult === 'error' ? 'Ошибка' : 'Успешно'}</h2>
            {results}
        </div>

    );
};

export default Results;