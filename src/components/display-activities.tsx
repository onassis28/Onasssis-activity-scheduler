import { IFormInput } from './activity-scheduler'
import { MdDeleteForever } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'

type IFormsInputs = IFormInput & {
  id: string
  setter: (prev: (prev: IFormsInputs[]) => IFormsInputs[]) => void
  editor: React.Dispatch<React.SetStateAction<IFormInput | null>>
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
  const data = new Date(date).toLocaleDateString('de-DE')

  return (
    <div
      onClick={() => {
        editor(() => {
          return allActivities?.find((item) => item.id === id) || null
        })
      }}
      className="flex flex-col md:flex-row gap-8 p-8 shadow-[0_0_20px_4px_rgba(0,0,0,0.12)]  hover:scale-105 hover:duration-300 cursor-pointer  items-center space-x-4 bg-white m-3"
    >
      <span className="text-lg basis-[20%] font-medium">{performerName}</span>
      <span className="text-lg basis-[10%] font-medium">{activities}</span>
      <span className="text-lg basis-[15%]  font-medium">{pitch}</span>
      <span className="text-lg basis-[10%]  font-medium">{data}</span>
      <span className="text-lg basis-[10%]  font-medium">{time}</span>

      <MdDeleteForever
        onClick={() => {
          setter((prev) => {
            return prev.filter((item) => item.id !== id)
          })
        }}
        className="text-2xl text-red-500 shrink-0 cursor-pointer"
      />
      <AiTwotoneEdit
        onClick={() => {
          editor(() => {
            return allActivities?.find((item) => item.id === id) || null
          })
        }}
        className="text-2xl shrink-0 text-black-500 cursor-pointer"
      />
    </div>
  )
}

interface DisplayActivitiesProps {
  activities: IFormsInputs[]
  setter: React.Dispatch<React.SetStateAction<IFormInput[]>>
  editor?: React.Dispatch<React.SetStateAction<IFormInput | null>>
  setterActive: React.Dispatch<React.SetStateAction<boolean>>
}

const DisplayActivities = ({
  activities,
  editor,
  setter,
  setterActive,
}: DisplayActivitiesProps) => {
  //   if (activities.length === 0) {
  //     return (
  //       <div className="bg-white ml-5 w-[60%] mt-8 p-8">
  //         <div className="text-3xl  bg-white m-3 font-medium">No activities scheduled</div>
  //         <button
  //           className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
  //           // onClick={() => setActive(true)}
  //         >
  //           Add Activity
  //         </button>
  //       </div>
  //     )
  //   }

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
  return (
    <div className="bg-white md:ml-5 w-full md:w-[60%] rounded-2xl  p-8 mt-8">
      <h1 className="text-3xl font-bold mb-8">Activities</h1>
      {activities.length === 0 ? (
        <div className="text-3xl  bg-white m-3 font-medium">No activities scheduled</div>
      ) : (
        activityList
      )}
      <button
        className="px-4 mt-8 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        onClick={() => setterActive(true)}
      >
        Add Activity
      </button>
    </div>
  )
}

export default DisplayActivities
