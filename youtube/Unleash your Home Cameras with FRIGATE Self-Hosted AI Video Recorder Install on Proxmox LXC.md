---
date: 2024-11-18
day: Mon
time: 06:41
tags:
url: https://www.youtube.com/watch?v=sCkswrK0G3I
author: apalrd's adventures
published: 2023-11-09T17:36:45Z
type: link
---

<iframe width="854" height="480" src="https://www.youtube.com/embed/sCkswrK0G3I" frameborder="0" allowfullscreen></iframe>

## Description
Do you have security cameras at your house? Would you like to locally host all of your recording and analytics, to make sure nobody else has access to your video feeds and recordings? Would you also like to integrate with Home Assistant, the greatest open automation platform in the world? Then Frigate NVR is for you! In this video, I'm going to go in depth to setup Frigate in an LXC container, for maximum efficiency. Using Podman Quadlet, I'm going to manage the Frigate container in a sane way with normal systemd and journalctl tools. And I'm going all-in on hardware passthrough, with my Coral TPU for advanced AI detections and person/cat/car counting, along with a basic Intel Quick Sync GPU to decode the video streams in hardware and reduce CPU load. So join me on this adventure!

Find the commands to copy+paste on my blog post:
https://www.apalrd.net/posts/2023/ultimate_frigate/

Support me on Ko-Fi if you enjoy my content and find it useful:
https://ko-fi.com/apalrd

Feel free to chat about my upcoming projects on Discord!
https://discord.gg/xJsaEukAr4

Timestamps:
00:00 - Introduction
01:25 - Debian Trixie Container
04:10 - Install Frigate
06:21 - Caddy Reverse Proxy
08:44 - Coral TPU Passthrough (PCIe)
13:18 - GPU Passthrough (Intel or AMD)
17:54 - Conclusions