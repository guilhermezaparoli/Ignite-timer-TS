import { styled } from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem 6rem 4.5rem;

  display: flex;
  flex-direction: column;
  overflow-y: auto;

  > h1 {
    font-size: 1.5rem;
    line-height: 1.6;

    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 768px) {
    padding: 1rem;
    overflow: auto;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow-y: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    overflow-y: auto;
  }

  thead {
    position: sticky;
    top: 0;
  }

  th {
    background-color: ${(props) => props.theme['gray-600']};
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }
    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-700']};
    border-top: 4px solid ${(props) => props.theme['gray-800']};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      padding-left: 1.5rem;
      width: 50%;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    min-width: 200px;

    td {
      &:first-child {
        width: 20%;
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
