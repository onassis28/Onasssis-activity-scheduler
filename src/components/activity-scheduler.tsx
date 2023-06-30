import { useForm, SubmitHandler } from 'react-hook-form'
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

interface IFormInput {
  performerName: string
  activities: ActivitiesEnum
  pitch: PitchEnum
  date: Date
  time: string
}

const ActivityScheduler = () => {
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      performerName: '',
      activities: ActivitiesEnum.mowing,
      pitch: PitchEnum.pitch1,
      date: new Date(),
      time: '00:00',
    },
  })
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form
      className="flex p-8 flex-col max-w-[40%] space-y-4 bg-gray-100 rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="text-lg font-medium">Performer</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="User Name"
        {...register('performerName')}
      />

      <label className="text-lg font-medium">Date</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="date"
        {...register('date')}
      />

      <label className="text-lg font-medium">Time</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="time"
        {...register('time')}
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

      <input
        className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        type="submit"
        value="Add Activity"
      />
    </form>
  )
}

export default ActivityScheduler
