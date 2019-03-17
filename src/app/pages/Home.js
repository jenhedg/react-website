import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router';

// Components
import Button from './../components/Button'
import Container from './../components/Container'

// Import Typography components
import { Heading, Subheading } from './../components/Typography'

//   @media (min-width: 480px) {}
//   @media (min-width: 768px) {}
//   @media (min-width: 1280px) {}
//   @media (min-width: 1600px) {}

const HomeWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #FEAC5E;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #4BC0C8, #C779D0, #FEAC5E);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #4BC0C8, #C779D0, #FEAC5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  ${Container} {
    color: #000;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }
`
// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a')

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper>
        <Container>
          <Heading>Jennifer Hedgcock</Heading>
          <Subheading>Front End Web Developer</Subheading>
          <HomeButton href="/portfolio">My work</HomeButton>
        </Container>
      </HomeWrapper>
    )
  }
}