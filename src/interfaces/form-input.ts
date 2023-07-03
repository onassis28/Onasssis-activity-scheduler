import {
  ActivitiesEnum,
  PerformersEnum,
  PitchEnum,
} from '../components/activity-scheduler/activity-scheduler'

export interface FormInput {
  performerName: PerformersEnum
  activities: ActivitiesEnum
  pitch: PitchEnum
  date: Date
  time: string
}

export type FormInputWithId = FormInput & { id: string }
