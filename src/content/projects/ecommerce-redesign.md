---
title: "E-Commerce UX Overhaul"
subtitle: "Redesigning the checkout flow for a €50M/yr platform"
thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
liveUrl: "https://shop.example.com"
techstack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"]
period:
  start: "2022-06"
  end: "2022-11"
roles: ["Product Engineer", "Frontend Lead"]
overview: "Rebuilt the checkout and product discovery experience for a mid-market e-commerce platform processing €50M in annual revenue. The redesign reduced cart abandonment and increased mobile conversion."
outcomes:
  - title: "22% drop in cart abandonment"
    description: "Streamlining checkout from 5 steps to 2, with persistent cart state, brought abandonment from 71% to 49%."
  - title: "18% increase in mobile conversion"
    description: "A mobile-first rebuild of product pages and checkout reduced friction on the device responsible for 64% of traffic."
  - title: "3× faster page load"
    description: "Migrating from a legacy monolith to Next.js with image optimization and edge caching cut load time from 4.2s to 1.4s."
---

## Challenge

The existing checkout flow was a five-step form built on a PHP monolith with no mobile optimization. Cart abandonment was at 71% — well above industry average — and mobile users, who represented 64% of traffic, converted at a third of the desktop rate. The platform was losing an estimated €3M annually to abandonment.

## Actions

I partnered with the product designer and data analyst to run a conversion audit combining session recordings, funnel analytics, and user interviews. We identified three root causes: too many steps, loss of cart state on back-navigation, and a checkout form that required 14 fields where 6 would suffice.

I rebuilt the product and checkout experience in Next.js, collapsing five steps into two, implementing persistent cart state via React context and localStorage, and integrating Stripe Elements for a native card UX. I used Next.js Image and Vercel Edge Network for performance, dropping page load from 4.2s to 1.4s on a 4G mobile connection.

## Results

After a two-week A/B test, the redesign launched to 100% of users. Cart abandonment dropped from 71% to 49%. Mobile conversion increased by 18%. The engineering team estimated the conversion gains recovered the project investment within the first month of shipping.
