import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { SoundContext } from '../../contexts/SoundContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
    },
  })

  const { pressButton } = useContext(SoundContext)
  // const populateDataList: string[] = []

  const [populateDataList, setPopulateDataList] = useState<string[]>()

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
    setPopulateDataList((state) => [...(state || []), data.task])
  }

  useEffect(() => {
    const populateData = localStorage.getItem(
      '@ignite-timer:populateDataList-1.0.0',
    )
    if (populateData) {
      const json = populateData && JSON.parse(populateData)
      if (populateData?.length) setPopulateDataList(json)
      console.log(json, 'aaaa')
    }
  }, [])

  useEffect(() => {
    if (populateDataList) {
      const populateJSON = JSON.stringify(populateDataList)
      localStorage.setItem('@ignite-timer:populateDataList-1.0.0', populateJSON)
    }
  }, [populateDataList])

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm populateDataList={populateDataList} />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton
            type="button"
            onClick={() => {
              interruptCurrentCycle()
              pressButton()
            }}
          >
            <HandPalm />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            onClick={pressButton}
            type="submit"
            disabled={isSubmitDisabled}
          >
            <Play />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
