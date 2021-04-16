import styled from 'styled-components';

const StyledSpan = styled.span<{mTop:string, fsz:string}>`
margin-top: ${(props) => props.mTop};
`;
export default StyledSpan;
