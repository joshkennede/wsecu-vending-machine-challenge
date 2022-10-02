export interface DefaultResponse {
  id: number,
  exception: object,
  status: number,
  isCanceled: boolean,
  isCompleted: boolean,
  isCompletedSuccessfully: boolean,
  creationOptions: number,
  asyncState: object,
  isFaulted: boolean
}
