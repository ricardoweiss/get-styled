'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import { AdBlockDetectedWrapper } from "adblock-detect-react";
import {
  ConvertButton,
  ConvertSection,
  ConvertTextArea,
  Description,
  Main,
  ResultTextArea,
  RevertButton,
  SelectConversionRow,
  Spacing,
  StyledSelect, StyledSyntaxHighlighter,
  Subtitle,
  TermsAndConditions,
  TextAreaBlock,
  TextAreaRow,
  Title,
  TitleContainer
} from '@/styles/page.styles';
import TailwindLogo from '@/assets/tailwind-logo.png';
import StyledComponentsLogo from '@/assets/styled-components-logo.png';
import bootstrapLogo from '@/assets/bootstrap-logo.png';
import AdBlockModal from '@/components/AdBlockModal/AdBlockModal';
import {ArrowsClockwise} from '@phosphor-icons/react';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useSubmitPrompt} from "@/hooks/useSubmitPrompt";

export default function Home() {
  const [from, setFrom] = useState('tailwind');
  const [to, setTo] = useState('styledComponents');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [codeString, setCodeString] = useState<null | string>(null);

  const imageFrom = from === 'tailwind' ? TailwindLogo : from === 'styledComponents' ? StyledComponentsLogo : bootstrapLogo;
  const imageTo = to === 'tailwind' ? TailwindLogo : to === 'styledComponents' ? StyledComponentsLogo : bootstrapLogo;

  const handleTo = (value: string) => {
    setTo(value)
  };
  const handleFrom = (value: string) => {
    setFrom(value)
  };

  const getCodeResponse = useSubmitPrompt()

  const convert = async () => {
    setLoading(true)
    try {
      const res = await getCodeResponse(inputValue)
      const result = await res.json()
      const codeWithoutFirstLine = result?.candidates[0]?.output?.split('\n').slice(1).join('\n')
      const code = codeWithoutFirstLine?.split('\n').slice(0, -1).join('\n')
      setCodeString(code)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Main>
      <ConvertSection>
        <TitleContainer>
          <Image src="/logo.png" alt="logo" height={100} width={100}/>
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
          <StyledSelect value={from} name="from" id="from" onChange={(e) => handleFrom(e.target.value)}>
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
          <StyledSelect value={to} name="to" id="to" onChange={(e) => handleTo(e.target.value)}>
            <option value="styledComponents">Styled Components</option>
            <option value="tailwind">Tailwind</option>
            <option value="bootstrap">Bootstrap</option>
          </StyledSelect>
          <RevertButton onClick={() => {
            const temp = from;
            setFrom(to);
            setTo(temp);
          }}>
            <ArrowsClockwise size={32} />
          </RevertButton>
        </SelectConversionRow>
        <TextAreaRow>
          <TextAreaBlock>
            <ConvertTextArea
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste your code here"
            />
            <ConvertButton loading={loading} onClick={convert}>
              Start translating
            </ConvertButton>
          </TextAreaBlock>
          <Spacing/>
          <TextAreaBlock>
            <StyledSyntaxHighlighter language="javascript" style={darcula}>
              {codeString ? codeString : 'Your translated code will appear here'}
            </StyledSyntaxHighlighter>
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
