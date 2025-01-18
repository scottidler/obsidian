---
date: 2024-09-18
day: Wed
time: 23:02
tags:
  - rust-programming
url: https://www.youtube.com/watch?v=j-VQCYP7wyw
author: Jeremy Chone
published: 2024-04-21T13:00:38Z
type: link
---

<iframe width="854" height="480" src="https://www.youtube.com/embed/j-VQCYP7wyw" frameborder="0" allowfullscreen></iframe>

## Description
Here are some best practices for error handling in Rust programming that I've found effective:

- For tests and examples, use "box dyn error" instead of "anyhow."
- Prefer the "?" pattern over "unwrap" or "expect," even in tests and examples, to align with production coding standards.
- "Box dyn error" is excellent for error passthrough, as are `map_err` and `ok_or` with static strings and formatted strings.
- In production code, use an enum with fully descriptive variant names and favor struct variants with clear names over tuple variants.
- Avoid relying on the display to convey the meaning of error variants.
- In web or device applications, human error rendering might not occur at the enum/type level, so using Debug for display may suffice.
- For web or device applications, using Serialize for errors that need to be logged or sent to the client for display can be a powerful and straightforward pattern.
- Prioritize clarity in error naming (variants) and focus on consistency as the code develops.
- Don't be afraid of medium-length enum variant names; remember, type refactoring is straightforward.
- In summary, start with progressive and clear practices, and become more structured as the code matures.


== Jeremy Chone:

- Patreon - https://patreon.com/jeremychone  - Any help is a big help (for Rust educational content)
- Twitter - https://twitter.com/jeremychone
- Discord general-rust - https://discord.gg/W2besKCzjx
- Discord rust10x - https://discord.gg/XuKWrNGKpC
- Rust10x - https://rust10x.com - Rust resources for production coding. 

Big thanks to CrabNebula (https://crabnebula.dev/) for sponsoring this channel.

== Rust10x AI / OpenAI / Ollama

- Rust OpenAI API Tutorial: https://www.youtube.com/watch?v=PHbCmIckV20&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q

- Rust Ollama Tutorial: https://youtu.be/OcH-zT5VNgM

== Rust10x Web App production coding: 

Episode 01: https://www.youtube.com/watch?v=3cA_mk4vdWY&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
Episode 02: https://www.youtube.com/watch?v=-dMH9UiwKqg&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
Episode 03: https://www.youtube.com/watch?v=zUxF0kvydJs&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
Episode 04: https://www.youtube.com/watch?v=3E0zK5h9zEs&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
Episode 05.1: https://www.youtube.com/watch?v=Gc5Nj5LJe1U&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q


Web Site: https://rust10x.com/web-app
GitHub: https://github.com/rust10x/rust-web-app 
Discord rust10x - https://discord.gg/XuKWrNGKpC
Patreon - https://patreon.com/jeremychone  - Any help is a big help (for Rust Production Coding educational content)

== Other

Other popular Rust Programming videos:

- Rust Web App Production Coding Blueprint - https://www.youtube.com/watch?v=3cA_mk4vdWY&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Axum - Full Course - https://www.youtube.com/watch?v=XZtlD_m59sM&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Type State Builder Pattern - https://www.youtube.com/watch?v=pwmIQzLuYl0&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Quick Start Code Layout - https://www.youtube.com/watch?v=oxx7MmN4Ib0&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- AWESOME-APP Full Overview - Rust template for building Awesome Desktop Application: https://www.youtube.com/watch?v=BY_ZjPGqJJk&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Tauri Quick Introduction (Desktop App wit Rust Programming): https://www.youtube.com/watch?v=kRoGYgAuZQE&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Web App tutorials series: https://www.youtube.com/watch?v=VIig9IcQ-w8&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q&list=PL7r-PXl6ZPcCLvwpdD2Vj1O4CyoFTiHKd
- Rust Bevy Full Tutorial - Game Development with Rust: https://www.youtube.com/watch?v=j7qHwb7geIM&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust for Java Developers series: https://www.youtube.com/watch?v=iFdh4sPC5Tg&list=PL7r-PXl6ZPcD63DS2djSiz4SlXkaTfobc&index=2&t=654s

Playlists: 

- Rust AI Programming Series: https://www.youtube.com/playlist?list=PL7r-PXl6ZPcBcLsBdBABOFUuLziNyigqj
- Rust Web App Production Coding Series: https://www.youtube.com/playlist?list=PL7r-PXl6ZPcCTTxjmsb9bFZB9i01fAtI7
- Rust For Desktop App: https://youtube.com/playlist?list=PL7r-PXl6ZPcAQAi1lfVrtHCSbaJbwZ4O8
- Everything Rust Programming - Tutorials, Courses, Tips, Examples: https://youtube.com/playlist?list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Programming for Web Development: https://youtube.com/playlist?list=PL7r-PXl6ZPcCLvwpdD2Vj1O4CyoFTiHKd
- Rust Courses: https://youtube.com/playlist?list=PL7r-PXl6ZPcB4jn1_VR3D8tSK9DxOaiQE
- Rust for Java Developers: https://youtube.com/playlist?list=PL7r-PXl6ZPcD63DS2djSiz4SlXkaTfobc


Rust10x - Coding Resources for Production Coding in Rust. ➜ https://rust10x.com

Other notes: 

- ScreenBrush for the green lines. (Gromit seems to be the equivalent on Linux)
- Sketchapp for some graphics.
- Davinci Resolve and Fusion video editing.
- VSCode with Google Material icon themes (with some customization)