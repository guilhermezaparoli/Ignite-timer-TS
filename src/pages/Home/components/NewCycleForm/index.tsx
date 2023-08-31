import { useFormContext } from 'react-hook-form'
import {
  FirstBlock,
  FormContainer,
  MinutesAmountInput,
  SecondBlock,
  TaskInput,
} from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

interface NewCycleFormProps {
  populateDataList: string[] | undefined
}

export function NewCycleForm({ populateDataList }: NewCycleFormProps) {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <FirstBlock>
        <label htmlFor="task">Vou me dedicar em</label>
        <TaskInput
          type="text"
          id="task"
          placeholder="Dê um nome para a sua tarefa"
          list="task-suggestions"
          disabled={!!activeCycle}
          {...register('task')}
        />
      </FirstBlock>

      <SecondBlock>
        <label htmlFor="minutesAmount">durante</label>
        <datalist id="task-suggestions">
          {populateDataList &&
            populateDataList.map((tarefa, index) => {
              return <option value={tarefa} key={index} />
            })}
        </datalist>

        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </SecondBlock>
    </FormContainer>
  )
}
