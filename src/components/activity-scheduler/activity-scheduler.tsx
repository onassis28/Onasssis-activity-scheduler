import { useForm, SubmitHandler } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import SubmitButtons from './submit-buttons'
import { FormInput, FormInputWithId } from '../../interfaces'

export enum ActivitiesEnum {
  mowing = 'Mowing',
  fertilisation = 'Fertilisation',
  irrigation = 'Irrigation',
  aeration = 'Aeration',
}

const inputCSS =
  'px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'

export enum PitchEnum {
  pitch1 = 'Pitch 1',
  pitch2 = 'Pitch 2',
  pitch3 = 'Pitch 3',
}

interface ActivitySchedulerProps {
  setterActivities: React.Dispatch<React.SetStateAction<FormInputWithId[]>>
  setterIsSchedulerActive: React.Dispatch<React.SetStateAction<boolean>>
  defaultValues?: FormInputWithId
  setterFormValuesToEdit: React.Dispatch<React.SetStateAction<FormInputWithId | null>>
  activities: FormInputWithId[]
}
export const ActivityScheduler = ({
  setterActivities,
  setterFormValuesToEdit,
  setterIsSchedulerActive,
  defaultValues,
  activities,
}: ActivitySchedulerProps) => {
  const [error, setError] = useState<boolean>(false)
  const ids = nanoid()
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: defaultValues,
  })
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const isActivity = activities.find(
      (item) => item.pitch === data.pitch && item.date === data.date && item.time === data.time,
    )
    if (isActivity) {
      setError(true)
    } else {
      setterActivities((prev) => {
        const newData = { ...data, id: ids }
        return [...prev, newData]
      })
      setterIsSchedulerActive(false)
      setError(false)
    }
  }
  const onEditSubmit: SubmitHandler<FormInputWithId> = (data) => {
    const isActivity = activities.find(
      (item) => item.pitch === data.pitch && item.date === data.date && item.time === data.time,
    )
    if (isActivity) {
      setError(true)
    } else {
      setterActivities((prev) => {
        const newData = [...prev].filter((item) => item.id !== data.id)
        const newData2 = [...newData, data]
        return newData2
      })

      setterIsSchedulerActive(false)
      setterFormValuesToEdit(null)
      setError(false)
    }
  }
  const rightOnSubmit: any = defaultValues ? onEditSubmit : onSubmit
  return (
    <form
      className="flex p-8 lg:w-[60%] w-full  flex-col space-y-4 bg-gray-100 rounded-2xl shadow-md"
      onSubmit={handleSubmit(rightOnSubmit)}
    >
      <label className="text-lg font-medium">Performer</label>
      <input
        className={inputCSS}
        type="text"
        placeholder="User Name"
        {...register('performerName')}
        required
      />

      <label className="text-lg font-medium">Date</label>
      <input className={inputCSS} type="date" {...register('date')} required />

      <label className="text-lg font-medium">Time</label>
      <input className={inputCSS} type="time" {...register('time')} required />

      <label className="text-lg font-medium">Activity Selection</label>
      <select className={inputCSS} {...register('activities')}>
        {Object.keys(ActivitiesEnum).map((key) => (
          <option key={key} value={ActivitiesEnum[key as keyof typeof ActivitiesEnum]}>
            {ActivitiesEnum[key as keyof typeof ActivitiesEnum]}
          </option>
        ))}
      </select>

      <label className="text-lg font-medium">Pitch Selection</label>
      <select className={inputCSS} {...register('pitch')}>
        {Object.keys(PitchEnum).map((key) => (
          <option key={key} value={PitchEnum[key as keyof typeof PitchEnum]}>
            {PitchEnum[key as keyof typeof PitchEnum]}
          </option>
        ))}
      </select>
      <SubmitButtons
        defaultValues={defaultValues}
        setterFormValuesToEdit={setterFormValuesToEdit}
        setterIsSchedulerActive={setterIsSchedulerActive}
        error={error}
        setterError={setError}
      />
    </form>
  )
}

export default ActivityScheduler
