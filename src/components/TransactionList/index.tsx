import { TransactionData } from "../../data/types"
import { fmtBtc, truncate } from "../../util/formatting"

type Props = {
  transactions: TransactionData
}

export function TransactionList({ transactions }: Props) {

  return (
    <div className="relative flex flex-col items-center py-4 px-6 rounded w-full min-h-96 mb-12 bg-gray-100 overflow-y-auto">
      <h2 className="text-gray-900 text-4xl mb-2 font-bold">Shared Transactions: {transactions.length}</h2>
      <div className="flex gap-4 text-xs mb-4" >
        <div className="flex items-center justify-end gap-2">
          <p>Confirmed</p>
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex items-center justify-end gap-2">
          <p>Pending</p>
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </div>
      <ol className="flex flex-col items-start  w-full max-h-screen ">
        {transactions.map(txn => {
          return (
            <li key={txn.hash} className={`flex w-full gap-4 px-2 items-center py-1 border-b-2 border-gray-900 justify-start`}>
              <div className={`w-4 h-4 rounded-full ${txn.confirmed ? 'bg-green-500' : 'bg-red-500'}`} />
              <div className="flex justify-between w-full">
                <div><span className="font-bold">Txn Hash: </span>{truncate(txn.hash, 15)}</div>
                <div><span className="font-bold">BTC: </span>{fmtBtc(txn.total)}</div>
              </div>
            </li >
          )
        })}
      </ol >
    </div >
  )
}
