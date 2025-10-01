// pages/index.jsx
import React from "react";
import { motion } from "framer-motion";

/*
  Raw Artistee — Landing page (Next.js)
  - Put this file at: /pages/index.jsx
  - Add meditation audio at: /public/audio/meditation.mp3
  - Replace payment/booking hrefs with your API endpoints later.
*/

const Butterfly = ({ delay = 0, startX = -60, startY = 200 }) => (
  <motion.svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    initial={{ opacity: 0, x: startX, y: startY }}
    animate={{
      opacity: [0, 1, 1, 0],
      x: [startX, startX + 120, startX + 260],
      y: [startY, startY - 30, startY + 30],
      rotate: [0, 12, -12, 0],
    }}
    transition={{ duration: 16, repeat: Infinity, delay }}
    style={{ position: "absolute", pointerEvents: "none" }}
  >
    <g fill="none" stroke="none" transform="translate(0,0)">
      <path
        d="M12 2C9.7 2 7.7 3.5 7 5.7 6.4 7.6 7.1 9.8 8.8 11.2 7.1 12.6 6.4 14.8 7 16.7 7.7 18.9 9.7 20.4 12 20.4s4.3-1.5 5-3.7c.6-1.9-.1-4.1-1.8-5.5 1.7-1.4 2.4-3.6 1.8-5.5C16.3 3.5 14.3 2 12 2z"
        fill="#FFB6C1"
      />
    </g>
  </motion.svg>
);

const Vine = ({ side = "left" }) => {
  const style = {
    position: "absolute",
    top: 0,
    [side]: 0,
    width: "120px",
    height: "100vh",
    pointerEvents: "none",
    opacity: 0.7,
  };
  return (
    <div style={style}>
      <svg viewBox="0 0 200 800" style={{ height: "100%", width: "100%" }}>
        <motion.path
          d="M60 0 C 85 120, 40 220, 60 320 C 85 440, 40 520, 60 680"
          fill="none"
          stroke="#2f7a3a"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0.6, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

const Flower = ({ left = "20%", top = "30%", delay = 0 }) => (
  <motion.div
    style={{
      position: "absolute",
      left,
      top,
      width: 40,
      height: 40,
      pointerEvents: "none",
    }}
    initial={{ scale: 0.6, opacity: 0.5 }}
    animate={{ scale: [0.6, 1.15, 1.0], opacity: [0.5, 1, 0.8] }}
    transition={{ duration: 8, repeat: Infinity, delay }}
  >
    <svg viewBox="0 0 24 24" width="40" height="40">
      <path
        d="M12 2C9.7 6 6 7 4 11c2 4 6 5 8 10 2-5 6-6 8-10-2-4-5.7-5-8-9z"
        fill="#FFB7D1"
      />
    </svg>
  </motion.div>
);

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Vines on both sides */}
      <Vine side="left" />
      <Vine side="right" />

      {/* Butterflies */}
      <Butterfly delay={0} startX={-80} startY={120} />
      <Butterfly delay={5} startX={-40} startY={260} />
      <Butterfly delay={10} startX={0} startY={180} />

      {/* Flowers */}
      <Flower left="12%" top="28%" delay={0} />
      <Flower left="75%" top="40%" delay={3} />
      <Flower left="18%" top="62%" delay={5} />
      <Flower left="72%" top="70%" delay={7} />

      <header style={styles.header}>
        <h1 style={styles.title}>🌱 Raw Artistee</h1>
        <p style={styles.subtitle}>
          Raw vegan recipes, juicing, coaching & mindful meal prep — an enchanted garden of food
          artistry.
        </p>
      </header>

      <main style={styles.main}>
        <section style={styles.playerWrap}>
          <p style={{ marginBottom: 6, color: "#2f6b33" }}>
            Meditation music — click play to relax while browsing
          </p>
          <audio controls style={styles.audio}>
            <source src="/audio/meditation.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>🌿 Recipes Access</h3>
            <p>Preview for 24 hours — $3 • Permanent access — $18.99</p>
            <a href="#" style={styles.button}>
              Buy Access
            </a>
          </div>

          <div style={styles.card}>
            <h3>🍳 Book Meal Prep</h3>
            <p>In-person or Zoom meal prep & consultations — $300</p>
            <a href="#" style={styles.button}>
              Book Now
            </a>
          </div>

          <div style={styles.card}>
            <h3>🥕 Transition Coaching</h3>
            <p>Zoom: $499 (3 months) • In-person intensive: $1000 (3.5 months)</p>
            <a href="#" style={styles.button}>
              Sign Up
            </a>
          </div>

          <div style={styles.card}>
            <h3>📚 E-books & Juicing</h3>
            <p>Downloadable raw vegan & juicing recipe books</p>
            <a href="#" style={styles.button}>
              Get eBooks
            </a>
          </div>
        </section>

        <footer style={styles.footer}>
          <small>© {new Date().getFullYear()} Raw Artistee — All rights reserved</small>
        </footer>
      </main>

      {/* Small inline styles */}
      <style jsx>{`
        /* small mobile-friendly tweaks */
        @media (max-width: 700px) {
          main {
            padding: 18px;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    overflow: "hidden",
    background:
      "linear-gradient(180deg,#eafaf0 0%, #f3fff8 40%, #f9fff9 100%)",
    color: "#183a1f",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
    position: "relative",
  },
  header: {
    textAlign: "center",
    paddingTop: 48,
    paddingBottom: 12,
    zIndex: 10,
  },
  title: {
    margin: 0,
    fontSize: 44,
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 0,
    color: "#2f6b33",
  },
  main: {
    maxWidth: 980,
    margin: "32px auto",
    padding: "24px",
    position: "relative",
    zIndex: 10,
  },
  playerWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    flexDirection: "column",
  },
  audio: {
    width: 380,
    borderRadius: 10,
    boxShadow: "0 6px 18px rgba(22,79,38,0.12)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 18,
  },
  card: {
    background: "rgba(255,255,255,0.88)",
    padding: 18,
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(20,60,30,0.06)",
  },
  button: {
    display: "inline-block",
    marginTop: 12,
    padding: "10px 14px",
    background: "#2f7a3a",
    color: "white",
    textDecoration: "none",
    borderRadius: 8,
  },
  footer: {
    marginTop: 28,
    textAlign: "center",
    color: "#2f6b33",
  },
};
