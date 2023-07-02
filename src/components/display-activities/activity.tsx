import { AiTwotoneEdit } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'

import { FormInputWithId } from './display-activities'
import { FormInput } from '../../interfaces'

type ActivityProps = FormInput & {
  id: string
  setterActivities: React.Dispatch<React.SetStateAction<FormInputWithId[]>>
  setterEditActivity: React.Dispatch<React.SetStateAction<FormInputWithId | null>>
  allActivities?: FormInputWithId[]
}

const Activity = ({
  id,
  setterActivities,
  setterEditActivity: editor,
  allActivities,
  performerName,
  activities,
  pitch,
  date,
  time,
}: ActivityProps) => {
  const formatDate = new Date(date).toLocaleDateString('de-DE')

  return (
    <div className="flex flex-col md:flex-row overflow-auto gap-8 p-8 shadow-[0_0_20px_4px_rgba(0,0,0,0.12)]  hover:scale-105 hover:duration-300 cursor-pointer  items-center space-x-4 bg-white m-3">
      <span className="text-lg basis-[20%] font-medium">{performerName}</span>
      <span className="text-lg basis-[10%] font-medium">{activities}</span>
      <span className="text-lg basis-[15%]  font-medium">{pitch}</span>
      <span className="text-lg basis-[10%]  font-medium">{formatDate}</span>
      <span className="text-lg basis-[10%]  font-medium">{time}</span>

      <MdDeleteForever
        onClick={() => {
          setterActivities((prev) => {
            return prev.filter((item) => item.id !== id)
          })
        }}
        className="text-2xl text-red-500 cursor-pointer shrink-0"
      />
      <AiTwotoneEdit
        onClick={() => {
          editor(() => {
            return allActivities?.find((item) => item.id === id) || null
          })
        }}
        className="text-2xl cursor-pointer shrink-0 text-black-500"
      />
    </div>
  )
}

export default Activity
