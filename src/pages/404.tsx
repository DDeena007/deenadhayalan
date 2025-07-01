import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const bgStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 24,
  boxShadow: "0 8px 32px rgba(60,60,120,0.12)",
  padding: 48,
  maxWidth: 420,
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
const emojiStyle: React.CSSProperties = {
  fontSize: 64,
  marginBottom: 16,
  animation: "bounce 1.2s infinite alternate",
}
const headingStyle: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 800,
  color: "#6366f1",
  margin: "0 0 12px 0",
}
const textStyle: React.CSSProperties = {
  fontSize: 18,
  color: "#374151",
  marginBottom: 32,
}
const homeBtn: React.CSSProperties = {
  background: "#6366f1",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 32px",
  fontSize: 18,
  fontWeight: 600,
  textDecoration: "none",
  boxShadow: "0 2px 8px rgba(60,60,120,0.10)",
  transition: "background 0.2s, color 0.2s",
  cursor: "pointer",
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div style={bgStyle}>
      <main style={cardStyle}>
        <span style={emojiStyle} role="img" aria-label="Lost">😕</span>
        <div style={headingStyle}>404 - Not Found</div>
        <div style={textStyle}>Sorry, we couldn’t find what you were looking for.<br/>Let’s get you back home!</div>
        <Link to="/" style={homeBtn}>Go Home</Link>
      </main>
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-16px); }
        }
      `}</style>
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
