import { FormInput } from '../../interfaces'
import Activity from './activity'

export type FormInputWithId = FormInput & { id: string }

interface DisplayActivitiesProps {
  activities: FormInputWithId[]
  setter: React.Dispatch<React.SetStateAction<FormInputWithId[]>>
  editor: React.Dispatch<React.SetStateAction<FormInputWithId | null>>
  setterActive: React.Dispatch<React.SetStateAction<boolean>>
}

const DisplayActivities = ({
  activities,
  editor,
  setter,
  setterActive,
}: DisplayActivitiesProps) => {
  const activityList = activities.map((activity) => {
    return (
      <Activity
        key={activity.id}
        setterActivities={setter}
        setterEditActivity={editor}
        performerName={activity.performerName}
        date={activity.date}
        activities={activity.activities}
        time={activity.time}
        pitch={activity.pitch}
        id={activity.id}
        allActivities={activities}
      />
    )
  })
  return (
    <div className="bg-white md:ml-8 w-full md:w-[60%] rounded-2xl  p-8 mt-8">
      <h1 className="mb-8 text-3xl font-bold">Activities</h1>
      {activities.length === 0 ? (
        <div className="m-3 text-3xl font-medium bg-white">No activities scheduled</div>
      ) : (
        activityList
      )}
      <button
        className="px-4 py-2 mt-8 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        onClick={() => setterActive(true)}
      >
        Add Activity
      </button>
    </div>
  )
}

export default DisplayActivities