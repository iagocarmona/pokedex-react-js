import styled from 'styled-components'

export const ChangeCard = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  justify-content: space-between;
  padding: 0 15rem;
  button {
    position: relative;
    border: 0;
    outline: 0;
    width: 170px;
    background: none;
    font-size: 35px;
    line-height: 38px;
    color: #ffffff;
    opacity: 0.4;
    text-transform: capitalize;

    img {
      position: absolute;
      top: -34px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      z-index: 1;
    }
  }
  .active {
    position: relative;
    border: 0;
    outline: 0;
    width: 170px;
    background: none;
    font-size: 35px;
    line-height: 38px;
    color: #ffffff;
    opacity: 1;
    text-transform: capitalize;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 3rem 3rem 0 0;
  padding: 2rem 10rem;

  p {
    font-size: 28px;
    line-height: 31px;
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.color.greyLight};
  }
`

export const Pokedex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  div {
    h3 {
      color: ${({ color }) => color};
      font-size: 28px;
      line-height: 31px;
    }
  }
`
