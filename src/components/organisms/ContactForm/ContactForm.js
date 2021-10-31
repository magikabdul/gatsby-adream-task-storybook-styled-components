import React from 'react'
import styled from 'styled-components'
import InputField from '../../atoms/InputField/InputField'
import CheckBox from '../../atoms/CheckBox/CheckBox'
import Button from '../../atoms/Button/Button'

const Container = styled.div`
  width: 449px;
  height: 638px;

  padding: 28px 33px 33px;

  background-color: ${({ theme }) => theme.color.white};
`

const Title = styled.h3`
  line-height: 38px;
`

const Description = styled.p`
  margin-top: 7px;
`

const Info = styled.p`
  margin-top: 10px;
  font-weight: bold;
`

const Form = styled.form`
  margin-top: 34px;
`

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
        <div style={{ marginTop: '20px' }}><InputField placeholder='Telefon' /></div>
        <div style={{ marginTop: '20px' }}><InputField placeholder='Email' /></div>
        <div style={{ marginTop: '20px' }}><InputField placeholder='Lorem ipsum lorem ipsum' /></div>
        <div style={{ marginTop: '20px' }}><CheckBox text='Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...' /></div>
        <div style={{ marginTop: '20px', height: '52px' }}><Button type='submit' text='WYŚLIJ' onClick={(e) => e.preventDefault()}/></div>
      </Form>
    </Container>
  </>
)

export default ContactForm
