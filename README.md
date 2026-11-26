# Name the Robot Band

Entry for the make.fun bounty
[Name the Robot Band](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74):
one funny name for a band made of robots, plus a few words on its hit song,
all in under 200 characters.

![Competition](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)
![Rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/upinhuy/name-the-robot-band/rank.svg)
![Reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/upinhuy/name-the-robot-band/reward.svg)

## The entry

> The Captcha Failures — hit single 'Prove You're Not a Robot' (they couldn't).

A robot band that failed its own captcha: the joke is that the one thing
robots can never prove is that they are not robots.

## How it works

`main.ts` (pure Node.js standard library, no dependencies) writes the entry
text to `/output/entry.txt`, falling back to `./output/entry.txt` when
`/output` is not writable. It validates the gate first: UTF-8 text, 1–200
characters, a single line, not only white space.

```sh
node main.ts
```

## Links

- Bounty: https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74
- Referral: https://make.fun/r/hv9zk8y5
