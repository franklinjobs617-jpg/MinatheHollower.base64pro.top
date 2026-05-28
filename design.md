# Hollow Guidebook Design Reference

Theme: light

The site borrows the playful classroom clarity of the Duolingo reference while changing the skin to fit Mina the Hollower: bone-white space, rounded tactical cards, bold green action buttons, lantern-gold accents, and friendly gothic adventure illustrations. The experience should feel like a helpful game notebook, not a dark fan wiki and not a generic SEO page.

## Tokens

| Name | Value | Role |
| --- | --- | --- |
| Hollow Green | `#58cc02` | Primary actions, verified states, guide progress highlights. |
| Plasma Blue | `#1cb0f6` | Links, secondary actions, information callouts. |
| Bone White | `#fffdf5` | Page background. |
| Snow White | `#ffffff` | Card and table surfaces. |
| Parchment | `#f8f1dc` | Low-emphasis note panels and route cards. |
| Crypt Ink | `#3c2f2f` | Primary text. |
| Grave Gray | `#777777` | Secondary text and timestamps. |
| Cloud Gray | `#e5e5e5` | Borders and table rules. |
| Candle Gold | `#ffc700` | Important notes, scores, map markers. |
| Blood Rose | `#cc348d` | Warnings and pending screenshot labels. |
| Shadow Green | `#3f8f01` | 3D primary button base. |

## Typography

- Headline: `Fredoka`, weight 700. Use only for H1/H2 and brand marks.
- Body/UI: `Nunito Sans`, weights 500 and 700. Use for paragraphs, tables, buttons, labels, and navigation.
- Body copy keeps wide, friendly tracking around `0.8px`.
- Headlines stay rounded and oversized, but pages must still show the Quick Answer above the fold.

## Components

- Primary CTA: 12px radius, Hollow Green background, white text, `box-shadow: 0 4px 0 #3f8f01`.
- Secondary action: white or transparent surface, 2px Cloud Gray border, Plasma Blue text.
- Cards: 12px radius, 2px solid Cloud Gray border, no soft shadow.
- Status pills:
  - `Verified`: Hollow Green.
  - `Testing`: Candle Gold.
  - `Official source only`: Plasma Blue.
- Tables: real HTML tables, visible headers, mobile horizontal scroll.
- Screenshot slots: dashed border, Blood Rose label, direct explanation of what capture is missing.

## Content UI Rules

- The first screen must show the page purpose, status, and Quick Answer.
- Every guide page needs `Verified On`, `What We Tested`, a useful table or checklist, screenshot slots, sources, related guides, and an update log.
- Do not place internal SEO planning language in visible user content.
- Do not publish thin entity pages. Single item or boss pages can be added only after evidence exists.
- Do not use fake game screenshots. Pending screenshot slots are acceptable and must be labeled clearly.

## Imagery

- Use custom vector-style Mina-inspired decorative elements: mouse guide, lantern, bones, parchment notes, grave markers, route badges.
- Keep visuals friendly and rounded, with simple shapes and high contrast.
- Official screenshots or press art may be added later only with correct attribution and alt text.

