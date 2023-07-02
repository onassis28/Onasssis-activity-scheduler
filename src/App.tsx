import { useState } from 'react'
import './App.css'
import { ActivityScheduler } from './components/activity-scheduler'
import { WeatherDashboard } from './components/weather-dashboard'
import DisplayActivities, {
  FormInputWithId,
} from './components/display-activities/display-activities'

function App() {
  const [activities, setActivities] = useState<FormInputWithId[]>([])
  const [active, setActive] = useState<boolean>(false)
  const [edit, setEdit] = useState<FormInputWithId | null>(null)
  return (
    <div className="bg-[url('./assets/pitch2.jpeg')]  m-0 w-screen h-full md:h-screen">
      <div className="p-8 text-5xl font-bold text-center bg-white ">
        Turf Coach Activity Scheduler
      </div>
      <div className="flex flex-col-reverse items-center gap-8 px-3 mt-16 lg:px-15 lg:items-start lg:justify-between lg:flex-row ">
        {active || edit ? (
          <ActivityScheduler
            defaultValues={edit ?? undefined}
            setterEdit={setEdit}
            setterActive={setActive}
            setters={setActivities}
            activities={activities ?? []}
          />
        ) : (
          <DisplayActivities
            setterActive={setActive}
            editor={setEdit}
            setter={setActivities}
            activities={activities ?? []}
          />
        )}
        <WeatherDashboard />
      </div>
    </div>
  )
}

export default App
