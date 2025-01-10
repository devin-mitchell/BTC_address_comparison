import { FaBitcoin } from "react-icons/fa"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputName: string
  labelText: string
}

export function AddressInput({ onChange, value, inputName, labelText, ...props }: InputProps) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={inputName}
        className="flex rounded-l-lg cursor-pointer border-2 border-blue-500 border-r-0 items-center bg-blue-500 text-gray-100 px-3 py-1.5 text-s font-medium text-gray-900"
      >
        {labelText}
      </label>
      <div className="relative flex">
        <input
          {...props}
          onChange={onChange}
          id={inputName}
          name={inputName}
          value={value}
          type="text"
          className="border-2 rounded-r-lg border-gray-900 px-3 py-1.5 pl-8 relative bg-gray-300 text-gray-600 focus:ring-2"
        />
        <FaBitcoin className="absolute text-orange-500 w-5 h-5 top-[10px] left-2 " />
      </div>
    </div>
  )
}

