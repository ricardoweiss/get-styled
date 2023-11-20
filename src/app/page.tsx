'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import {
  ConvertButton,
  ConvertSection,
  ConvertTextArea,
  Description,
  Main,
  SelectConversionRow,
  StyledSelect,
  Subtitle,
  TermsAndConditions,
  Title,
  TitleContainer
} from '@/styles/page.styles';

import TailwindLogo from '@/assets/tailwind-logo.png';
import StyledComponentsLogo from '@/assets/styled-components-logo.png';
import bootstrapLogo from '@/assets/bootstrap-logo.png';

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
            Get Styled!
          </Title>
          <Subtitle>
            The first CSS library translate tool
          </Subtitle>
        </TitleContainer>
        <Description>
          Get Styled is a tool that allows you to translate CSS libraries to your favorite one.
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
        <ConvertTextArea
          placeholder="Paste your code here"
          rows={8}
        />
        <ConvertButton>
          Start translating
        </ConvertButton>
        <TermsAndConditions>
          By using this service you agree to our <b>Terms and Conditions</b>
        </TermsAndConditions>
      </ConvertSection>
    </Main>
  )
}
