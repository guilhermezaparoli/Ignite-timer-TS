import { styled } from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 340px) {
    font-size: 0.875rem;
  }
`

export const FirstBlock = styled.div`
  display: flex;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
  }
`

export const SecondBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  width: 100%;
  display: flex;

  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
    font-size: 1rem;
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0rem;
    &::placeholder {
      font-size: 0.875rem;
      text-align: center;
    }
  }

  @media (max-width: 340px) {
    &::placeholder {
      font-size: 0.7rem;
    }
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 3rem;
  }
`
