import { useState } from 'react'
import { AddressInput } from './components/AddressInput'
import { fetchTransactionHistory } from './data'
import { TransactionData } from './data/types'
import { DataDashboard } from './components/DataDashboard'

// Addresses for testing purposes
const ADDRESS_1 = 'bc1p8sga02rgfhl8zg2n8rnxd2ge3wcfzrek0gmm7dq5q4p5y0nfyf2s3a7x66'
const ADDRESS_2 = 'bc1pagxunyktqmjgh7ya8uka35vn65n4emyzgacvzzvcvgz9pt5w94aqjl8nv9'

type FormValues = {
  btcAddress1: string
  btcAddress2: string
}

function App() {
  const [formValues, setFormValues] = useState<FormValues>({ btcAddress1: ADDRESS_1, btcAddress2: ADDRESS_2 })
  const [totalTransactions, setTotalTransactions] = useState<TransactionData>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const [address1Res, address2Res] = await Promise.all([
      fetchTransactionHistory(formValues.btcAddress1),
      fetchTransactionHistory(formValues.btcAddress2)
    ])

    setTotalTransactions([...address1Res.txs, ...address2Res.txs])
  }

  return (
    <main className="flex min-h-screen flex-col px-6 items-center justify-start">
      <form onSubmit={handleSubmit} className="bg-gray-100 pt-8 w-full rounded px-2 py-4 flex flex-col items-center gap-4">
        <h1 className="font-bold text-6xl text-center font-serif mb-4">
          Compare BTC Addresses
        </h1>
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
        <button type='submit' className="mt-4 bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-400" >Search</button>
      </form>
      <DataDashboard
        address1={formValues.btcAddress1}
        address2={formValues.btcAddress2}
        transactions={totalTransactions}
      />
    </main>
  )
}

export default App

