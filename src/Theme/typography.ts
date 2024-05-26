import { MODE } from '../store/mode';
import styled from 'styled-components';


const TextColor = {
  primary:'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(255, 255, 255, 0.87)',
  paragraph:'rgba(0, 0, 0, 0.60)',
  paragraphWhite:'rgba(255, 255, 255, 0.60)'
};


export const Heading1 = styled.h1<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
  font-family: 'Montserrat';
  font-size: 96px;  
  font-style: normal;
  font-weight: 300;
  line-height: 116.7%; /* 112.032px */
  letter-spacing: -1.5px;
`;

export const Heading2 = styled.h2<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
  font-family: 'Montserrat';
  font-size: 60px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%; /* 72px */
  letter-spacing: -0.5px;
`;

export const Heading3 = styled.h3<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
  font-family: 'Montserrat';
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 116.7%; /* 56.016px */
`;

export const Heading4 = styled.h4<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
  font-family: 'Montserrat';
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 123.5%; /* 41.99px */
  letter-spacing: 0.25px;
`;

export const Heading5 = styled.h5<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
  font-family: 'Montserrat';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height:  32.016px ;
`;

export const Heading6 = styled.h6<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
  font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height:  32px;
  letter-spacing: 0.15px;
`;

export const Paragraph1 = styled.p<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.paragraphWhite:TextColor.paragraph};
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height:  28.02px ;
  letter-spacing: 0.17px;
`;
export const Paragraph1b = styled.p<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.paragraphWhite:TextColor.paragraph};
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24.02px; 
letter-spacing: 0.15px;

`;export const Paragraph1c = styled.p<{mode:MODE}>`
color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24.02px; 
letter-spacing: 0.15px;
`;
export const Paragraph2 = styled.p<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.paragraphWhite:TextColor.paragraph};
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20.02px; 
letter-spacing: 0.17px;
`;

export const Paragraph3 = styled.p<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.paragraphWhite:TextColor.paragraph};
  font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
/* line-height: 31.92px;  */
letter-spacing: 1px;
`;
export const Paragraph3b = styled.p<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.secondary:TextColor.primary};
  font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
/* line-height: 31.92px;  */
letter-spacing: 1px;
`;

export const BoldParagraph2 = styled.p<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.paragraphWhite:TextColor.paragraph};
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20.02px; 
letter-spacing: 0.17px;
`;
export const BoldParagraph3 = styled.p<{mode:MODE}>`
  color: ${(props)=>props.mode===MODE.DARK? TextColor.paragraphWhite:TextColor.paragraph};
  font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
/* line-height: 31.92px;  */
letter-spacing: 1px;
`;


export default TextColor; 
