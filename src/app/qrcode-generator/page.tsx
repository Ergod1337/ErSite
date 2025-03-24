'use client';

import QrCodeWithLogo from 'qrcode-with-logos';
import { useState } from 'react';
import QRCode from 'qrcode';

import EButton from '@/components/ui/EButton';
import EInput from '@/components/ui/EInput';

export default function QRCodeGenerator() {
    const [text, setText] = useState('');
    const [src, setSrc] = useState('');

    const QRCodeGenerator = () => {
        QRCode.toDataURL(text, {errorCorrectionLevel: 'H'}).then(setSrc)
    };
    
    const QRCodeSaver = () => {
        const qrcode = new QrCodeWithLogo({
            content: text,
            nodeQrCodeOptions: {
                errorCorrectionLevel: 'H'
            }
        })
        return qrcode.downloadImage('qr_'+text+'.png')
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <EInput
                type={text}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id='image' src={src} alt={''}/>

            <EButton onClick={QRCodeGenerator} className='m-2'>
                Generate QR Code
            </EButton>
            <EButton onClick={QRCodeSaver}>
                Save QR Code
            </EButton>
        </div>
    );
};
