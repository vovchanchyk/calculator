import React from 'react';
import StyledBtnWithProps from '../styled/StyledBtn';
import StyledSpan from '../styled/StyledSpan';

type BtnType = {
    value: string;
    background?: string;
    full?: (value: string) => void;
    clear?: () => void;
    put?: (value: string) => void;
    equal?: () => void;
    active?:boolean
}

const Button: React.FC<BtnType> = ({
  value, background, full, clear, put, equal, active,
}) => {
  const handle = () => {
    if (full) {
      full(value);
    } else if (clear) {
      clear();
    } else if (put) {
      put(value);
    } else if (equal) {
      equal();
    }
  };
  const spanProps = {
    mTop: '-7px',
    fsz: '45px',
  };
  const style: React.CSSProperties = {
    borderRadius: '50%',
    background,
  };
  if (value === '0') {
    style.gridColumnStart = 1;
    style.gridColumnEnd = 3;
    style.borderRadius = '45px';
  }
  if (/AC|C|[0-9]|%/.test(value)) {
    spanProps.fsz = '35px';
    spanProps.mTop = '0px';
  }

  return (
    <StyledBtnWithProps active={active ? 'brightness(160%)' : 'none'} onClick={handle} style={style}>
      <StyledSpan {...spanProps}>{value}</StyledSpan>
    </StyledBtnWithProps>
  );
};

export default Button;
