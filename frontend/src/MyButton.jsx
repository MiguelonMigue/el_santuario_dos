import AboutPage from "./AboutPage"
import { useState } from "react"

export default function MyButton() {
    const [showAbout, setShowAbout] = useState(false)

    if (showAbout) {
        return <AboutPage />
    }
  return (
    <button onClick={() => setShowAbout(true)}>I'm a button</button>
  )
}