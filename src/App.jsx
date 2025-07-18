import { useState } from "react"

const fragments = [
  "光の中に消えた声",
  "記憶の泡がはじける",
  "まばらな鼓動",
  "沈黙の隙間で",
  "ふと浮かぶ残像"
]

export default function App() {
  const [fragment, setFragment] = useState(null)
  const [fade, setFade] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const handleClick = () => {
    const text = fragments[Math.floor(Math.random() * fragments.length)]
    const x = 10 + Math.random() * 80
    const y = 10 + Math.random() * 80
    setPos({ x, y })
    setFragment(text)
    setFade(false)
    setTimeout(() => setFade(true), 1500)
    setTimeout(() => setFragment(null), 3000)
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #f3f4f6 0%, #c7d2fe 100%)",
        position: "relative"
      }}
      onClick={handleClick}
    >
      {fragment && (
        <div
          style={{
            position: "absolute",
            top: `${pos.y}%`,
            left: `${pos.x}%`,
            color: "#22223b",
            fontSize: "2rem",
            opacity: fade ? 0 : 1,
            transition: "opacity 1.5s"
          }}
        >
          {fragment}
        </div>
      )}
    </div>
  )
}
