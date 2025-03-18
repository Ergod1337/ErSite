import React from 'react';

export default function EInput(
    {
        type='text',
        value,
        onChange,
        placeholder,
        ...props}:
    {
        type:string | 'text',
        value: string | undefined,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder?: string | undefined}) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={
            `w-full rounded-4xl border px-4 py-2 shadow-sm outline-none transition-all focus:ring-2 bg-gray-700 text-gray-200 border-gray-500 focus:ring-blue-300 focus:border-blue-300`}
            {...props}
        />
    )
}