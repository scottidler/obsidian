# Habits Tracker


## The Grind
```dataview
TABLE WITHOUT ID
  link(file.name) AS "📅",
  choice(walking, "✅", "❌") AS "🚶",
  choice(pushups, "✅", "❌") AS "🏋",
  choice(situps, "✅", "❌") AS "🧘",
  choice(water, "✅", "❌") AS "💧",
  choice(brushing, "✅", "❌") AS "🦷",
  choice(typing, "✅", "❌") AS "⌨️",
  choice(spanish, "✅", "❌") AS "🇲🇽",
  choice(writing, "✅", "❌") AS "📚"
FROM "daily"
WHERE file.day <= date(now) AND file.day >= date(now) - dur(14 days)
AND file.name != "daily"
SORT file.name DESC
```


## Weight
```tracker
searchType: frontmatter
searchTarget: weight
folder: [[daily]]
line:
	title: Weight
	yAxisLabel: Weight
	
```

## Dietcokes
```tracker
searchType: frontmatter
searchTarget: dietcokes
folder: [[daily]]
line:
	title: Dietcokes
	yAxisLabel: Dietcokes
```

## Pushups
```tracker
searchType: frontmatter
searchTarget: pushups
folder: [[daily]]
line:
	title: Pushups
	yAxisLabel: Pushups
```
## Situps
```tracker
searchType: frontmatter
searchTarget: situps
folder: [[daily]]
line:
	title: Situps
	yAxisLabel: Situps
```
