---
# _frontmatter_
date: 2023-12-24
day: Sun
time: 11:39
tags:
type: moc
---
# English Vocab MOC

```dataview
TABLE WITHOUT ID file.link AS "Vocab",
dateformat(file.ctime,"yyyy-MM-dd") AS "Created",
definition AS "Definition"
WHERE type = "vocab"
SORT file.ctime DESC
```

