import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};

  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
    min-height: 450px;
    margin: 5rem 10px;
  }
`
