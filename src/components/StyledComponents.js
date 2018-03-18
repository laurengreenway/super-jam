import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  border: 2px solid black;
  border-radius: 7px;
  width: calc(33% - 20px);
  padding-left: 0;
  padding: 7px 15px;
  margin-top: 20px;
  margin-right: 20px;
  background: linear-gradient(0.45turn, #009cee, #0088d0, #21759b);
  box-shadow: 6px 6px 16px -8px rgba(0, 0, 0, 0.75);
  &:nth-child(3n + 3) {
    margin-right: 0;
  }
`
export const Title = styled.h1`
  text-align: center;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
`

export const SmallTitle = styled.h4`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
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
`

export const JammerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`
