import { useState } from 'react'
import './App.css'
import ActivityScheduler, { IFormInput } from './components/activity-scheduler'
import DisplayActivities from './components/display-activities'

type IFormsInputs = IFormInput & { id: string }
function App() {
  const [activities, setActivities] = useState<IFormsInputs[]>([])
  const [active, setActive] = useState<boolean>(false)
  const [edit, setEdit] = useState<IFormsInputs | null>(null)
  console.log(edit)
  return (
    <div className="bg-[url('./assets/pitch2.jpeg')] m-0 w-screen h-screen">
      <div className="bg-white p-8 text-5xl font-bold text-center ">
        Turf Coach Activity Scheduler
      </div>
      {active || edit ? (
        <ActivityScheduler
          defaultValues={edit}
          setterEdit={setEdit}
          setterActive={setActive}
          setters={setActivities}
        />
      ) : (
        <>
          <DisplayActivities
            setterActive={setActive}
            editor={setEdit}
            setter={setActivities}
            activities={activities}
          />
          {/* <button
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
            onClick={() => setActive(true)}
          >
            Add Activity
          </button> */}
        </>
      )}
    </div>
  )
}

export default App
