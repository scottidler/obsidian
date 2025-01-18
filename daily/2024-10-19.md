---
<%*
let workWeekNum = await tp.user.workweek();
if (typeof workWeekNum !== "number") {
    throw new Error("workWeekNum is not a number: " + workWeekNum);
}
let exercises = workWeekNum + 10;
%>
date: <% tp.date.now("YYYY-MM-DD") %>
day: <% tp.date.now("ddd") %>
time: <% tp.date.now("HH:mm") %>
ww: <% workWeekNum %>
tags:
type: daily
weight: 270
dietcokes: 8
walking: 0
pushups: <% exercises %>
situps: <% exercises %>
water: false
brushing: false
typing: false
spanish: false
writing: false
---

# daily

## Habits Tracker
[[Habits Tracker]]

## Todo
- [ ] something
## Haiku
5
7
5
## Writing
prose
