import { useState } from 'react'
import { FaBitcoin } from 'react-icons/fa'
import { AddressInput } from './components/AddressInput'

type FormValues = {
  btcAddress1?: string
  btcAddress2?: string
}

function App() {
  const [formValues, setFormValues] = useState<FormValues>({ btcAddress1: '', btcAddress2: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("SUBMIT: ", e)
  }

  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-start">
      <form onSubmit={handleSubmit} className="bg-gray-100 w-full rounded px-2 py-4 flex flex-col items-center gap-4">
        <AddressInput
          value={formValues?.btcAddress1}
          onChange={handleChange}
          inputName="btcAddress1"
          labelText="BTC Address 1"
        />
        <AddressInput
          value={formValues?.btcAddress2}
          onChange={handleChange}
          inputName="btcAddress2"
          labelText="BTC Address 2"
        />
        <button type='submit' className="bg-blue-500 rounded px-4 py-2" >Submit</button>
      </form>
    </main>
  )
}

export default App
