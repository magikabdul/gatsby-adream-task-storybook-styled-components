import React from 'react'
import styled from 'styled-components'
import InputField from '../../atoms/InputField/InputField'
import CheckBox from '../../atoms/CheckBox/CheckBox'
import Button from '../../atoms/Button/Button'

const Container = styled.div`
  width: 449px;
  min-height: 638px;
  padding: 28px 33px 33px;
  background-color: ${({ theme }) => theme.color.white};

  @media only screen and (min-width: 500px) and (max-width: 800px) {
    width: 100%;
    min-height: unset;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    width: 80%;
    min-height: unset;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Title = styled.h3`
  line-height: 38px;

  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    display: none;
    line-height: unset;
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`

const Description = styled.p`
  margin-top: 7px;

  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    display: none;
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`

const Info = styled.p`
  margin-top: 10px;
  font-weight: bold;

  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`

const Form = styled.form`
  margin-top: 34px;

  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    margin-top: 10px;
  }
`

const InputWrapper = styled.div`
  margin-top: 20px;

  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    margin-top: 8px;
}
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  height: 52px;

  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    margin-top: 8px;
    height: 40px;
  }
`;

const ContactForm = () => (
  <>
    <Container>
      <Title>
        Lorem ipsum
        <br /> Lorem ipsum lorem ipsum
      </Title>
      <Description>consectetur adipiscing elit. Ut auctor arcu</Description>
      <Info>Zostaw kontakt, zadzwonimy do Ciebie</Info>
      <Form>
        <InputField placeholder='Imię i nazwisko' />
        <InputWrapper><InputField placeholder='Telefon' /></InputWrapper>
        <InputWrapper><InputField placeholder='Email' /></InputWrapper>
        <InputWrapper><InputField placeholder='Lorem ipsum lorem ipsum' /></InputWrapper>
        <InputWrapper><CheckBox text='Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...' /></InputWrapper>
        <ButtonWrapper>
          <Button type='submit' text='WYŚLIJ' onClick={(e) => e.preventDefault()}/>
        </ButtonWrapper>
      </Form>
    </Container>
  </>
)

export default ContactForm
