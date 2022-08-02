---
title: SA-MP Commands
lang: en-US
---

## General SA-MP Commands

:::tip

You could technically run the `/samp query` without any argument.

However, If you're not bookmark your server yet, you are still required to fill IP & Port (optional). Otherwise it will return an error!

Learn more how to add your server to bookmarks after this section!
:::

| Name               | Example                              | Usage                                 |
| :----------------- | :----------------------------------- | :------------------------------------ |
| wiki &lt;query&gt; | /samp wiki `query:OnPlayerDeath`     | Returns an article from open.mp wiki. |
| query [ip] [port]  | /samp query `ip:1.1.1.1` `port:7777` | Query your favorite SA-MP server      |

## Server Query Bookmark Commands

::: warning
Each guild can only bookmark one SA-MP server!
:::

| Name                   | Example                                      | Usage                             |
| :--------------------- | :------------------------------------------- | :-------------------------------- |
| add &lt;ip&gt; [port]  | /samp bookmark add `ip:1.1.1.1` `port:7777`  | Add your server to the bookmark   |
| Edit &lt;ip&gt; [port] | /samp bookmark edit `ip:1.1.1.1` `port:7777` | Edit your SA-MP server's bookmark |
| remove                 | /samp bookmark remove                        | Remove your server's bookmark     |
