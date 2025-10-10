import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FormState = {
  name?: string
  date?: string
}

const initialState: FormState = {}

const slice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveForm(state, action: PayloadAction<FormState>) {
      return { ...state, ...action.payload }
    },
  },
})

export const { saveForm } = slice.actions
export default slice.reducer
