import { useForm, SubmitHandler } from 'react-hook-form'
import { nanoid } from 'nanoid'
enum ActivitiesEnum {
  mowing = 'mowing',
  fertilisation = 'fertilisation',
  irrigation = 'irrigation',
  aeration = 'aeration',
}

enum PitchEnum {
  pitch1 = 'pitch1',
  pitch2 = 'pitch2',
  pitch3 = 'pitch3',
}

export interface IFormInput {
  performerName: string
  activities: ActivitiesEnum
  pitch: PitchEnum
  date: Date
  time: string
}
interface ActivitySchedulerProps {
  setters: (prev: IFormInput[]) => IFormInput[]
  setterActive: React.Dispatch<React.SetStateAction<boolean>>
  defaultValues?: IFormInput
  setterEdit?: React.Dispatch<React.SetStateAction<IFormInput | null>>
}
const ActivityScheduler = ({
  setters,
  setterEdit,
  setterActive,
  defaultValues,
}: ActivitySchedulerProps) => {
  const ids = nanoid()
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: defaultValues,
  })
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setters((prev: IFormInput[]): IFormInput[] => {
      const newData = { ...data, id: ids }
      return [...prev, newData]
    })
    setterActive(false)
  }
  const onSubmit2: SubmitHandler<IFormInput> = (data) => {
    setters((prev: IFormInput[]): IFormInput[] => {
      const newData = [...prev].filter((item) => item.id !== data.id)
      const newData2 = [...newData, data]
      return newData2
    })

    setterActive(false)
    setterEdit(null)
  }
  const whichSubmit = defaultValues ? onSubmit2 : onSubmit
  return (
    <div className="flex flex-row justify-center  mt-10 items-center">
      <form
        className="flex p-8 md:w-[40%] w-full  flex-col space-y-4 bg-gray-100 rounded-lg shadow-md"
        onSubmit={handleSubmit(whichSubmit)}
      >
        <label className="text-lg font-medium">Performer</label>
        <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="User Name"
          {...register('performerName')}
          required
        />

        <label className="text-lg font-medium">Date</label>
        <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          {...register('date')}
          required
        />

        <label className="text-lg font-medium">Time</label>
        <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="time"
          {...register('time')}
          required
        />

        <label className="text-lg font-medium">Activity Selection</label>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('activities')}
        >
          <option value="Mowing">Mowing</option>
          <option value="Fertilisation">Fertilisation</option>
          <option value="Irrigation">Irrigation</option>
          <option value="Aeration">Aeration</option>
        </select>

        <label className="text-lg font-medium">Pitch Selection</label>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('pitch')}
        >
          <option value="Pitch 1">Pitch 1</option>
          <option value="Pitch 2">Pitch 2</option>
          <option value="Pitch 3">Pitch 3</option>
        </select>

        {defaultValues ? (
          <input
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
            type="submit"
            value="Edit Activity"
          />
        ) : (
          <input
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
            type="submit"
            value="Add Activity"
          />
        )}
        <button
          className="px-4 py-2 font-medium text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
          onClick={() => {
            setterActive(false)
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default ActivityScheduler
