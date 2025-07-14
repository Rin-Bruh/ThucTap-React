import { useState } from 'react'
import './App.css'
import WelcomeMessage from './RunOnMount/WelcomeMessage/WelcomeMessage'
import ColorSplash from './RunOnMount/ColorSplash/ColorSplash'
import MountNotice from './RunOnMount/MountNotice/MountNotice'
import PageTitle from './RunOnStatePropChange/PageTitle/PageTitle'
import CountDisplay from './RunOnStatePropChange/CountDisplay/CountDisplay'
import ThemeBox from './RunOnStatePropChange/ThemeBox/ThemeBox'
import MirrorInputs from './RunOnStatePropChange/MirrorInputs/MirrorInputs'
import Farewell from './RunOnUnmount/Farewell/Farewell'
import UnmountTracker from './RunOnUnmount/UnmountTracker/UnmountTracker'
import SessionEnd from './RunOnUnmount/SessionEnd/SessionEnd'
import Stopwatch from './Cleanup/Stopwatch/Stopwatch'
import MousePosition from './Cleanup/MousePosition/MousePosition'
import WindowDimensions from './Cleanup/WindowDimensions/WindowDimensions'
import KeyDisplay from './Cleanup/KeyDisplay/KeyDisplay'
import ColorFlasher from './Cleanup/ColorFlasher/ColorFlasher'

function App() {
  const [showFarewell, setShowFarewell] = useState(true);
  const [showTracker, setShowTracker] = useState(true);
  const [showSession, setShowSession] = useState(true);
  const [show, setShow] = useState(true);
  
  return (
    <div>
      <div>
        <WelcomeMessage />
        <ColorSplash />
        <MountNotice />
      </div>
      <div>
        <PageTitle />
        <CountDisplay />
        <ThemeBox />
        <MirrorInputs />
      </div>
      <div>
        <button onClick={() => setShowFarewell(!showFarewell)}>Toggle Farewell</button>
        <button onClick={() => setShowTracker(!showTracker)}>Toggle Tracker</button>
        <button onClick={() => setShowSession(!showSession)}>Toggle Session</button>

        {showFarewell && <Farewell />}
        {showTracker && <UnmountTracker />}
        {showSession && <SessionEnd />}
      </div>
      <div>
        <button onClick={() => setShow(!show)}>Toggle All</button>
        {show && (
          <>
            <Stopwatch />
            <MousePosition />
            <WindowDimensions />
            <KeyDisplay />
            <ColorFlasher />
          </>
        )}
      </div>
    </div>
  )
}

export default App
