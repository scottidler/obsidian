---
date: 2024-06-23
day: Sun
time: 23:35
tags:
  - rust-axum
  - rust-programming
  - rust-web-development
url: https://www.youtube.com/watch?v=3cA_mk4vdWY
author: Jeremy Chone
published: 2023-08-25T12:30:02Z
type: link
---

<iframe width="854" height="480" src="https://www.youtube.com/embed/3cA_mk4vdWY" frameborder="0" allowfullscreen></iframe>

## Description
GitHub repo updated to Axum 0.7 https://github.com/rust10x/rust-web-app

In this episode, we'll dive into some Rust production coding. Starting from where we left off in the Rust Axum Full Course, we'll scale it up to a production-ready web application code base. Over the course of 9 chapters, we'll tackle tracing, configuration, and the model layer with PostgreSQL. Then, we'll delve into password encryption and secure web tokens, end with a JSON-based RPC implementation.

This marks the beginning of many exciting series on Rust production coding. Feel free to ask questions, provide feedback, and join us on Discord (https://discord.gg/XuKWrNGKpC). Until next one, happy coding!

Episode 01 (This episode): https://www.youtube.com/watch?v=3cA_mk4vdWY&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
Episode 02: https://www.youtube.com/watch?v=-dMH9UiwKqg&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
Episode 03: https://www.youtube.com/watch?v=zUxF0kvydJs&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q

More info on the Rust Web App (github, discord, and design doc): https://rust10x.com/web-app

Previous video - Axum Full Course - https://youtube.com/watch?v=XZtlD_m59sM&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q

GitHub Code: https://github.com/rust10x/rust-web-app (MIT or Apache 2.0, all free to use)

Big thanks to CrabNebula (https://crabnebula.dev/) for their sponsorship.

Help support this channel about production coding in Rust: https://patreon.com/jeremychone.

Content: 

- 00:00:00 - INTRO
- 00:01:00 - E01-C01 - Baseline
- 00:09:50 - E01-C02 - Tracing (basics)
- 00:14:26 - E01-C03 - Config
- 00:21:17 - E01-C04 - DB Live Reload
- 00:39:48 - E01-C05 - Model 1/2 - Task CRUD
- 01:18:55 - E01-C06 - Model 2/2 - Shared Impl
- 01:44:00 - E01-C07 - Pwd Encrypt & Validation
- 02:22:21 - E01-C08 - Secure Token & Web Auth
- 03:14:45 - E01-C09 - RPC (JSON-RPC)

#RustProgramming #RustLang #WebDevelopment #completecourse 

Tech notes: 

- `cargo install cargo-watch` - If you haven't already, make sure to install Cargo Watch.
- This project currently utilizes sqlx 0.6.x. Although sqlx 0.7.1 is available, it appears to have timeout issues with some of the unit tests. I'm looking into this problem and will upgrade once it's resolved. In the meantime, for a seamless experience, please use sqlx 0.6 and sqb 0.3.

Jeremy Chone:

- Twitter - https://twitter.com/jeremychone
- Discord General Rust - https://discord.gg/W2besKCzjx
- Discord Rust10x - https://discord.gg/XuKWrNGKpC
- Patreon - https://patreon.com/jeremychone



Other popular Rust Programming videos:

- Rust Axum Full Course - https://www.youtube.com/watch?v=XZtlD_m59sM&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Type State Builder Pattern - https://www.youtube.com/watch?v=pwmIQzLuYl0&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Builder Pattern - https://www.youtube.com/watch?v=Z_3WOSiYYFY&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Builder Pattern - https://www.youtube.com/watch?v=Z_3WOSiYYFY&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Quick Start Code Layout - https://www.youtube.com/watch?v=oxx7MmN4Ib0&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- AWESOME-APP (Rust10x) Full Overview - Rust template for building Awesome Desktop Application: https://www.youtube.com/watch?v=BY_ZjPGqJJk&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Tauri Quick Introduction (Desktop App wit Rust Programming): https://www.youtube.com/watch?v=kRoGYgAuZQE&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Bevy Full Tutorial - Game Development with Rust: https://www.youtube.com/watch?v=j7qHwb7geIM&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust for Java Developers series: https://www.youtube.com/watch?v=iFdh4sPC5Tg&list=PL7r-PXl6ZPcD63DS2djSiz4SlXkaTfobc&index=2&t=654s


Playlists: 

- Rust For Desktop App: https://youtube.com/playlist?list=PL7r-PXl6ZPcAQAi1lfVrtHCSbaJbwZ4O8
- Everything Rust Programming - Tutorials, Courses, Tips, Examples: https://youtube.com/playlist?list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q
- Rust Programming for Web Development: https://youtube.com/playlist?list=PL7r-PXl6ZPcCLvwpdD2Vj1O4CyoFTiHKd

Rust10x ➜ https://rust10x.com - Production code templates. 

Rust10x GitHub - https://github.com/rust10x

Tool used: 

- ScreenBrush on Mac App Store (Gromit seems to be the equivalent on Linux)
- Recut for audio flow. 
- Izotope RX for de-mclick and dessing.
- Davinci Resolve as video editing.