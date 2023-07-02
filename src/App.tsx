import { useState } from 'react'
import './App.css'
import DisplayActivities, {
  FormInputWithId,
} from './components/display-activities/display-activities'
import WeatherDashboard from './components/weather-dashboard/weather-dashboard'
import ActivityScheduler from './components/activity-scheduler/activity-scheduler'

function App() {
  const [activities, setActivities] = useState<FormInputWithId[]>([])
  const [active, setActive] = useState<boolean>(false)
  const [edit, setEdit] = useState<FormInputWithId | null>(null)
  console.log(edit)
  return (
    <div className="bg-[url('./assets/pitch2.jpeg')]  m-0 w-screen h-screen">
      <div className="p-8 text-5xl font-bold text-center bg-white ">
        Turf Coach Activity Scheduler
      </div>
      <div className="flex flex-col gap-8 md:flex-row ">
        {active || edit ? (
          <ActivityScheduler
            defaultValues={edit ?? undefined}
            setterEdit={setEdit}
            setterActive={setActive}
            setters={setActivities}
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
