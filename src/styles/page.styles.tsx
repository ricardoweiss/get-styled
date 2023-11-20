import styled from 'styled-components';
import {colors, fontWeights, text} from '@/styles/styleGuide';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
`;

export const ConvertSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 70rem;
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

export const ConvertButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-size: ${text.paragraph};
  color: ${colors.black};
  font-weight: ${fontWeights.bold};
  background-color: ${colors.riverGreen};
  border-radius: 0.25rem;
  border: none;
  margin-top: 1rem;
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
  width: 100%;
  padding: 0.5rem;
  font-size: ${text.paragraph};
  color: ${colors.white};
  background-color: ${colors.lightBlack};
  border-radius: 0.25rem;
  resize: vertical;
  height: 12rem;
`;

export const ResultTextArea = styled(ConvertTextArea)`
  height: 15.5rem;
`;

export const TextAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Spacing = styled.div`
  width: 2rem;
  height: 2rem;
`;

