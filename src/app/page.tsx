'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import { AdBlockDetectedWrapper } from "adblock-detect-react";
import {
  ConvertButton,
  ConvertSection,
  ConvertTextArea,
  Description,
  Main, ResultTextArea,
  SelectConversionRow, Spacing,
  StyledSelect,
  Subtitle,
  TermsAndConditions, TextAreaBlock, TextAreaRow,
  Title,
  TitleContainer
} from '@/styles/page.styles';
import TailwindLogo from '@/assets/tailwind-logo.png';
import StyledComponentsLogo from '@/assets/styled-components-logo.png';
import bootstrapLogo from '@/assets/bootstrap-logo.png';
import AdBlockModal from '@/components/AdBlockModal/AdBlockModal';

export default function Home() {
  const [from, setFrom] = useState('tailwind');
  const [to, setTo] = useState('styledComponents');

  const imageFrom = from === 'tailwind' ? TailwindLogo : from === 'styledComponents' ? StyledComponentsLogo : bootstrapLogo;
  const imageTo = to === 'tailwind' ? TailwindLogo : to === 'styledComponents' ? StyledComponentsLogo : bootstrapLogo;

  const handleTo = (value: string) => {
    setTo(value)
  };
  const handleFrom = (value: string) => {
    setFrom(value)
  };

  return (
    <Main>
      <ConvertSection>
        <TitleContainer>
          <Title>
            CSS Convertor
          </Title>
          <Subtitle>
            The first CSS library translate tool!
          </Subtitle>
        </TitleContainer>
        <Description>
          CSS Convertor is an A.I. that allows you to translate CSS libraries to your favorite one.
        </Description>
        <SelectConversionRow>
          Translate from
          <Image
            src={imageFrom}
            alt={from}
            height={40}
            width={40}
            style={{marginLeft: '1rem'}}
          />
          <StyledSelect name="from" id="from" onChange={(e) => handleFrom(e.target.value)}>
            <option value="tailwind">Tailwind</option>
            <option value="bootstrap">Bootstrap</option>
            <option value="styledComponents">Styled Components</option>
          </StyledSelect>
          to
          <Image
            src={imageTo}
            alt={to}
            height={40}
            width={40}
            style={{marginLeft: '1rem'}}
          />
          <StyledSelect name="to" id="to" onChange={(e) => handleTo(e.target.value)}>
            <option value="styledComponents">Styled Components</option>
            <option value="tailwind">Tailwind</option>
            <option value="bootstrap">Bootstrap</option>
          </StyledSelect>
        </SelectConversionRow>
        <TextAreaRow>
          <TextAreaBlock>
            <ConvertTextArea
              placeholder="Paste your code here"
            />
            <ConvertButton>
              Start translating
            </ConvertButton>
          </TextAreaBlock>
          <Spacing/>
          <TextAreaBlock>
            <ResultTextArea
              placeholder="Results will appear here"
              disabled
            />
          </TextAreaBlock>
        </TextAreaRow>
        <TermsAndConditions>
          By using this service you agree to our <b>Terms and Conditions</b>
        </TermsAndConditions>
        <AdBlockDetectedWrapper>
          <AdBlockModal />
        </AdBlockDetectedWrapper>
      </ConvertSection>
    </Main>
  )
}
