import styled from 'styled-components';
import {colors, fontWeights, text} from '@/styles/styleGuide';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.black};
`;

export const ConvertSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 70rem;
  padding-bottom: 2rem;
`;


export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  width: 100%;
  margin-top: 2rem;
`;

export const Description = styled.p`
  font-size: ${text.paragraph};
  margin-top: 2rem;
  color: ${colors.riverGreen};
`;

export const SelectConversionRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  width: 100%;
  margin-top: 3rem;
  color: ${colors.white};
`;

export const TextAreaRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3rem;
`;

export const ConvertButton = styled.button<{loading?: boolean}>`
  ${({loading}) => [`
  width: 100%;
  padding: 0.5rem;
  font-size: ${text.paragraph};
  color: ${colors.black};
  font-weight: ${fontWeights.bold};
  background-color: ${colors.riverGreen};
  border-radius: 0.25rem;
  border: none;
  margin-top: 1rem;`,
  loading && `background-color: ${colors.gray};`]}
`;

export const RevertButton = styled.button`
  font-size: ${text.paragraph};
  color: ${colors.riverGreen};
  font-weight: ${fontWeights.bold};
  border: none;
  margin-left: 2rem;
  position: relative;
  top: 0.25rem;
`;

export const TermsAndConditions = styled.p`
  font-size: ${text.paragraph};
  margin-top: 2.5rem;
`;


export const Title = styled.h1`
  font-size: ${text.h1};
  font-weight: ${fontWeights.bold};
  color: ${colors.riverGreen};
  margin-right: 1rem;
  position: relative;
  top: 0.15rem;
`;

export const Subtitle = styled.h2`
  font-size: ${text.h2};
  font-weight: ${fontWeights.bold};
`;

export const StyledSelect = styled.select`
  background-color: transparent;
  border-bottom: 1.5px solid ${colors.gray};
  cursor: pointer;
  margin: 0 1rem;
  color: ${colors.white};
  option {
    cursor: pointer;
    background-color: ${colors.black};
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
  }
`;

export const ConvertTextArea = styled.textarea`
  flex: 1;
  padding: 0.5rem;
  font-size: ${text.paragraph};
  color: ${colors.white};
  background-color: ${colors.lightBlack};
  border-radius: 0.25rem;
  resize: vertical;
  height: 12rem;
  font-family: 'Cascadia Code', monospace;
`;

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  background-color: ${colors.lightBlack} !important;
  min-height: 15.5rem;
  /* Styles for the scrollbar */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.gray};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.riverGreen};
    border-radius: 0.25rem;
    cursor: move;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.leafGreen};
  }
`;

export const TextAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  textarea::placeholder {
    color: ${colors.lightGray};
    font-family: 'Cascadia Code', monospace;
  }
`;

export const Spacing = styled.div`
  width: 1rem;
  height: 1rem;
`;

