import styles from './App.module.css';
import { useState } from 'react';
import { getButtons } from './get-buttons';

export const App = () => {
    const [operand1, setOperand1] = useState('0');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');
    const [isFinish, setIsFinish] = useState(false);

    const state = {
        setOperand1,
        setOperator,
        setOperand2,
        setIsFinish,
        operand1,
        operator,
        operand2,
        isFinish,
    };

    const buttons = getButtons(state);

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
