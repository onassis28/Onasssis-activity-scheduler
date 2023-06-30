import { IFormInput } from './activity-scheduler'
import { nanoid } from 'nanoid'
import { MdDeleteForever } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'

// interface ActivityProps {
//   performerName: string
//   activities: string
//   pitch: string
//   date: string
//   time: string
// }
type IFormsInputs = IFormInput & {
  id: string
  setter: (prev: (prev: IFormsInputs[]) => IFormsInputs[]) => void
  editor?: React.Dispatch<React.SetStateAction<IFormInput | null>>
  allActivities?: IFormsInputs[]
}

const Activity = ({
  id,
  setter,
  editor,
  allActivities,
  performerName,
  activities,
  pitch,
  date,
  time,
}: IFormsInputs) => {
  const data = new Date(date).toISOString()

  return (
    <div className="flex items-center space-x-4 bg-blue-200 m-3">
      <span className="text-lg font-medium">{performerName}</span>
      <span className="text-lg font-medium">{activities}</span>
      <span className="text-lg font-medium">{pitch}</span>
      <span className="text-lg font-medium">{data}</span>
      <span className="text-lg font-medium">{time}</span>

      <MdDeleteForever
        onClick={() => {
          setter((prev) => {
            return prev.filter((item) => item.id !== id)
          })
        }}
        className="text-2xl text-red-500 cursor-pointer"
      />
      <AiTwotoneEdit
        onClick={() => {
          editor(() => {
            return allActivities?.find((item) => item.id === id) || null
          })
        }}
        className="text-2xl text-black-500 cursor-pointer"
      />
    </div>
  )
}

interface DisplayActivitiesProps {
  activities: IFormsInputs[]
  setter: React.Dispatch<React.SetStateAction<IFormInput[]>>
  editor?: React.Dispatch<React.SetStateAction<IFormInput | null>>
}

const DisplayActivities = ({ activities, editor, setter }: DisplayActivitiesProps) => {
  if (activities.length === 0) {
    return <div className="text-lg bg-blue-200 m-3 font-medium">No activities scheduled</div>
  }

  console.log(activities)
  const activityList = activities.map((activity) => {
    // const newActivity = { ...activity, setter }
    return (
      <Activity
        key={activity.id}
        setter={setter}
        editor={editor}
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
  return <div className=" mt-6">{activityList}</div>
}

export default DisplayActivities
