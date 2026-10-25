// Theme definitions for House Booth. Each theme only changes words, colours and effects.
// The camera, filters, countdown and strip engine are shared.
window.THEMES = {
  diwali: {
    name: "Diwali",
    display: "शुभ दीपावली",
    displayFont: '"Yatra One","Kohinoor Devanagari","Noto Sans Devanagari",serif',
    eyebrow: "Diwali {year}",
    title: "Happy Diwali {year}!",
    tagline: "Diyas on, filters off",
    lines: ["Diyas on, filters off", "Warning: may contain sparkle", "Your relatives will want this photo", "Mithai first, photos second", "Lit, literally", "Powered by chai and good lighting", "No firecrackers were harmed", "Four shots, zero retakes (fine, one)"],
    poses: ["Smile like you got the last gulab jamun", "Bollywood villain. Go.", "Shocked by the electricity bill", "Group hug, no excuses", "Serious passport photo", "Pretend the phuljhari just went out", "Point at the richest person here", "Aunty-approved pose", "Everyone look at a different diya", "Dance move, freeze!", "The face you make at a cracker that won't light", "Biggest smile in the room"],
    colors: { bg: "#150B3D", bg2: "#2B0F5C", bg3: "#0A1C36", accent: "#FFA62B", accent2: "#F0407A", teal: "#2BC4B6", gold: "#F6D27A", cream: "#FFF1DA", muted: "#B7A8E3", ink: "#2B1500" },
    fx: ["stars", "fireworks", "diyas", "petals", "rangoli"],
    filters: ["technicolor", "vintage"]
  },
  party: {
    name: "House Party",
    display: "House Party",
    displayFont: '"Bowlby One",Impact,sans-serif',
    eyebrow: "Tonight",
    title: "House Party {year}",
    tagline: "What happens here ends up on a strip",
    lines: ["What happens here ends up on a strip", "Four shots, one strip, zero dignity", "The kitchen is not the dance floor. Or is it", "Hydrate, then pose", "Smile like rent is paid"],
    poses: ["Pretend you know the lyrics", "Shocked by the Uber price", "Group hug, no excuses", "Serious passport photo", "Dance move, freeze!", "Point at who invited you", "The face when the playlist is wrong", "Biggest smile in the room", "Pretend it's your birthday", "Everyone look at a different corner"],
    colors: { bg: "#120A2A", bg2: "#3A0D5E", bg3: "#0B1D3A", accent: "#FF4FA3", accent2: "#FFD23F", teal: "#36E2D1", gold: "#FFD23F", cream: "#FFF4F8", muted: "#B9A6DD", ink: "#2A0A1E" },
    fx: ["stars", "confetti", "fireworks"],
    filters: ["technicolor", "vintage"]
  },
  birthday: {
    name: "Birthday",
    display: "Happy Birthday",
    displayFont: '"Bowlby One",Impact,sans-serif',
    eyebrow: "Make a wish",
    title: "Birthday {year}",
    tagline: "Older, not wiser",
    lines: ["Older, not wiser", "Cake first, photos second", "Blow out the candles, then pose", "One year closer to a nap"],
    poses: ["Pretend the cake is on fire", "Shocked at your age", "Group hug, no excuses", "Serious passport photo", "Blow a kiss to the birthday person", "Dance move, freeze!", "Biggest smile in the room", "Point at the oldest person here"],
    colors: { bg: "#1C0B2E", bg2: "#5A1A6B", bg3: "#0F2A3F", accent: "#FF7A59", accent2: "#FFD23F", teal: "#4ED6C8", gold: "#FFD23F", cream: "#FFF6EE", muted: "#C9B3DD", ink: "#2B1500" },
    fx: ["stars", "confetti", "balloons"],
    filters: ["technicolor", "vintage"]
  },
  nye: {
    name: "New Year's Eve",
    display: "Happy New Year",
    displayFont: '"Fraunces",Georgia,serif',
    eyebrow: "Countdown to {nextyear}",
    title: "Hello {nextyear}",
    tagline: "New year, same friends",
    lines: ["New year, same friends", "Resolutions start Monday", "Kiss someone at midnight, pose at 11:59", "Sparkle responsibly"],
    poses: ["Toast to the camera", "Pretend it's midnight", "Group hug, no excuses", "Serious passport photo", "Dance move, freeze!", "The face when the fireworks are late", "Biggest smile in the room", "Everyone point up"],
    colors: { bg: "#06080F", bg2: "#1A1230", bg3: "#0B1A2E", accent: "#F6D27A", accent2: "#C9A3FF", teal: "#7FE3FF", gold: "#F6D27A", cream: "#FFF8E8", muted: "#9AA3C7", ink: "#1A1200" },
    fx: ["stars", "fireworks", "confetti"],
    filters: ["vintage", "technicolor"]
  }
};
