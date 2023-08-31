import { styled } from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem 6rem 4.5rem;

  display: flex;
  flex-direction: column;
  overflow: auto;

  > h1 {
    font-size: 1.5rem;
    line-height: 1.6;

    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 768px) {
    padding: 1rem;
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
      width: 40%;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  }

  @media (max-width: 875px) {
    table {
      min-width: 100%;
    }

    thead {
      display: none;
    }

    table,
    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }
    tr {
      margin-bottom: 15px;
    }
    td {
      text-align: right;
      padding-left: 50%;
      text-align: right;
      position: relative;

      &:first-child {
        padding-left: 1.5rem;
        width: 100%;
      }
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
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

  @media (max-width: 875px) {
    justify-content: end;
  }
`
