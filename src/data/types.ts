export type Inputs = {
  addresses: string[]
  age: number
  output_index: number
  output_value: number
  prev_has: string
  script_type: string
  sequence: number
  witness: string[]
}[]

export type Outputs = {
  addresses: string[]
  script: string
  script_type: string
  value: number
}[]

export type TransactionData = {
  addresses: string[]
  block_hash: string
  block_height: number
  block_index: number
  confidence: number
  confirmations: number
  confirmed: string
  double_spend: boolean
  fees: number
  hash: string
  inputs: Inputs[]
  opt_in_rbf: true
  outputs: Outputs[]
  preference: string
  received: string
  relayed_by: string
  size: number
  total: number
  ver: number
  vin_sz: number
  vout_sz: number
  vsize: number
}[]
