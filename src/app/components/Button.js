import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background: transparent;
  border: 2px solid;
  cursor: pointer;
  transition: color .25s ease-in-out;

  &:hover {
    color: #888;
  }

  @media (min-width: 479px) {
    display: none;
  }
`
export default Button