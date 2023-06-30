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
    <>
      <div className="bg-blue-200 mt-6">Turf Coach Activity Scheduler</div>
      {active || edit ? (
        <ActivityScheduler
          defaultValues={edit}
          setterEdit={setEdit}
          setterActive={setActive}
          setters={setActivities}
        />
      ) : (
        <>
          <button onClick={() => setActive(true)}>Add Activity</button>

          <DisplayActivities editor={setEdit} setter={setActivities} activities={activities} />
        </>
      )}
    </>
  )
}

export default App
