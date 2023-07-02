import { FormInput } from '../../interfaces'

interface SubmitButtonsProps {
  defaultValues?: FormInput
  setterActive: React.Dispatch<React.SetStateAction<boolean>>
  error: boolean
}

const SubmitButtons = ({ defaultValues, setterActive, error }: SubmitButtonsProps) => {
  return (
    <>
      <input
        className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        type="submit"
        value={defaultValues ? 'Edit Activity' : 'Add Activity'}
      />
      {error && (
        <div>Only one activity can be done at the pitch at this time, please reschedule</div>
      )}
      <button
        className="px-4 py-2 font-medium text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
        onClick={() => {
          setterActive(false)
        }}
      >
        Cancel
      </button>
    </>
  )
}

export default SubmitButtons
