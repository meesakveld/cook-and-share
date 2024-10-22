type InputTextAreaProps = {
    id: string,
    label: string,
    color: 'beige' | 'red',

    // —— Optional props ——
    placeholder?: string,
    value?: string,
    setValue?: (value: string) => void,
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    required?: boolean,
    disabled?: boolean,
    readOnly?: boolean,
    maxLength?: number,
    minLength?: number,
    rows?: number,
    errorMessage?: string,
}

export default function InputTextArea({ id, label, color, placeholder, value, setValue, onChange, required, disabled, readOnly, maxLength, minLength, rows, errorMessage }: InputTextAreaProps) {
    const invertedColor = color === 'beige' ? 'red' : 'beige';
    const count = value?.length;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <label
                    htmlFor={id}
                    className="block text-sm font-openSansCondensed text-red"
                >{label} {required ? '*' : ''}</label>

                {maxLength && !minLength &&
                    <span className={`text-sm font-openSansCondensed text-red`}>
                        {count === undefined ? maxLength : maxLength - count}
                    </span>
                }

                {minLength && !maxLength &&
                    <span className={`text-sm font-openSansCondensed text-red`}>
                        {count === undefined ? minLength : (count < minLength ? -minLength + count : '')}
                    </span>
                }

                {minLength && maxLength &&
                    <span className={`text-sm font-openSansCondensed text-red`}>
                        {count === undefined ? `${minLength}/${maxLength}` : (count < minLength ? -minLength + count : maxLength - count)}
                    </span>
                }
            </div>

            <textarea
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(ev) => {
                    setValue && setValue(ev.target.value);
                    onChange && onChange(ev);
                }}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
                minLength={minLength}
                rows={rows}
                className={`
                    w-full 
                    h-full
                    py-2 
                    px-3
                    rounded-[8px]
                    bg-${color}
                    text-${invertedColor}
                    font-normal
                    ${color === 'beige' ? 'border-2 border-red' : ''}

                    focus:outline-none
                    placeholder-text-${invertedColor}
                    placeholder-opacity-50
                `}
            />

            {errorMessage &&
                <span className={`text-sm font-openSansCondensed text-red`}>
                    {errorMessage}
                </span>
            }
        </div>
    )
}