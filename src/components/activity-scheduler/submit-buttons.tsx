import { FormInput } from '../../interfaces'
import { FormInputWithId } from '../display-activities/display-activities'

interface SubmitButtonsProps {
  defaultValues?: FormInput
  setterActive: React.Dispatch<React.SetStateAction<boolean>>
  error: boolean
  setterError: React.Dispatch<React.SetStateAction<boolean>>
  setterEdit: React.Dispatch<React.SetStateAction<FormInputWithId | null>>
}

const SubmitButtons = ({
  defaultValues,
  setterActive,
  error,
  setterError,
  setterEdit,
}: SubmitButtonsProps) => {
  return (
    <>
      <input
        className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        type="submit"
        value={defaultValues ? 'Edit Activity' : 'Add Activity'}
      />
      {error && (
        <div className="font-medium text-red-500">
          Only one activity can be done at the pitch at this time, please reschedule
        </div>
      )}
      <button
        className="px-4 py-2 font-medium text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
        onClick={() => {
          setterActive(false)
          setterError(false)
          setterEdit(null)
        }}
      >
        Cancel
      </button>
    </>
  )
}

export default SubmitButtons
