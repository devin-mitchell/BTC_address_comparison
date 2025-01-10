import { FaBitcoin } from "react-icons/fa"

type Props = {
  title: string
  value: string
}

export function InfoCard({ title, value }: Props) {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-between py-4 px-6  rounded w-56 h-56 bg-gray-100 overflow-y-auto">
      <p className="text-4xl text-center font-bold">{title}</p>
      <p className="text-4xl mb-10 font-bold">{value || ''}</p>
      <FaBitcoin className="text-orange-500 opacity-15 absolute top-0 w-full h-full" />
    </div>
  )
}
