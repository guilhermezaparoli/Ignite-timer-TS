import { ReactNode, createContext } from 'react'

interface SoundContextType {
  timeEnd: () => void
  pressButton: () => void
}

export const SoundContext = createContext({} as SoundContextType)

interface SoundContextProviderProps {
  children: ReactNode
}

export function SoundContextProvider({ children }: SoundContextProviderProps) {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true',
  )

  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true',
  )

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return (
    <>
      <SoundContext.Provider
        value={{
          pressButton,
          timeEnd,
        }}
      >
        {children}
      </SoundContext.Provider>
    </>
  )
}
