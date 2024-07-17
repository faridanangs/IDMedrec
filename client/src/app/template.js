'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export default function Template({ children }) {
    return (
        <>
            {children}
            <ProgressBar
                color='#0F172A'
            />
        </>
    )
}
