type InputSelectOneFromMultipleProps = {
    id: string,
    label: string,
    nameAndValue: { name: string, value: string },
    value: any,
    options: any[],
    color: 'red' | 'beige',
    setValue?: (value: any) => void,

    // —— Optional props ——
    required?: boolean,
    errorMessage?: string,
}

export default function InputSelectOneFromMultiple({ id, label, nameAndValue, options, value, color, setValue, required, errorMessage }: InputSelectOneFromMultipleProps) {
    const invertedColor = color === 'beige' ? 'red' : 'beige';
    const checkIfSelected = (option: any) => {
        return option[nameAndValue.value] === value[nameAndValue.value]
    }

    return (
        <div className="flex flex-col gap-2 flex-grow relative">
            <div className="flex justify-between">
                <label
                    className="block text-sm font-openSansCondensed text-red"
                >{label} {required ? '*' : ''}</label>
            </div>

            <div className={`flex p-1 bg-${color} rounded-[8px] w-fit`}>
                {options.map((option, index) => (
                    <p
                        key={index}
                        className={`py-1 px-3 md:px-4 rounded-[6px] text-center flex flex-col justify-center transition-all duration-300 ${checkIfSelected(option) ? `bg-${invertedColor} opacity-100 text-${color}` : `bg-${color} hover:bg-${invertedColor} hover:text-${color} opacity-50 text-${invertedColor}`}`}
                        onClick={() => {
                            setValue && setValue(option)
                        }}
                    >
                        {option[nameAndValue.name]}
                    </p>
                ))}
            </div>
        </div>
    )
}