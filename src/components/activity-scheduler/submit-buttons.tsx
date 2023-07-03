import { FormInput, FormInputWithId } from '../../interfaces'

interface SubmitButtonsProps {
  defaultValues?: FormInput
  setterIsSchedulerActive: React.Dispatch<React.SetStateAction<boolean>>
  error: boolean
  setterError: React.Dispatch<React.SetStateAction<boolean>>
  setterFormValuesToEdit: React.Dispatch<React.SetStateAction<FormInputWithId | null>>
}

const SubmitButtons = ({
  defaultValues,
  setterIsSchedulerActive,
  error,
  setterError,
  setterFormValuesToEdit,
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
          setterIsSchedulerActive(false)
          setterError(false)
          setterFormValuesToEdit(null)
        }}
      >
        Cancel
      </button>
    </>
  )
}

export default SubmitButtons
