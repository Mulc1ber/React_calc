import styles from './App.module.css';
import { useState } from 'react';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const App = () => {
    const [operand1, setOperand1] = useState('0');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');
    const [isFinish, setIsFinish] = useState(false);

    const displayValue = operand1 + operator + operand2;

    const handleClick = (item) => {
        if (operand1 === '0') {
            setOperand1(item);
        } else if (operator) {
            setOperand2((prevState) => prevState + item);
        } else {
            setOperand1((prevState) => prevState + item);
        }
    };

    const handleButtonOperand = (op) => {
        switch (op) {
            case '-':
                setOperator(op);
                break;
            case '+':
                setOperator(op);
                break;
            default:
                return;
        }
    };

    const handleResult = () => {
        switch (operator) {
            case '-':
                setOperand1(Number(operand1) - Number(operand2));
                setOperand2('');
                setOperator('');
                setIsFinish(true);
                break;
            case '+':
                setOperand1(Number(operand1) + Number(operand2));
                setOperand2('');
                setOperator('');
                setIsFinish(true);
                break;
            default:
                return;
        }
    };

    const handleReset = () => {
        setOperand1('0');
        setOperand2('');
        setOperator('');
        setIsFinish(false);
    };

    return (
        <div className={styles['App']}>
            <div className={styles['Wrapper']}>
                <div className={`${styles.Display} ${isFinish ? styles.Finish : ''}`}>
                    {displayValue}
                </div>

                <div className={styles['PanelButtons']}>
                    <div className={styles['OperatorsButton']}>
                        <button
                            className={`${styles.OperatorButton} ${styles.Button}`}
                            onClick={() => handleButtonOperand('-')}
                        >
                            -
                        </button>
                        <button
                            className={`${styles.OperatorButton} ${styles.Button}`}
                            onClick={() => handleButtonOperand('+')}
                        >
                            +
                        </button>
                        <button
                            className={`${styles.OperatorButton} ${styles.Button}`}
                            onClick={handleResult}
                        >
                            =
                        </button>
                        <button
                            className={`${styles.OperatorButton} ${styles.Button}`}
                            onClick={handleReset}
                        >
                            C
                        </button>
                    </div>

                    <div className={styles['NumericButtons']}>
                        {NUMS.map((button, index) => (
                            <div
                                key={index}
                                className={`${styles.NumericButton} ${styles.Button} ${index === 9 ? styles.ButtonNine : ''}`}
                                onClick={() => handleClick(button)}
                            >
                                {button}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
