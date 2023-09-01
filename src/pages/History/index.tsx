import { useContext } from 'react'
import {
  HistoryContainer,
  HistoryList,
  ImageContainer,
  Status,
  StyledLottieGhost,
  StyledLottieRain,
  TextNoTasks,
} from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import GhostAnimated from '../../assets/ghost-animated.json'
import RainAnimated from '../../assets/rainThunder-animated.json'
export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList className={cycles.length === 0 ? 'rain' : ''}>
        {cycles.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td data-label="Tarefa">{cycle.task}</td>
                    <td data-label="Duração">{cycle.minutesAmount} minutos</td>
                    <td data-label="Início">
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td data-label="Status">
                      {cycle.finishedDate && (
                        <Status statusColor="green">Concluído</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <ImageContainer>
            <StyledLottieRain animationData={RainAnimated} />

            <StyledLottieGhost animationData={GhostAnimated} />
            <TextNoTasks>
              <p>Infelizmente não há tarefas criadas.</p>
              <p>Crie uma tarefa e afaste o mau tempo!</p>
            </TextNoTasks>
          </ImageContainer>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}
