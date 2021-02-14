import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Results = () => {
    const {results} = useSelector(({film}) => film);
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(fetchData('?building=1&height=2&material=2&sizex=10&sizey=12'))
    }, [dispatch]);
    return (
        <div>
            res
        </div>
    );
};

export default Results;