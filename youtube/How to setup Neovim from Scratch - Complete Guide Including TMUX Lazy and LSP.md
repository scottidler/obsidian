---
date: 2024-06-05
day: Wed
time: 13:06
tags:
  - nvim
  - vim
  - customization
  - tmux
  - neovim
  - ricing
  - lazy-nvim
url: https://www.youtube.com/watch?v=ZjMzBd1Dqz8
author: The Rad Lectures
published: 2023-10-11T11:00:24Z
type: link
---


<iframe width="854" height="480" src="https://www.youtube.com/embed/ZjMzBd1Dqz8" frameborder="0" allowfullscreen></iframe>

## Description
My NeoVim config needed an update, so, I decided to configure it from scratch! I've documented each step for an awesome neovim setup, including installing the Lazy Nvim plugin manager, integrating TMUX, setting up our Language Servers with Lspconfig and much more. 

In light of the recent archiving of null-ls, we will also explore switching to efm-langserver, a performance-optimized alternative for linting and formatting with broad language support. We will set up the LSPs, linters and formatters for Python, Lua and Typescript. Plus, we'll delve into transitioning to Lazy Nvim for a more streamlined plugin management experience.

This video tutorial is designed for both beginners as well as those already using NeoVim and looking to optimise their NeoVim configuration (see timestamps to skip ahead where needed!). 

Timestamps

0:00 Introduction & Installing NeoVim
12:01 Setting up the Lazy Nvim Plugin Manager
21:24 Install a Colour Scheme
24:48 Sourcing Plugins & Configuring Lazy Nvim
31:51 Configuring NeoVim options
41:23 Nvim Tree File Explorer
44:41 Installing a Nerdfont
54:21 Custom Shortcuts
1:02:06 Telescope Fuzzy Finder
1:07:58 Comments & Indentation
1:11:08 Visual Indentation Guidance
1:12:22 Syntax Highlighting with Treesitter
1:14:22 Autotags
1:16:18 Web-Devicons
1:17:33 Illuminate Word Under Cursor
1:18:47 Highlight Yanked Text
1:20:00 Nicer Command Line, Search and Notification UI
1:22:18 Lualine Custom Statusline
1:26:27 Installing Language Servers with Mason
1:31:32 Setting up Mason Lspconfig
1:33:46 Getting Started with LspConfig with Lua (incl. Linting & Formatting)
1:37:51 Formatting on Save
1:39:59 LspSaga & Diagnostics Keymaps
1:44:30 Clean up our project Lua settings
1:46:09 Configuring LspConfig and efm for Python LSP, Linting & Formatting
1:50:33 Setting Up Auto-Completion
1:53:05 Configuring LspConfig and efm for TypeScript LSP, Linting & Formatting
1:58:02 A Closer Look at efm-langserver
2:00:53 Cleaning Up LspConfig & Adding autocmds
2:03:14 Setting Up Transparency
2:06:14 Integrating NeoVim with TMUX
2:17:28 Outro & Thank You

Links

0. My Config (for reference)
- nvim [latest]: https://github.com/radleylewis/nvim 
- nvim [commit containing video code]: https://github.com/radleylewis/nvim/tree/85f6a8d2ff35bdf4c28db92e4965825692364317 
- dotfiles (alacritty & tmux): https://github.com/radleylewis/dotfiles
- Linux Distro used in this video is Pop!_OS: https://pop.system76.com/
1. NeoVim
- https://neovim.io
2. Lazy Nvim 
- https://github.com/folke/lazy.nvim
3. Colour Scheme
- nightfox: https://github.com/EdenEast/nightfox.nvim
- gruvbox: https://github.com/ellisonleao/gruvbox.nvim
4. Nvim Tree File Explorer
- https://github.com/nvim-tree/nvim-tree.lua
5. Nerdfonts
- https://www.nerdfonts.com/
 6. Telescope Fuzzy Finder
- https://github.com/nvim-telescope/telescope.nvim
7. Comment.nvim
- https://github.com/numToStr/Comment.nvim
8. Indent Blankline
- https://github.com/lukas-reineke/indent-blankline.nvim
9. Nvim Treesitter
- https://github.com/nvim-treesitter/nvim-treesitter
10: Nvim ts-autotag
- https://github.com/windwp/nvim-ts-autotag
11. Nvim Web-Devicons
- https://github.com/nvim-tree/nvim-web-devicons
12. Vim Illuminate
- https://github.com/RRethy/vim-illuminate
13. Vim Highlighted Yank
- https://github.com/machakann/vim-highlightedyank
14. Nvim Noice for Command Line and Notifiation UI
- https://github.com/folke/noice.nvim
15. Lualine
- https://github.com/nvim-lualine/lualine.nvim
16. Installing LSPs, Linters and Formatters with Mason
- https://github.com/williamboman/mason.nvim
17. Mason Lspconfig
- https://github.com/williamboman/mason-lspconfig.nvim
18. Lsp Config
- https://github.com/neovim/nvim-lspconfig
19. efm-langserver
- efm: https://github.com/mattn/efm-langserver
- configs: https://github.com/creativenull/efmls-configs-nvim
20. Better Diagnostics with LspSaga
- https://github.com/nvimdev/lspsaga.nvim
21. Neoconf
- https://github.com/folke/neoconf.nvim
22. Auto-Completion 
- nvim-cmp: https://github.com/hrsh7th/nvim-cmp/
- luasnip: https://github.com/L3MON4D3/LuaSnip
- lspkind: https://github.com/onsails/lspkind.nvim
23. Transparent Nvim
- https://github.com/xiyaowong/transparent.nvim
24. TMUX
- tmux: https://github.com/tmux/tmux/wiki
- tpm: https://github.com/tmux-plugins/tpm
- theme: https://github.com/wfxr/tmux-power
- continuum: https://github.com/tmux-plugins/tmux-continuum
- resurrect: https://github.com/tmux-plugins/tmux-resurrect
- navigation: https://github.com/christoomey/vim-tmux-navigator