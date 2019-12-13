import styled from 'styled-components' ;

{/*shubham: styled components in use*/}
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem ;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue) ;
  border-radius: 0.5rem ;
  padding:0.2rem 0.5rem ;
  cursor: pointer ;
  margin: 0.2rem 0.5rem 0.2rem 0 ;
  transition: all 0.5s ease-in-out ;
{/*shubham: & -->>> applies on ButtonContainer only while hovering*/}
&: hover{
  background: var(--lightBlue) ;
  color: var(--mainBlue) ;
}
{/*shubham: & -->>> applies on ButtonContainer only while focus*/}
&:focus{
  outline: none ;
}
` ;
