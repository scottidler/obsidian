---
date: 2024-06-05
day: Wed
time: 13:05
tags:
url: https://www.youtube.com/watch?v=WJZgzwB3ziE
author: Cam Pedersen
published: 2023-10-24T19:51:34Z
type: link
---


<iframe width="854" height="480" src="https://www.youtube.com/embed/WJZgzwB3ziE" frameborder="0" allowfullscreen></iframe>

## Description
Nix is a powerful package manager ecosystem that provides reliable and reproducible software environments by utilizing a unique functional deployment model, enabling users to manage complex system configurations, build and distribute software, and ensure consistent dependencies across different systems.

I wasn’t going to post this, but decided to let it rip. Please let me know if it helped you at all :~) Learn more about Nix at https://www.rubberduck.gg/courses/nix

0:00 Bonjour
0:24 Intro 
2:02 Nix 101
4:31 Installing and Configuring
8:20 Defining your Project
12:10 Nix for Continuous Integration
18:18 Nixpkgs and NixOS
23:02 Advanced topics (Nix Flakes and NixOps)
30:14 Tips and Tricks (Optimization, Garbage Collection)
34:16 Conclusion

Intro
* Welcome and Course Overview
* What is Nix?
* Why Should Startups Use Nix?

Nix 101
* Core concepts: Immutability and Reproducibility
* Nix's Architecture

Installation and Configuration 
* Step-by-step guide to installing Nix
* How to configure a Nix installation
* Resources:
    * Install Nix: https://nixos.org/download.html
    * Installation from the Nix wiki: https://nixos.wiki/wiki/Nix_Installation_Guide

Defining your Project with Nix
* Temporary shells with nix-shell
* Permanent shells with shell.nix
* Terminal integration with Direnv
* Resources:
    * Official mkShell documentation https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-mkShell
    * Direnv https://direnv.net/

Nix for Continuous Deployment
* Using Nix with Github Actions
* Build caching with Cachix
* Version pinning for better reproducibility
* Resources:
    * Nix Pills documentation for stdenv https://nixos.org/guides/nix-pills/fundamentals-of-stdenv.html
    * Cachix https://www.cachix.org/
    * Nix GitHub Action  https://github.com/cachix/install-nix-action

Nixpkgs and NixOS

* Nixpkgs: The Nix Packages Collection
* NixOS: The Nix Operating System
* Resources:
    * nixpkgs repo https://github.com/NixOS/nixpkgs
    * Nix search https://search.nixos.org
    * `nix search nixpkgs package_name`
    * Hydra CI https://github.com/NixOS/hydra
    * NixOS manual https://nixos.org/manual/nixos/stable/

Advanced Nix Usage

* Nix Flakes: A New Packaging Paradigm
    * Creating a Flake
* Deploying with NixOps
* Resources
    * Nix Flakes wiki https://nixos.wiki/wiki/Flakes
    * nix flake command manual https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html#flake-references
    * NixOps wiki https://nixos.wiki/wiki/NixOps
    * NixOps manual https://releases.nixos.org/nixops/latest/manual/manual.html

Tips and Tricks

* Common issues and how to resolve them
    * nix log
    * nix show-derivation
* Optimizing Nix for performance
    * max-jobs docs https://nixos.org/manual/nix/stable/advanced-topics/cores-vs-jobs.html
    * nix.conf docs https://nixos.org/manual/nix/stable/command-ref/conf-file.html
* Utilizing Nix's garbage collection effectively
    * `nix-collect-garbage`
    * `nix-store --optimize`
* Contributing to and leveraging the Nix Community
* Resources:
    * NixOS Discourse https://discourse.nixos.org/
    * Nix IRC https://nixos.wiki/wiki/Get_In_Touch
    * Nix official documentation https://nixos.org/manual/nix/stable/
    * Nix Pills https://nixos.org/guides/nix-pills/
    * NixOS Wiki https://nixos.wiki/

Conclusion

* Recap of the Adventure
* Invitation to Innovate
* Thank You and Farewell

TEST.YML
name: "Test"
on:
  pull_request:
  push:
jobs:
  tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cachix/install-nix-action@v22
        with:
          nix_path: nixpkgs=channel:nixos-unstable
      - run: nix-build
      - run: nix-shell --run "npm run test"