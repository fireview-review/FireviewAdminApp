
import { Poppins, Bakbak_One } from 'next/font/google'
import "/public/assets/css/style.css"
import "/public/assets/css/responsive.css"

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--poppins",
    display: 'swap',
})
const bakbak = Bakbak_One({
    weight: ['400'],
    subsets: ['latin'],
    variable: "--bakbak",
    display: 'swap',
})

export const metadata = {
    title: 'Fireview | Fire Safety',
    description: 'בדיקות בטיחות אש',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${bakbak.variable} body header-fixed`}>{children}</body>
        </html>
    )
}
// --poppins: var(--poppins);
// --bakbak: var(--bakbak)