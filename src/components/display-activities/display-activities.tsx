import { FormInputWithId } from '../../interfaces'
import Activity from './activity'

interface DisplayActivitiesProps {
  activities: FormInputWithId[]
  setterActivities: React.Dispatch<React.SetStateAction<FormInputWithId[]>>
  setterFormValuesToEdit: React.Dispatch<React.SetStateAction<FormInputWithId | null>>
  setterIsSchedulerActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const DisplayActivities = ({
  activities,
  setterFormValuesToEdit,
  setterActivities,
  setterIsSchedulerActive,
}: DisplayActivitiesProps) => {
  const activityList = activities.map((activity) => {
    return (
      <Activity
        key={activity.id}
        setterActivities={setterActivities}
        setterEditActivity={setterFormValuesToEdit}
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
    <section className="bg-white w-full lg:w-[70%] rounded-2xl p-8 ">
      <h1 className="mb-8 text-3xl font-bold">Activities</h1>
      {activities.length === 0 ? (
        <div className="text-3xl font-medium bg-white">No activities scheduled</div>
      ) : (
        <div className="max-h-[30rem] w-full lg:p-5 overflow-scroll">{activityList}</div>
      )}
      <button
        className="px-4 py-2 mt-8 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        onClick={() => setterIsSchedulerActive(true)}
      >
        Add Activity
      </button>
    </section>
  )
}

export default DisplayActivities
