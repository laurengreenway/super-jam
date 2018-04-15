import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const ListItem = styled.li`
  width: calc(33% - 10px);
  padding-left: 0;
  padding: 7px 15px;
  margin-top: 20px;
  background: linear-gradient(0.45turn, #009cee, #0088d0, #21759b);
  box-shadow: 6px 6px 16px -8px rgba(0, 0, 0, 0.75);
  &:nth-child(3n) {
    margin-right: 0px;
  }
`
export const Title = styled.h1`
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-style: italic;
`

export const SmallTitle = styled.h4`
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  font-style: italic;
`

export const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const ClockContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Controls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(0.45turn, #009cee, #0088d0, #21759b);
  box-shadow: 6px 6px 16px -8px rgba(0, 0, 0, 0.75);
  ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-left: 0;
    li {
      padding: 7px 15px;
      a {
        color: black;
        text-decoration: none;
        font-size: 24px;
        text-transform: uppercase;
        font-family: 'Roboto Condensed', sans-serif;
        font-style: italic;
      }
    }
  }
`

export const ClockText = styled.span`
  font-size: 10rem;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-style: italic;
`

export const Button = styled.button`
  background: black;
  border-radius: 5px;
  padding: 15px 0px;
  color: #009cee;
  box-shadow: 6px 6px 16px -8px rgba(0, 0, 0, 0.75);
  margin-top: 25px;
  width: 33%;
  max-width: 350px;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  font-style: italic;
  &:disabled {
    border: 1px solid #009cee;
    background: white;
    box-shadow: none;
  }
`
