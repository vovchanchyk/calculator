import React, { useEffect, useRef, useState } from 'react'
import Numbers from '../styled/Numbers'
import Orange from '../styled/Orange'
import Pale from '../styled/Pale'
import StyledDisplay from '../styled/StyledDisplay'
import Wrapper from '../styled/Wrapper'
import Button from './Button'


const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

const Container: React.FC = () => {

    const [display, setDisplay] = useState('0')
    const [operation, setOperation] = useState({ operator: '', operand: '' })
    const ready = useRef(true)
    const full = (value: string) => {

        if (display === '0' && value === '.') {
            setDisplay(display + value)
        } else if ((display === '0' || ready.current) && value !== '+/-') {
            console.log(ready.current)
            ready.current = false;
            setDisplay(value)
        } else if (value === '.' && display.indexOf('.') === -1) {
            setDisplay(display + value)
        } else if (/[0-9]/.test(value)) {
            setDisplay(display + value)
        } else if (value === '+/-' && display !== '0') {
            setDisplay(prev => {
                if ((prev.indexOf('-') === -1)) {
                    return '-' + prev
                }
                return prev.slice(1)

            })
        }
    }

    const clear = (): void => {
        setDisplay('0')
    }

    const put = (value: string): void => {
        setOperation({ operand: display, operator: value })
        ready.current = true;
    }

    const equal = (): void => {
        if (operation.operator === '+' && !ready.current) {
            let { operand } = operation;

            setDisplay((Number.parseFloat(operand) + Number.parseFloat(display)) + "")
            setOperation({ operand: '', operator: '' })
        } else if (operation.operator === '-' && !ready.current) {
            let { operand } = operation;

            setDisplay((Number.parseFloat(operand) - Number.parseFloat(display)) + "")
            setOperation({ operand: '', operator: '' })

        } else if (operation.operator === '÷' && !ready.current) {
            let { operand } = operation;

            setDisplay((Number.parseFloat(operand) / Number.parseFloat(display)) + "")
            setOperation({ operand: '', operator: '' })

        } else if (operation.operator === '×' && !ready.current) {
            let { operand } = operation;

            setDisplay((Number.parseFloat(operand) * Number.parseFloat(display)) + "")
            setOperation({ operand: '', operator: '' })

        } else if (operation.operator === '%' && !ready.current) {
            let { operand } = operation;
            setDisplay((Number.parseFloat(operand) % Number.parseFloat(display)) + "")
            setOperation({ operand: '', operator: '' })
        }


    }


    return (
        <Wrapper>
            <StyledDisplay>{display}</StyledDisplay>
            <Pale>
                <Button value={display === '0' ? 'AC' : 'C'} background={'#a5a5a5'} clear={clear} />
                <Button value={'+/-'} background={'#a5a5a5'} full={full} />
                <Button value={'%'} background={'#a5a5a5'} put={put} />
            </Pale>
            <Numbers>
                {numbers.map(el => <Button value={el} key={el} full={full} />)}
            </Numbers>
            <Orange>
                <Button value={'÷'} put={put} background={'#f1a33c'} />
                <Button value={'×'} put={put} background={'#f1a33c'} />
                <Button value={'-'} put={put} background={'#f1a33c'} />
                <Button value={'+'} put={put} background={'#f1a33c'} />
                <Button value={'='} equal={equal} background={'#f1a33c'} />
            </Orange>
        </Wrapper>
    )
}

export default Container
