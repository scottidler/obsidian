---
date: 2024-06-23
day: Sun
time: 16:29
tags:
  - getting-started-with-tmux
  - tmux-basics
  - tmux-config
  - tmux-configuration
  - tmux-for-beginners
  - tmux-guide
  - tmux-settings
  - tmux-tutorial
  - tmux-tutorial-youtube
  - tmux-vim
url: https://www.youtube.com/shorts/Fpa52ymOH0Q
author: typecraft
published: 2024-04-18T20:11:01Z
type: link
---

<iframe width="480" height="854" src="https://www.youtube.com/embed/Fpa52ymOH0Q" frameborder="0" allowfullscreen></iframe>

## Description
X: https://twitter.com/typecraft_dev

Looking for those sweet commands for your tmux.conf? Look no further!

set-option -g status-position top

# Tmux gettin sexy - YouTube
set -g @plugin 'tmux-plugins/tpm'

set -g @plugin 'catppuccin/tmux'
set -g @catppuccin_flavour 'mocha'

# Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
run '~/.tmux/plugins/tpm/tpm'