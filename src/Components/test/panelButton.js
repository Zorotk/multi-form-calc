import React from 'react';
import Button from "../button/button";
import useDefaultStep from "../hook/useDefaultStep";

const PanelButton = () => {
    const defaultStep = useDefaultStep()
    return (
        <div className={'test-panel-button'}>
            <Button onClick={defaultStep}>Отмена</Button>
            <Button type="submit">Далее</Button>
        </div>
    );
};

export default PanelButton;