import styled from 'styled-components'

export const LangList = styled.li`
  list-style-type: none;
  margin-right: 20px;
`
export const Button = styled.button`
  border: 1px solid #db1c48;
  height: 30px;
  width: 80px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')};
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
`
