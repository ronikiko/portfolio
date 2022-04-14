import React from 'react'
import { Globalstyle } from '../styles/Globslstyle'
import Header from './Header'

function Layout({ children }) {
    return (
        <main className='main'>
            <Globalstyle />
            <Header />
            {children}
        </main>
    )
}

export default Layout
