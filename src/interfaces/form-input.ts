import { ActivitiesEnum, PitchEnum } from '../components/activity-scheduler/activity-scheduler'

export interface FormInput {
  performerName: string
  activities: ActivitiesEnum
  pitch: PitchEnum
  date: Date
  time: string
}

export type FormInputWithId = FormInput & { id: string }
