---
date: 2024-06-06
day: Thu
time: 23:37
tags:
url: https://www.youtube.com/watch?v=NKBzLxbhbcQ
author: Learning Rust
published: 2024-03-17T10:00:25Z
type: link
---


<iframe width="854" height="480" src="https://www.youtube.com/embed/NKBzLxbhbcQ" frameborder="0" allowfullscreen></iframe>

## Description
How to use update, relate, and how to drop a table using SurrealDB with Rust.
In this video I also show Rust code to create and remove tables, and show the SurrealDB Discord channel.  Note these tables are "schemaless" - I'll progress to "schemafull" soon.

Check out Tobie explaing how everything in SurrealDB happens on write :
https://www.youtube.com/live/ffzxt0iToWs?si=jenblPiJB8xsi6UT&t=373

🦀 SurrealDB Rust Playlist
https://www.youtube.com/playlist?list=PL38rDfx7QwKaluI7PoOrjlmjGTgx45C2Y

** New: I've created some slightly more ADVANCED queries and added them to my website, with these you will need to learn and understand "relate" but after a while it starts to feel a bit more intuitive.

take v first
-----------------
.take(0) returns an empty iterator.
.first() returns an Option containing the first element of the vector or None if the vector is empty.

More advanced SurrealDB queries
----------------------------------------------------------
🟩 https://redandgreen.co.uk/surrealdb-cheatsheet/surrealdb/

Previous Article:
---------------------------
🟩 https://redandgreen.co.uk/learn-surrealdb/surrealdb/
code : https://gist.github.com/RGGH/d23d14d2df7a3909ec266406cd770d3f

install SurrealDB
---------------------------
🟩 https://surrealdb.com/install

start the server
-------------------------
surreal start --log info --user root --pass root file:mydatabase.db

Demo Data
--------------------
🟩 https://surrealdb.com/docs/surrealdb/surrealql/demo

Useful code example using fetch, with query prepared using format! macro:
-------------------------------------------------------------------------------------------------------------------------
🟩 https://github.com/surrealdb/surrealdb/pull/2981/files

Linux Hosting - VPS server - Webdock
----------------------------------------------------------------
🟩 Webdock Linux Hosting : https://webdock.io/en?maff=wdaff--170

See also - Rust Code Maven:
-------------------------------------------------
🟩 https://rust.code-maven.com/surrealdb-cli-multi-counter

Code used in this video:
🟩 https://gist.github.com/RGGH/510fd401f4218e6789e662749af87a30

Nostr
---------
@RngWeb
findthatbit@iris.to

https://findthatbit.info/
https://redandgreen.co.uk/

#rustlang #SurrealDB  #learningrust