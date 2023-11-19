'use client';
import {
  ConvertButton,
  ConvertSection,
  ConvertTextArea,
  Description,
  Main,
  Subtitle,
  TermsAndConditions,
  Title,
  TitleContainer
} from '@/styles/page.styles';

export default function Home() {
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
