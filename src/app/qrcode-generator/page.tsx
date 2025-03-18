'use client';

import QrCodeWithLogo from 'qrcode-with-logos';
import React, { useState } from 'react';
import Header from 'next/head';
import QRCode from 'qrcode';

import EButton from '@/components/ui/EButton';
import EInput from '@/components/ui/EInput';

export default function Home() {
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
        <>
            <Header>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Header>

            <main>
                <EInput
                    type={text}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img id='image' src={src} alt={''}/>

                <EButton onClick={QRCodeGenerator}>
                    Generate QR Code
                </EButton>
                <EButton onClick={QRCodeSaver}>
                    Save QR Code
                </EButton>
            </main>
        </>
    );
};
