---
layout: post
category: 'UI Design'
---

The problem given is the difficulty in searching for bus stop time on the schedule. It is challenging for people who want to quickly find the bus timings without spending too much time figuring out. The [original website](http://www.kamalan.com.tw/run.php) is here (You could use google translate).
{:.summary}

## My Design Process
![process]({{ "/assets/img/bus-schedule/flow.jpg" | absolute_url }} "Design Process")
{:.w600}

## Feature Understanding
There are three connected vital objects need to display on schedule:

1.Bus stop at the station (synchronizing with the time): is designated to help users view waiting time for the next bus to arrive at the location. 

![routes]({{ "/assets/img/bus-schedule/routes.png" | absolute_url }} "Routes")
{:.w600}

2.Route: is designated to help users know operation hours, most optimal ways to commute between two places.

![timing]({{ "/assets/img/bus-schedule/timing.png" | absolute_url }} "Timing")
{:.w600}

3.Detailed information of bus stop: is assigned to help user lookup information of all bus routes at the station.

![information]({{ "/assets/img/bus-schedule/information.png" | absolute_url }} "Information")
{:.w600}

After I had a better understanding of key objects, I have listed some key features of the design in order to research.

1. View bus timing, bus station and routes
2. Search (filter by bus stop, route, time range)
3. View detail of bus stop (station)
4. Download route as pdf

## Research

I never design a timetable or anything related to lots of numbers that show on the web page before. Therefore, I try to think as simple as I can and this schedule I imagine it looks like a class timetable or simple calendar.

![research]({{ "/assets/img/bus-schedule/research.jpg" | absolute_url }} "Research")
{:.w1200}

## User flow

The user goal is finding precisely the bus timing which matched route to the bus stop. So the design is mainly required to help him achieve this goal.

![user-flow]({{ "/assets/img/bus-schedule/user-flow.jpg" | absolute_url }} "User flow")
{:.w800}

## Moodboard

A mood board is one of the visual deliverables in the design process. It is a collage that generally consists of images, text, and objects that describes the feelings we obtain through the digital products aside from the actual layout of pages.

![moodboard]({{ "/assets/img/bus-schedule/moodboard.jpg" | absolute_url }} "Moodboard")
{:.w1200}

## UI Design

After I decided on the visual style, I applied user flow to moodboard to create a few designs.

#### MAIN VIEW SHOWS ALL ROUTES AND OPERATION HOURS.

![design-home]({{ "/assets/img/bus-schedule/design-home.png" | absolute_url }} "Home")
{:.w1200}

#### FILTER BY BUS STOP, ROUTE OR TIME RANGE.

![design-view-filter]({{ "/assets/img/bus-schedule/design-view-filter.png" | absolute_url }} "Filter")
{:.w1200}

#### APPLIED FILTER.

![design-view-filter-data]({{ "/assets/img/bus-schedule/design-view-filter-data.png" | absolute_url }} "Filter Data")
{:.w1200}

#### VIEW DETAIL OF BUS STOP STATION.

![design-view-detail-station]({{ "/assets/img/bus-schedule/design-view-detail-station.png" | absolute_url }} "Detail")
{:.w1200}

#### HOVER ON INDICATOR

![design-home-hover-info]({{ "/assets/img/bus-schedule/design-home-hover-info.png" | absolute_url }} "Home Hover Info")
{:.w1200}

#### HOVER ON AR/DP

![design-home-hover-info2]({{ "/assets/img/bus-schedule/design-home-hover-info2.png" | absolute_url }} "Home Hover Info")
{:.w1200}
