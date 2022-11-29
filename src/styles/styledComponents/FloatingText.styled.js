import styled from 'styled-components'

export const FloatingTextStyled = styled.div`
  position: absolute;
  bottom: auto;
  left: 60px;
  top: 435px;
  min-width: 100px;
  height: fit-content;
  max-width: 450px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  p {
    font-size: 1rem;
    margin-bottom: 0px;
    font-weight: 500;
    text-align: left;
  }
  @media (max-width: 968px) {
    display: flex;
    position: absolute;
    top: 395px;
    left: 30px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    p {
      font-size: 0.81rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 479px;
    width: 270px;
    left: 15px;
    p {
      font-size: 0.68rem;
    }
  }
  @media (max-width: 480px) {
    position: absolute;
    bottom: 250px;
    left: 40px;
    width: 150px;
    .info {
      display: none;
    }
  }
`
export const FloatingTextRightIslandStyled = styled.div`
  position: absolute;
  top: 163px;
  padding: 10px 50px;
  margin: 0px 0px 0px auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 600;
    text-align: center;
  }
  @media (max-width: 968px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    p {
      font-size: 1.2rem;
    }
  }
`

export const FloatingTextRightStyled = styled.div`
  position: absolute;
  top: 193px;
  min-width: 193px;
  max-width: 350px;
  right: 55px;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  p {
    padding: 5px;
    font-size: 1.4rem;
    margin-bottom: 0;
    font-weight: 600;
    text-align: auto;
  }
  @media (max-width: 968px) {
    top: 195px;
    height: 60px;
    right: 100px;
    width: fit-content;
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    top: 164px;
    height: 60px;
    margin: 0px auto;
    width: fit-content;
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    top: 164px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    p {
      font-size: 1rem;
    }
  }
`

export const ButtonFloatingStyled = styled.button`
  position: absolute;
  height: 40px;
  bottom: 130px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.8;
  color: ${({ theme }) => theme.textContrast};
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 70%;
  -webkit-box-align: center;
  align-items: center;
  p {
    width: fit-content;
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 968px) {
    bottom: 125px;
    width: 70%;
    height: 40px;
    p {
      font-size: 0.68rem;
    }
  }
  @media (max-width: 768px) {
    bottom: 80px;
    width: 70%;
    height: 40px;
    p {
      font-size: 0.68rem;
    }
  }
  @media (max-width: 480px) {
    top: 19px;
    width: 100%;
    height: 40px;
    left: -12px;
    bottom: auto;
  }
`
export const ButtonFloatingIslandStyled = styled.button`
  position: absolute;
  width: 60%;
  height: 50px;
  bottom: 130px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.8;
  color: ${({ theme }) => theme.textContrast};
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  p {
    width: fit-content;
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 968px) {
    position: absolute;
    width: 45%;
    bottom: 90px;
    height: 40px;
    p {
      font-size: 0.68rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    width: 70%;
    bottom: 84px;
    height: 40px;
    p {
      font-size: 0.68rem;
    }
  }
  @media (max-width: 480px) {
    position: absolute;
    width: 70%;
    left: -25px;
    bottom: 40px;
    height: 40px;
  }
`

export const FloatingTextIslandsStyled = styled.div`
  position: absolute;
  left: 40px;
  bottom: 50px;
  width: 450px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  p {
    font-size: 1.1rem;
    margin-bottom: 0px;
    font-weight: 500;
  }

  @media (max-width: 968px) {
    display: flex;
    width: 350px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    p {
      font-size: 0.81rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    left: 30px;
    width: 260px;
    p {
      font-size: 0.68rem;
    }
  }
  @media (max-width: 480px) {
    .info {
      display: none;
    }
  }
`
