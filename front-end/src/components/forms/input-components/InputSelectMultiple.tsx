import { useState } from "react";

type InputSelectMultipleProps = {
    id: string,
    label: string,
    nameAndValue: { name: string, value: string }, 
    options: any[],
    values: any[],
    color: 'beige' | 'red',
    setValue: (value: any[]) => void,

    // —— Optional props ——
    placeholder?: string,
    required?: boolean,
    disabled?: boolean,
    errorMessage?: string,
}

export default function InputSelectMultiple({ id, label, nameAndValue, options, color, values, setValue, required, disabled, placeholder, errorMessage }: InputSelectMultipleProps) {
    const invertedColor = color === 'beige' ? 'red' : 'beige';
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="flex flex-col gap-2 flex-grow relative">
            { label &&
            <div className="flex justify-between">
                <label
                    htmlFor={id}
                    className="block text-sm font-openSansCondensed text-red"
                >{label} {required ? '*' : ''}</label>
            </div>
            }

            <div
                className={`
                    flex
                    justify-between
                    items-center
                    pr-3
                    gap-4
                    rounded-[8px]
                    bg-${color} 
                    font-normal
                    p-1 
                    relative
                    ${color === 'beige' ? 'border lg:border-2 border-red' : ''}
                    ${ !disabled ? 'cursor-pointer' : 'cursor-not-allowed'}
                `}
                onClick={(ev) => {
                    ev.stopPropagation();
                    if (disabled) return;
                    setShowOptions(!showOptions)
                }}
            >
                {/* Chosen options */}
                <div className={`flex flex-wrap gap-1 items-center ${disabled ? 'opacity-90' : ''}`}>
                    {values.map((option, index) => {
                        return (
                            <div key={`${option[nameAndValue.value]}-${index}`} className={`flex gap-2 bg-${invertedColor} text-${color} py-1 px-2 rounded-[6px]`}>
                                <p>{option[nameAndValue.name]}</p>
                                {!disabled &&
                                    <button
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            if (disabled) return;
                                            const newValue: any = values.filter((_, i) => i !== index);
                                            setValue(newValue);
                                        }}
                                    ><svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.32764L6.65527 0.672363M6.65527 6.32764L1 0.672363" stroke={`rgb(var(--color-${color}))`} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
                                }
                            </div>
                        )
                    })}

                    {!values.length &&
                        <span className={`text-sm font-openSansCondensed text-${invertedColor} opacity-50 ml-2 py-[0.4rem]`}>
                            {placeholder}
                        </span>
                    }
                </div>

                {/* Arrow */}
                {!disabled &&
                    <span className='scale-50 transition-all duration-150' style={{ rotate: showOptions ? '180deg' : '0deg' }}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="21.6895" height="12.959"><path d="M10.6641 12.959C10.9473 12.959 11.2109 12.832 11.4062 12.6172L21.0352 2.58789C21.2207 2.40234 21.3281 2.16797 21.3281 1.89453C21.3281 1.34766 20.9082 0.927734 20.3516 0.927734C20.0977 0.927734 19.8438 1.02539 19.6582 1.20117L10.0684 11.1816L11.2695 11.1816L1.66016 1.20117C1.48438 1.02539 1.24023 0.927734 0.976562 0.927734C0.419922 0.927734 0 1.34766 0 1.89453C0 2.16797 0.117188 2.40234 0.292969 2.59766L9.92188 12.627C10.1367 12.832 10.3809 12.959 10.6641 12.959Z" fill={`rgb(var(--color-${invertedColor}))`} /></svg>
                    </span>
                }

                {/* Options */}
                <div
                    style={{ display: showOptions ? 'block' : 'none' }}
                    className={`absolute top-[110%] left-0 w-full bg-${color} z-10 rounded-[8px] shadow-sm ${color === 'beige' ? 'border-2 border-red' : ''}`}
                >
                    <div className="p-1 flex flex-col gap-1 overflow-scroll max-h-[20vh]">
                        {options.filter(option => !values.find(value => value[nameAndValue.value] === option[nameAndValue.value])).map((option, index) => {
                            return (
                                <div
                                    key={`${option[nameAndValue.value]}-${index}-add`}
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        if (disabled) return;
                                        const newValue = [...values, { [nameAndValue.name]: option[nameAndValue.name], [nameAndValue.value]: option[nameAndValue.value] }];
                                        setValue(newValue);
                                    }}
                                    className={`flex gap-2 bg-${invertedColor} text-${color} py-1 px-2 rounded-[6px] cursor-pointer hover:opacity-90 transition-all duration-150`}
                                >
                                    <p>{option[nameAndValue.name]}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            {errorMessage &&
                <span className={`text-sm font-openSansCondensed text-red absolute -bottom-6 left-0`}>
                    {errorMessage}
                </span>
            }

        </div>
    )
}