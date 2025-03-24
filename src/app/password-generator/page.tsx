'use client';

import { useState } from 'react';

import EButton from '@/components/ui/EButton';
import EInput from '@/components/ui/EInput';

function generatePassword(
        length: number = 8,
        useNumbers: boolean = true,
        useSymbols: boolean = true,
    ) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters: string = letters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;
    let password: string = '';
    for (let i: number = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);

    return (
        <div className='flex flex-col items-center justify-center'>
            <EInput
                type='number'
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
            />
            <div className="flex items-center gap-2">
                <input type="checkbox" checked={useNumbers}
                       onChange={() => setUseNumbers(!useNumbers)}
                       className='w-4 h-4'
                />
                <label>Использовать цифры</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" checked={useSymbols}
                       onChange={() => setUseSymbols(!useSymbols)}
                       className='w-4 h-4'
                />
                <label>Использовать символы</label>
            </div>
            <EButton
                onClick={() => setPassword(generatePassword(length, useNumbers, useSymbols))}>
                Сгенерировать
            </EButton>
            {password && <p className="mt-2 p-1 pl-2 pr-2 border rounded-4xl bg-gray-100 text-center">{password}</p>}
        </div>
    );
}

