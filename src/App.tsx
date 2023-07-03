import { useState } from 'react'
import './App.css'
import { ActivityScheduler } from './components/activity-scheduler'
import { WeatherDashboard } from './components/weather-dashboard'
import DisplayActivities from './components/display-activities/display-activities'
import { FormInputWithId } from './interfaces'

function App() {
  const [activities, setActivities] = useState<FormInputWithId[]>([])
  const [isSchedulerActive, setIsSchedulerActive] = useState<boolean>(false)
  const [formValuesToEdit, setFormValuesToEdit] = useState<FormInputWithId | null>(null)
  return (
    <main className="bg-[url('./assets/pitch2.jpeg')]  m-0 w-screen h-full md:h-screen">
      <header className="p-8 text-5xl font-bold text-center bg-white ">
        Turf Coach Activity Scheduler
      </header>
      <div className="flex flex-col-reverse items-center gap-8 px-3 mt-16 lg:px-20 lg:items-start lg:justify-between lg:flex-row ">
        {isSchedulerActive || formValuesToEdit ? (
          <ActivityScheduler
            defaultValues={formValuesToEdit ?? undefined}
            setterFormValuesToEdit={setFormValuesToEdit}
            setterIsSchedulerActive={setIsSchedulerActive}
            setterActivities={setActivities}
            activities={activities ?? []}
          />
        ) : (
          <DisplayActivities
            setterIsSchedulerActive={setIsSchedulerActive}
            setterFormValuesToEdit={setFormValuesToEdit}
            setterActivities={setActivities}
            activities={activities ?? []}
          />
        )}
        <WeatherDashboard />
      </div>
    </main>
  )
}

export default App
