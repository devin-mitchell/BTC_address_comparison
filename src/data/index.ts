import { TransactionData } from "./types"

const API_URL = "https://api.blockcypher.com/v1/btc/main"

export const fetchTransactionHistory = async (address: string) => {
  const url = `${API_URL}/addrs/${address}/full`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.text}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log("Error fetching transaction history: ", error)
  }
}

export const findSharedTransactions = (
  address1: string,
  address2: string,
  transactions: TransactionData
) => {
  let totalSum = 0
  let numOfConfirmed = 0
  const res: TransactionData = []
  const txnSet = new Set()

  transactions.forEach(txn => {
    if (
      !txnSet.has(txn.hash) &&
      txn.addresses.includes(address1) &&
      txn.addresses.includes(address2)
    ) {
      totalSum += txn.total
      txn.confirmed ? numOfConfirmed += 1 : null
      res.push(txn)
    }
    txnSet.add(txn.hash)
  })

  return { filteredTxns: res, totalSum, numTxns: res.length, numOfConfirmed }
}
