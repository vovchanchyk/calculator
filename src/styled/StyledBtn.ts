import styled from 'styled-components';

const StyledBtnWithProps = styled.button<{background?:string, active?:string}>`
box-sizing: border-box;
 display: flex;
justify-content: center;
align-items: center;
margin: 10px;
padding-top:-20px;
color: ${(props) => props.color || 'white'};
background-color:${(props) => props.background || '#333'} ;
font-size:40px;
filter: ${(props) => props.active};       
`;
export default StyledBtnWithProps;
