---
id: membership-pathway
title: Membership Pathway
sidebar_position: 15
---

# Membership Pathway

Welcome to Belmont Scouts! This page outlines the pathway for new members to join our group. The steps below guide you through the process from the initial inquiry to becoming a fully invested member of our Scouting family.

## Membership Process
```mermaid
---
config:
  theme: "base"
---

flowchart TD
 subgraph subGraph0["Parent Actions"]
        A("Initial Query")
        B("Completion of Expression of Interest Form")
        D("Complete Membership Application")
        
  end
 subgraph subGraph1["Youth Actions"]
        C("Attend 'Have a Go' Nights")
        E("Introduction to Section & Scouting")
        F("Engage in Scout Meetings & Events")
        G("Work Through Introduction to Section & Scouting")
        J("Investiture Ceremony")
        K("Become Part of the Scouting Family")
  end
  subgraph subGraph2["Engagment"]
  I("Ongoing  Engagement")
  end
    A --> B
    B --> D & C
    C --> D
    D --> E & I
    E --> F
    F --> G
    G--> J
    J --> K
    K --> I

