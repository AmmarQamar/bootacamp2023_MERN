import React, { useState } from 'react';

const DivisionComponent = ({ setDivisionResult }) => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');

    const performDivision = () => {
        const result = Number(operand1) / Number(operand2);
        setDivisionResult(result);
    };

    return (
        <div>
            <h3>Division Component</h3>
            <input
                type
                ="number"
                value={operand1}
                onChange={(e) => setOperand1(e.target.value)}
            />
            <input
                type="number"
                value={operand2}
                onChange={(e) => setOperand2(e.target.value)}
            />
            <button onClick={performDivision}>Perform Division</button>
        </div>
    );
};

export default DivisionComponent;
