type InputTextProps = {
    id?: string,
    name: string,
    label: string,
    color: 'beige' | 'red',
    textColor?: 'beige' | 'red',

    // —— Optional props ——
    type?: 'text' | 'email' | 'password',
    placeholder?: string,
    value?: string,
    setValue?: (value: string) => void,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    disabled?: boolean,
    readOnly?: boolean,
    maxLength?: number,
    minLength?: number,
    pattern?: string,
    errorMessage?: string,
}

export default function InputText({ id, name, label, color, textColor, type = "text", placeholder, value, setValue, onChange, required, disabled, readOnly, maxLength, minLength, pattern, errorMessage }: InputTextProps) {
    const invertedColor = color === 'beige' ? 'red' : 'beige';
    const textColorValue = textColor || color;
    const count = value?.length;

    return (
        <div className="flex flex-col gap-2 w-full">
            { (label || maxLength || minLength) && (
                <div className="flex justify-between">
                    <label
                        htmlFor={id}
                        className={`block text-sm font-openSansCondensed text-${textColorValue}`}
                    >{label} {required ? '*' : ''}</label>

                    {maxLength && !minLength &&
                        <span className={`text-sm font-openSansCondensed text-${textColorValue}`}>
                            {count === undefined ? maxLength : maxLength - count}
                        </span>
                    }

                    {minLength && !maxLength &&
                        <span className={`text-sm font-openSansCondensed text-${textColorValue}`}>
                            {count === undefined ? minLength : (count < minLength ? -minLength + count : '')}
                        </span>
                    }

                    {minLength && maxLength &&
                        <span className={`text-sm font-openSansCondensed text-${textColorValue}`}>
                            {count === undefined ? `${minLength}/${maxLength}` : (count < minLength ? -minLength + count : maxLength - count)}
                        </span>
                    }
                </div>
            )}

            <input
                id={id}
                name={name}
                type={type}
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
                pattern={pattern}
                className={`
                    w-full 
                    py-2 
                    px-3
                    rounded-[8px]
                    bg-${color}
                    text-${invertedColor}
                    font-normal
                    ${color === 'beige' ? 'border lg:border-2 border-red' : ''}

                    focus:outline-none
                    placeholder-text-${invertedColor}
                    placeholder-opacity-50
                `}
            />

            {errorMessage &&
                <span className={`text-sm font-openSansCondensed text-${textColorValue}`}>
                    {errorMessage}
                </span>
            }
        </div>
    )
}