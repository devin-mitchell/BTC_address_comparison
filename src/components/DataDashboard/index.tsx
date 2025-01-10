import { findSharedTransactions } from "../../data"
import { TransactionData } from "../../data/types"
import { InfoCard } from "../InfoCard"
import { TransactionList } from "../TransactionList"
import { fmtBtc } from "../../util/formatting"

type Props = {
  transactions: TransactionData
  address1: string
  address2: string
}

export function DataDashboard({ transactions, address1, address2 }: Props) {
  const {
    filteredTxns,
    totalSum,
    numTxns,
    numOfConfirmed
  } = findSharedTransactions(address1, address2, transactions)

  return (
    <div className="flex flex-col w-full mt-8 gap-8">
      <div className="flex justify-around w-full flex-wrap">
        <InfoCard title="Total Exchanged" value={fmtBtc(totalSum).toString()} />
        <InfoCard title="Avg. Transaction" value={(fmtBtc(totalSum) / numTxns).toFixed(7).toString()} />
        <InfoCard title="Confirmed" value={`${numOfConfirmed}/${numTxns}`} />
      </div>
      <TransactionList transactions={filteredTxns} />
    </div>
  )

}
