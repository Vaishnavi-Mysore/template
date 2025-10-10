import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { saveForm } from '../store/slices/formSlice'
import { Input, Button, Card } from '@aegov/design-system'

type FormValues = {
  name: string
  date: string
}

const schema = yup.object({
  name: yup.string().trim().required('Name is required'),
  date: yup
    .string()
    .required('Date is required')
    .test('is-valid-date', 'Date is invalid', (val) => {
      if (!val) return false
      const d = Date.parse(val)
      return !isNaN(d)
    }),
})

export default function FormPage() {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', date: '' },
  })

  const onSubmit = (data: FormValues) => {
  const dateObj = typeof data.date === 'string' ? new Date(data.date) : data.date
  const payload = { name: data.name, date: format(dateObj, 'yyyy-MM-dd') }
    dispatch(saveForm(payload))
    alert('Saved: ' + JSON.stringify(payload))
  }

  return (
    <div className="container">
      <Card>
        <div style={{ padding: 8 }}>
          <h2>Sample Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: 12 }}>
              <Input {...register('name')} placeholder="Name" />
              {errors.name && <p className="error">{String(errors.name?.message)}</p>}
            </div>

            <div style={{ marginBottom: 12 }}>
              <Input {...register('date')} type="date" />
              {errors.date && <p className="error">{String(errors.date?.message)}</p>}
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
