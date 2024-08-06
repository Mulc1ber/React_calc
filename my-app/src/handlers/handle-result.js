export const handleResult = ({
    setOperand1,
    setOperator,
    setOperand2,
    setIsFinish,
    operand1,
    operator,
    operand2,
}) => {
    if (operand2 !== '') {
        switch (operator) {
            case '-':
                setOperand1(Number(operand1) - Number(operand2));
                setIsFinish(true);
                break;
            case '+':
                setOperand1(Number(operand1) + Number(operand2));
                setIsFinish(true);
                break;
            default:
                return;
        }
        setOperand2('');
    }
    setOperator('');
};
