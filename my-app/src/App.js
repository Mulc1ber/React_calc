import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
    const [operand1, setOperand1] = useState('0');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');
    const [isFinish, setIsFinish] = useState(false);

    const handleNum = (label) => {
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

    const handleReset = () => {
        setOperand1('0');
        setOperand2('');
        setOperator('');
        setIsFinish(false);
    };

    const handlePlus = () => {
        setOperator('+');
        setIsFinish(false);
    };

    const handleMinus = () => {
        setOperator('-');
        setIsFinish(false);
    };

    const handleResult = () => {
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

    const buttons = [
        { id: '1', label: '1', group: 'left', handler: handleNum },
        { id: '2', label: '2', group: 'left', handler: handleNum },
        { id: '3', label: '3', group: 'left', handler: handleNum },
        { id: '4', label: '4', group: 'left', handler: handleNum },
        { id: '5', label: '5', group: 'left', handler: handleNum },
        { id: '6', label: '6', group: 'left', handler: handleNum },
        { id: '7', label: '7', group: 'left', handler: handleNum },
        { id: '8', label: '8', group: 'left', handler: handleNum },
        { id: '9', label: '9', group: 'left', handler: handleNum },
        { id: '0', label: '0', group: 'left', handler: handleNum },
        { id: 'C', label: 'C', group: 'right', handler: handleReset },
        { id: '+', label: '+', group: 'right', handler: handlePlus },
        { id: '-', label: '-', group: 'right', handler: handleMinus },
        { id: '=', label: '=', group: 'right', handler: handleResult },
    ];

    const displayValue = operand1 + operator + operand2;

    return (
        <div className={styles['App']}>
            <div className={styles['Wrapper']}>
                <div className={`${styles.Display} ${isFinish ? styles.Finish : ''}`}>
                    {displayValue}
                </div>

                <div className={styles['PanelButtons']}>
                    <div className={styles['NumericButtons']}>
                        {buttons.map(({ id, label, group, handler }) =>
                            group === 'left' ? (
                                <div
                                    key={id}
                                    className={`${styles.NumericButton} ${styles.Button} ${id === '0' ? styles.ButtonZero : ''}`}
                                    onClick={() => handler(label)}
                                >
                                    {label}
                                </div>
                            ) : null,
                        )}
                    </div>

                    <div className={styles['OperatorsButton']}>
                        {buttons.map(({ id, label, group, handler }) =>
                            group === 'right' ? (
                                <button
                                    key={id}
                                    className={`${styles.OperatorButton} ${styles.Button}`}
                                    onClick={handler}
                                >
                                    {label}
                                </button>
                            ) : null,
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
