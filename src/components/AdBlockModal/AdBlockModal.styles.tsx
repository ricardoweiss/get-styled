import styled from 'styled-components';
import { colors, fontWeights, text } from '@/styles/styleGuide';

export const Title = styled.h1`
  font-size: ${text.h1};
  font-weight: ${fontWeights.bold};
  color: ${colors.black};
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: ${text.paragraph};
  font-weight: ${fontWeights.regular};
  max-width: 280px;
  text-align: center;
`;

export const RefreshButton = styled.button`
  font-size: ${text.paragraph};
  font-weight: ${fontWeights.regular};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  width: 100%;
`;