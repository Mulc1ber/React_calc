export const handleNum = (
    { setOperand1, setOperand2, setIsFinish, operand1, operator, operand2 },
    label,
) => {
    if (operator === '') {
        if (operand1 === '0') {
            setOperand1(label);
        } else {
            setOperand1((prevState) => prevState + label);
            setIsFinish(false);
        }
    } else {
        if (operand2 === '0') {
            setOperand2(label);
        } else {
            setOperand2((prevState) => prevState + label);
        }
    }
};
