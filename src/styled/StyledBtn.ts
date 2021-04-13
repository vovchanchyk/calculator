import styled from "styled-components";


export const StyledBtnWithProps = styled.div<{background?:string}>`
box-sizing: border-box;
 display: flex;
justify-content: center;
align-items: center;
margin: 10px;
padding-top:-20px;


color: ${props => props.color || 'white'};
background-color:${props=>props.background ||'#333'} ;
font-size:40px;
//margin-top:-17px;
`;

