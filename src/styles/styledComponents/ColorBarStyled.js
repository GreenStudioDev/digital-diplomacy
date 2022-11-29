import styled from 'styled-components'

export const ColorBarStyled = styled.div`
  /* background: white; */
  background: linear-gradient(90deg, #edf7ff 0%, #1d9bf0 100%);
  /* opacity: 1; */
  /* border: 1px solid black; */
  max-width: 450px;

  min-width: 150px;

  height: 30px;

  pointer-events: none;
  border-radius: 20px;
  @media (max-width: 768px) {
    min-width: 100px;
  }
  @media (max-width: 480px) {
    min-width: 75px;
  }
`

export const ColorBarContainer = styled.article`
      display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    z-index: 10;
    max-width: 550px;
    min-width: 100px;
    position: absolute;
    bottom: 20px;
    right: 14px;
    left: auto;
  em {
    font-size: 1rem;
    font-weight: 600;
    margin: 15px;
  }
  @media (max-width: 768px) {
    width: 100px;
    inset: 271px 170px auto auto;
    scale: 0.7;
  }
  @media (max-width: 480px) {
    width: 100px;
    inset: 269px 80px auto auto;
    scale: 0.6;
  }
`
