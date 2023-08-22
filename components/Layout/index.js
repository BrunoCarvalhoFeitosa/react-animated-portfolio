import React, { Fragment } from "react"
import Head from "next/head"
import { Sora } from "@next/font/google"
import Nav from "../Nav"
import Header from "../Header"
import TopLeftImage from "../TopLeftImage"

const sora = Sora ({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <meta name="author" content="Bruno Carvaho Feitosa" />
                <meta name="description" content="Portfólio pessoal de Bruno Carvalho Feitosa, desenvolvedor front-end" />
                <meta name="keywords" content="Portfólio pessoal, Bruno Carvalho Feitosa, desenvolvedor, front-end" />
                <meta name="theme-color" content="#F13024" />
                <link rel="icon" href="/fav.png" />
                <title>Portfólio Bruno Carvalho Feitosa</title>
            </Head>
            <div className={`page bg-black text-white ${sora.variable} font-sora relative`}>
                <TopLeftImage />
                <Nav />
                <Header />
                {children}
            </div>
        </Fragment>
    )
}

export default Layout