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
        className="mx-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-300 px-3 py-1.5 text-s font-medium text-gray-600"
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
          className=" rounded px-3 py-1.5 pl-8 relative cursor-pointer border-gray-300 bg-gray-300 text-gray-600 focus:ring-2"
        />
        <FaBitcoin className="absolute text-orange-500 w-5 h-5 top-[8px] left-1 " />
      </div>
    </div>
  )
}

