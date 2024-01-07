import styled from 'styled-components';
import {colors} from '@/styles/styleGuide';

export const TermsContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 2.4rem);
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.2rem;
  min-height: 100vh;
  background-color: ${colors.black};
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${colors.white};
  max-width: 74rem;
  overflow-x: hidden;
  h2 {
    color: ${colors.leafGreen};
  }
  h3 {
    color: ${colors.riverGreen};
  }
  button {
    margin-top: 1rem;
    background: ${colors.riverGreen};
    color: ${colors.black};
    font-weight: bold;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background: ${colors.shallowBlue};
    }
  }  
`;
