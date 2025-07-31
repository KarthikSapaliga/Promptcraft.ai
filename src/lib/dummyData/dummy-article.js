export const dummyArticle = `
# The Markdown Galaxy 🌌

Markdown is a lightweight markup language that allows you to format plain text using simple symbols. Whether you're writing documentation, blog posts, or README files, Markdown makes it quick and easy to add style without writing verbose HTML. In this article, we'll explore every Markdown element — with examples — while telling a fictional story about space colonization.

---

## Table of Contents

1. [Introduction](#introduction)
2. [The Mission 🚀](#the-mission-)
3. [Crew Members 👨‍🚀](#crew-members-)
4. [Technology Stack](#technology-stack)
5. [Daily Logs](#daily-logs)
6. [Sample Code](#sample-code)
7. [Stats Table](#stats-table)
8. [Quotes from the Crew](#quotes-from-the-crew)
9. [Images from the Journey](#images-from-the-journey)
10. [Conclusion](#conclusion)
11. [Footnotes](#footnotes)

---

## Introduction

Welcome to the Markdown Galaxy. This is a fictional article to **demonstrate** _every_ style that can be written in **Markdown**. You'll see:

- Headers
- Emphasis
- Lists (Ordered and Unordered)
- Tables
- Code blocks (inline and multiline)
- Links
- Images
- Blockquotes
- Horizontal rules
- Task lists
- Footnotes

Let's go!

---

## The Mission 🚀

On **January 1st, 2095**, Earth launched the _first intergalactic mission_ to colonize **Planet Xylon**. The mission, called 'Project Stardust', had the following objectives:

1. Survey the planet's atmosphere.
2. Test soil and water for human compatibility.
3. Establish a semi-permanent base.

> "We choose to go to Xylon, not because it is easy, but because it is hard."  
> — *Commander Elena Mors*

---

## Crew Members 👨‍🚀

The initial crew included:

- **Elena Mors** (Commander)
- **Taro Kincaid** (Engineer)
- **Liu Chen** (Astrobiologist)
- **Amara Singh** (Pilot)
- **Ravi Desai** (AI Specialist)

### Backup Crew _(in case of emergency)_:

- *Maya Jansen* (Medical)
- *Igor Petrov* (Logistics)

---

## Technology Stack

Here are some technologies used on board:

- **Languages:**
  - Python 🐍
  - Rust 🦀
  - JavaScript ☕
- **Frameworks:**
  - React for UI control panels
  - TensorFlow for AI modeling
- **Tools:**
  - Docker for software deployment
  - VS Code for development
  - Git for version control

\`\`\`bash
$ git clone https://github.com/space-agency/project-stardust
$ cd project-stardust
$ docker-compose up
\`\`\`

---

## Daily Logs

### Day 1

* [x] Launch sequence successful
* [x] Entered orbit
* [x] Systems check complete
* [ ] Begin hyperspace jump

### Day 2

* [x] Hyperspace transition complete
* [x] No system failures
* [ ] Initialize planet scan

---

## Sample Code

Below is an example of how the AI assistant determines atmosphere compatibility:

\`\`\`python
def check_atmosphere(o2, co2, n2):
    if o2 >= 19.5 and o2 <= 23.5:
        if co2 < 0.5:
            return "Atmosphere is breathable"
    return "Non-breathable"

# Example:
status = check_atmosphere(21, 0.3, 78)
print(status)  # Output: Atmosphere is breathable
\`\`\`

You can also write inline code like this: 'oxygen_level = 21.0'.

---

## Stats Table

| Metric       | Value    | Status       |
| ------------ | -------- | ------------ |
| Oxygen Level | 21%      | ✅ Normal     |
| CO2 Level    | 0.3%     | ✅ Safe       |
| Gravity      | 9.8 m/s² | ✅ Earth-like |
| Water pH     | 7.1      | ✅ Neutral    |
| Surface Temp | -10°C    | ⚠️ Cold      |
| AI Uptime    | 99.98%   | ✅ Stable     |

---

## Quotes from the Crew

> **Elena Mors:**
> “Looking at Xylon from orbit, it feels like we're writing the next chapter of humanity.”

> **Liu Chen:**
> “The microorganisms here are *unlike anything we've seen*. Life truly finds a way.”

> **Ravi Desai:**
> “Our AI model predicted 99% landing success. Turns out it was right.”

---

## Images from the Journey

Here's an image from the launch day:

![Rocket Launch](https://via.placeholder.com/800x400.png?text=Rocket+Launch)

And here's a rendered map of Xylon's surface:

![Xylon Surface](https://via.placeholder.com/800x400.png?text=Xylon+Surface)

---

## Conclusion

Markdown is incredibly powerful for writing structured documents without the overhead of complex syntax. It works for everything from simple notes to full documentation and reports. We've used **headings**, *emphasis*, inline code, lists, tables, blockquotes, and even images to build this space-themed example.

> “The future is written in plain text.”

---

## Footnotes

Markdown doesn't officially support footnotes in all renderers, but platforms like GitHub or Markdown extensions do:

This was the first human mission to Planet Xylon[^1].

[^1]: Xylon is a fictional planet for demonstration purposes.

---

## Horizontal Rules

Below is a horizontal line to separate sections:

---

## Emojis

Markdown doesn't officially support emojis, but many renderers (like GitHub) do. For example:

* 🚀 Mission Start
* 🧬 DNA Sample
* ⚠️ System Warning
* ✅ Success
* 🔒 Secure

---

## Links

Want to learn more about Markdown?

* [Markdown Guide](https://www.markdownguide.org/)
* [GitHub Flavored Markdown](https://github.github.com/gfm/)
* [Dillinger Editor](https://dillinger.io/) - an online Markdown editor

---

## Bonus: Nested Lists

Here's a nested list example:

1. First item
   1.1 Sub-item
   1.2 Another sub-item
   \- Sub-sub bullet
   \- Another one
2. Second item

---

## Escape Characters

Sometimes you need to write special characters:

* Use backslash to escape: \*not italic\*
* Code: \`backticks\`
* Headers: # not a heading
`
;