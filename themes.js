// Theme definitions for House Booth. Each theme only changes words, colours and effects.
// The camera, filters, countdown and strip engine are shared.
// fx options: stars, fireworks, diyas, petals, rangoli, confetti, balloons, candles, disco, bats, ghosts, pumpkins, fog, bubbles
window.THEMES = {
  diwali: {
    name: "Diwali",
    blurb: "Diyas, fireworks, marigold petals",
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
  halloween: {
    name: "Halloween",
    blurb: "Bats, ghosts, fog, pumpkins",
    display: "Happy Halloween",
    displayFont: '"Creepster","Chiller",Impact,sans-serif',
    eyebrow: "Enter if you dare",
    title: "Halloween {year}",
    tagline: "Scream now, filter later",
    lines: ["Scream now, filter later", "The booth is haunted. Probably.", "Costume check: pass or ghost", "Say boo", "Four shots, no souls taken", "Candy first, photos second"],
    poses: ["Your best zombie", "Scream like the WiFi dropped", "Haunted group hug", "Serious passport photo, but dead", "Pretend you saw the bill", "Vampire with no teeth", "Point at the scariest costume", "Freeze like a ghost just walked past", "Evil laugh, hold it", "Werewolf mid-transformation"],
    colors: { bg: "#0B0712", bg2: "#2A0F3A", bg3: "#061007", accent: "#FF7A00", accent2: "#7CFF4F", teal: "#9B5CFF", gold: "#FFB347", cream: "#F3EEE2", muted: "#A89BB8", ink: "#1A0A00" },
    fx: ["stars", "bats", "ghosts", "pumpkins", "fog"],
    filters: ["vintage", "technicolor"]
  },
  party: {
    name: "House Party",
    blurb: "Confetti, disco lights, chaos",
    display: "House Party",
    displayFont: '"Bowlby One",Impact,sans-serif',
    eyebrow: "Tonight",
    title: "House Party {year}",
    tagline: "What happens here ends up on a strip",
    lines: ["What happens here ends up on a strip", "Four shots, one strip, zero dignity", "The kitchen is not the dance floor. Or is it", "Hydrate, then pose", "Smile like rent is paid"],
    poses: ["Pretend you know the lyrics", "Shocked by the Uber price", "Group hug, no excuses", "Serious passport photo", "Dance move, freeze!", "Point at who invited you", "The face when the playlist is wrong", "Biggest smile in the room", "Pretend it's your birthday", "Everyone look at a different corner"],
    colors: { bg: "#120A2A", bg2: "#3A0D5E", bg3: "#0B1D3A", accent: "#FF4FA3", accent2: "#FFD23F", teal: "#36E2D1", gold: "#FFD23F", cream: "#FFF4F8", muted: "#B9A6DD", ink: "#2A0A1E" },
    fx: ["stars", "confetti", "disco"],
    filters: ["technicolor", "vintage"]
  },
  birthday: {
    name: "Birthday",
    blurb: "Balloons, candles, cake",
    display: "Happy Birthday",
    displayFont: '"Bowlby One",Impact,sans-serif',
    eyebrow: "Make a wish",
    title: "Birthday {year}",
    tagline: "Older, not wiser",
    lines: ["Older, not wiser", "Cake first, photos second", "Blow out the candles, then pose", "One year closer to a nap"],
    poses: ["Pretend the cake is on fire", "Shocked at your age", "Group hug, no excuses", "Serious passport photo", "Blow a kiss to the birthday person", "Dance move, freeze!", "Biggest smile in the room", "Point at the oldest person here"],
    colors: { bg: "#1C0B2E", bg2: "#5A1A6B", bg3: "#0F2A3F", accent: "#FF7A59", accent2: "#FFD23F", teal: "#4ED6C8", gold: "#FFD23F", cream: "#FFF6EE", muted: "#C9B3DD", ink: "#2B1500" },
    fx: ["stars", "confetti", "balloons", "candles"],
    filters: ["technicolor", "vintage"]
  },
  nye: {
    name: "New Year's Eve",
    blurb: "Gold fireworks, bubbles, midnight",
    display: "Happy New Year",
    displayFont: '"Fraunces",Georgia,serif',
    eyebrow: "Countdown to {nextyear}",
    title: "Hello {nextyear}",
    tagline: "New year, same friends",
    lines: ["New year, same friends", "Resolutions start Monday", "Kiss someone at midnight, pose at 11:59", "Sparkle responsibly"],
    poses: ["Toast to the camera", "Pretend it's midnight", "Group hug, no excuses", "Serious passport photo", "Dance move, freeze!", "The face when the fireworks are late", "Biggest smile in the room", "Everyone point up"],
    colors: { bg: "#06080F", bg2: "#1A1230", bg3: "#0B1A2E", accent: "#F6D27A", accent2: "#C9A3FF", teal: "#7FE3FF", gold: "#F6D27A", cream: "#FFF8E8", muted: "#9AA3C7", ink: "#1A1200" },
    fx: ["stars", "fireworks", "confetti", "bubbles"],
    filters: ["vintage", "technicolor"]
  }
};
