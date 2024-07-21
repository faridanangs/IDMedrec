'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export default function Template({ children }) {
    return (
        <>
            <ProgressBar color='#001111' />
            {children}
        </>
    )
}
