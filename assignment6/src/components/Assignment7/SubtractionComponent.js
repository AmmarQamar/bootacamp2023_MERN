import React, { useState } from 'react';

const SubtractionComponent = ({ setSubtractionResult }) => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');

    const performSubtraction = () => {
        const result = Number(operand1) - Number(operand2);
        setSubtractionResult(result);
    };

    return (
        <div>
            <h3>Subtraction Component</h3>
            <input
                type="number"
                value={operand1}
                onChange={(e) => setOperand1(e.target.value)}
            />
            <input
                type="number"
                value={operand2}
                onChange={(e) => setOperand2(e.target.value)}
            />
            <button onClick={performSubtraction}>Perform Subtraction</button>
        </div>
    );
};

export default SubtractionComponent;
