---
title: "Analytics Dashboard"
subtitle: "Real-time data visualization for a B2B SaaS platform"
thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
techstack: ["React", "TypeScript", "D3.js", "GraphQL", "PostgreSQL"]
period:
  start: "2023-10"
roles: ["Senior Product Engineer", "Frontend Lead"]
overview: "Designed and built a real-time analytics dashboard for a B2B SaaS platform, replacing a third-party tool with a first-party experience that gave the sales team direct access to customer usage signals."
outcomes:
  - title: "Replaced €80K/yr third-party tool"
    description: "Building first-party replaced an €80K annual Mixpanel contract while giving the team full control over the data model."
  - title: "30% increase in sales-qualified leads"
    description: "Sales reps using product usage signals to prioritize outreach saw a 30% increase in meetings booked within the first quarter."
  - title: "Sub-second dashboard load"
    description: "Query optimization and incremental data loading kept all dashboard views under 800ms despite processing millions of events."
---

## Challenge

A B2B SaaS company was spending €80,000 per year on Mixpanel for analytics, yet the sales team couldn't access the usage data they needed to identify expansion opportunities. Account managers had to request manual exports from engineering, which created a 3–5 day lag on signals that should have been same-day.

## Actions

I designed a first-party analytics dashboard that gave sales and customer success teams direct, self-service access to customer usage signals without engineering involvement. I started with a week of stakeholder interviews to understand the 5–6 metrics that actually drove sales conversations, then designed a focused dashboard around those signals rather than a general-purpose analytics tool.

I built the frontend in React with D3.js for custom visualizations, using GraphQL subscriptions for real-time updates. I worked with the backend engineer to design a read-optimized PostgreSQL schema with materialized views and incremental aggregation, which kept query times under 200ms even on the largest customer accounts.

The rollout was phased: five power users in week one, full sales team in week four, with an in-app feedback channel to surface bugs and missing features in real time.

## Results

The dashboard replaced the Mixpanel contract entirely within 60 days of launch, saving €80K annually. Sales reps using product signals to prioritize outreach saw a 30% increase in meetings booked in the first quarter. Dashboard load stayed under 800ms at p95, and the engineering team measured a 90% reduction in ad hoc data requests from the sales team.
