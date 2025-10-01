# Raw Artistee Site — Enchanted Garden Theme

This update changes the name/branding from **Vegan Chef Site** to **Raw Artistee** throughout the design.

---

## RawArtisteeSite.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Butterfly SVG component
const Butterfly = ({ delay, x, y }) => (
  <motion.svg
    initial={{ opacity: 0, x: -50, y: y }}
    animate={{
      opacity: [0, 1, 1, 0],
      x: [x, x + 200, x + 400],
      y: [y, y - 30, y + 20],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ duration: 20, repeat: Infinity, delay }}
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="pink"
    className="absolute"
  >
    <path d="M12 2C10 6 4 8 2 12c2 4 8 6 10 10 2-4 8-6 10-10-2-4-8-6-10-10z" />
  </motion.svg>
);

// Flowing vine component
const Vine = ({ side }) => (
  <motion.div
    className={`absolute ${side}-0 top-0 h-full w-24 pointer-events-none`}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.4, 0.8, 0.4] }}
    transition={{ duration: 6, repeat: Infinity }}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 600"
      className="h-full w-full text-green-700 opacity-70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <motion.path
        d="M100 0 C 120 100, 80 200, 100 300 C 120 400, 80 500, 100 600"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
    </motion.svg>
  </motion.div>
);

export default function RawArtisteeSite() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-green-200 via-green-100 to-green-50 text-gray-800">
      {/* Flowing vines */}
      <Vine side="left" />
      <Vine side="right" />

      {/* Floating butterflies */}
      <Butterfly delay={0} x={0} y={200} />
      <Butterfly delay={5} x={50} y={300} />
      <Butterfly delay={10} x={100} y={150} />

      {/* Garden texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/green-fibers.png')] opacity-20"></div>

      {/* Main content */}
      <div className="relative z-10 p-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-green-900 drop-shadow-md">
          🌱 Raw Artistee
        </h1>
        <p className="mt-4 text-center text-lg text-green-800">
          Recipes, Coaching, Classes & Healing Through Plant-Based Living
        </p>

        {/* Meditation music player */}
        <div className="mt-8 flex justify-center">
          <audio controls autoPlay loop className="rounded-xl shadow-md">
            <source src="/audio/meditation.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Offerings grid */}
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card className="bg-white/80 backdrop-blur-xl border-green-200 shadow-lg hover:shadow-2xl transition">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-900">🌿 Recipes Access</h2>
              <p className="mt-2">View recipes for 24 hours ($3) or get lifetime access ($18.99).</p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Buy Access</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-xl border-green-200 shadow-lg hover:shadow-2xl transition">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-900">🍳 Book Meal Prep</h2>
              <p className="mt-2">In-person or Zoom meal prep & consultations — $300.</p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-xl border-green-200 shadow-lg hover:shadow-2xl transition">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-900">🥕 Transition Coaching</h2>
              <p className="mt-2">Zoom ($499 / 3 months) or In-person ($1000 / 3.5 months).</p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Sign Up</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-xl border-green-200 shadow-lg hover:shadow-2xl transition">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-900">📚 E-books & Juicing</h2>
              <p className="mt-2">Download plant-based recipe and juicing eBooks.</p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Get eBooks</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
```

---

✅ The site is now branded as **Raw Artistee** 🌿 instead of Vegan Chef Site. 

Would you like me to also make the **domain name in the code** default to `rawartistee.com` so when you deploy, it’s already wired for that domain? 🌍
