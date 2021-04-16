import React, { useRef, useState } from 'react';
import calc from '../functions/put';
import Numbers from '../styled/Numbers';
import Orange from '../styled/Orange';
import Pale from '../styled/Pale';
import StyledDisplay from '../styled/StyledDisplay';
import Wrapper from '../styled/Wrapper';
import Button from './Button';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

const Container: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState({ operator: '', operand: '' });
  const ready = useRef(true);

  const full = (value: string) => {
    if (display === '0' && value === '.') {
      setDisplay(display + value);
    } else if ((display === '0' || ready.current) && value !== '+/-') {
      ready.current = false;
      const swan = display === value ? `${value} ` : value;
      setDisplay(swan);
    } else if (value === '.' && display.indexOf('.') === -1) {
      setDisplay(display + value);
    } else if (/[0-9]/.test(value)) {
      ready.current = false;
      setDisplay(display + value);
    } else if (value === '+/-' && display !== '0') {
      setDisplay((prev) => {
        if ((prev.indexOf('-') === -1)) {
          return `-${prev}`;
        }
        return prev.slice(1);
      });
    }
  };
  const clear = (): void => {
    setDisplay('0');
  };

  const put = (value: string): void => {
    if (operation.operator) {
      const { operand } = operation;
      const ress = calc(operand, display, operation.operator);
      ready.current = true;
      setDisplay(ress);
      setOperation({ operand: ress, operator: value });
    } else {
      setOperation({ operand: display, operator: value });
      ready.current = true;
    }
  };

  const equal = (): void => {
    if (!ready.current) {
      const { operand, operator } = operation;
      const ress = calc(operand, display, operator);
      setDisplay(ress);
      setOperation({ operand: '', operator: '' });
      ready.current = true;
    }
  };
  return (
    <Wrapper>
      <StyledDisplay>{display}</StyledDisplay>
      <Pale>
        <Button value={display === '0' ? 'AC' : 'C'} background="#a5a5a5" clear={clear} />
        <Button value="+/-" background="#a5a5a5" full={full} />
        <Button value="%" background="#a5a5a5" put={put} />
      </Pale>
      <Numbers>
        {numbers.map((el) => <Button value={el} key={el} full={full} />)}
      </Numbers>
      <Orange>
        {['÷', '×', '-', '+'].map((el) => {
          const active = ((ready.current && operation.operator === el));
          return <Button active={active} put={put} background="#f1a33c" key={el} value={el} />;
        })}
        <Button value="=" equal={equal} background="#f1a33c" />
      </Orange>
    </Wrapper>
  );
};

export default Container;
