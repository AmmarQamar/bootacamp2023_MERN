import React, { useState } from 'react';

const AdditionComponent = ({ setAdditionResult }) => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');

    const performAddition = () => {
        const result = Number(operand1) + Number(operand2);
        setAdditionResult(result);
    };

    return (
        <div>
            <h3>Addition Component</h3>
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
            <button onClick={performAddition}>Perform Addition</button>
        </div>
    );
};

export default AdditionComponent;
