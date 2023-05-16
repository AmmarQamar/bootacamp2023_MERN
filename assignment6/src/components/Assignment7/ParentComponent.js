import React, { useState } from 'react';
import AdditionComponent from './AddtitionComponent';
import SubtractionComponent from './SubtractionComponent';
import DivisionComponent from './DivisionComponent';

const ParentComponent = () => {
    const [additionResult, setAdditionResult] = useState(null);
    const [subtractionResult, setSubtractionResult] = useState(null);
    const [divisionResult, setDivisionResult] = useState(null);

    return (
        <div>
            <h1>Parent Component</h1>
            <h2>The result of addition is: {additionResult}</h2>
            <h2>The result of subtraction is: {subtractionResult}</h2>
            <h2>The result of division is: {divisionResult}</h2>

            <AdditionComponent setAdditionResult={setAdditionResult} />
            <SubtractionComponent setSubtractionResult={setSubtractionResult} />
            <DivisionComponent setDivisionResult={setDivisionResult} />
        </div>
    );
};

export default ParentComponent;
