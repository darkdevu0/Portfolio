import React from "react"

import Header from "../components/Header/Header"
import Layout from "../components/Layout/Layout"
import Features from "../components/Features/Features"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Features />
      <Projects />
      <Contact />
    </Layout>
  )
}
