---
title: Modifying Expectation
description: >-
  This is the 7th week so far in the Outreachy internship and first half of the
  internship. Here is my progress report for the first half of the internship.
date: 2020-01-22T13:20:57.886Z
update: 2020-01-22T13:20:57.909Z
---
**What were your original internship project timelines?**

The timeline for the project is 3 months internship period from 3rd December, 2019 - 3rd March 2020

**What goals have you met?**

In the first half of the internship period I realized that some of the initial goals might not be completed before the of the internship. This therefore calls for adjustment of the project goals, timelines and deliverables. At first the goal might seem achievable given the time frame but as I proceed I realized that some of the goals might have to be adjusted to be more realistic. Below are some of the goals I have accomplished.

* Taking feedback from users about the current app
* Adding new features
* Fixing bugs
* Improving the code quality of the app
* Local Database to add offline support in App (Still working on it)
* Migrate app from MVP to MVVM architecture(Still working on it)

**What have you accomplished in the first half of your internship?**

So far since the internship, I have been able to achieve the following;

* Improved the code quality of the app by removing added coded strings where present
* Removed hard-coded version number from the settings page
* Created kotlin BuildSrc for managing the dependencies
* UI improvement mockup design: my dashboard fragment, explore fragment, and course details page (student list, article list)details, profile page
* Created mockups for empty state Illustrations
* Implemented Offline features for CampaignList
* Migrated CampaignList from MVP to MVVM
* Implemented Offline features for CourseList
* Migrated Course list from MVP to MVVM
* Created some issues in the project that am still working on.

Below are the links to some of my contributions during the first half of the internship

* [CampaignList and CourseList Offline Feature and MVVM Migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/pull/298)
* [Courselist offline issue](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/286)
* [Make version code dynamic](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/270)
* [CampaignList offline issue](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/283)
* [Use Kotlin BuildSrc to manage dependencies](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/271)
* [UI Improvement mockup design](https://www.figma.com/file/6gYtosgx6qt1RKRw922rfP/wikidashboard)
* [UI Improvement for dashboard fragment issue](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/262)
* [UI Improvement for explore fragment issue](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/263)
* [UI Improvement for course details page](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/264)
* [UI improvement for student list page](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/265)
* [UI Improvement for Articles List page](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/266)
* [Fix memory leaks on courseupload fragment sub-issue](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/268)

**What project goals took longer than expected?**

During bug fixing task, I encountered a bug that took up to a week to resolve. I also made some UI improvements, created mockups which went through some series of reviews. And most importantly the task that took me longer than expected was the implementation offline support for CampaignList and CourseList page while also migrating those pages to MVVM from MVP. Got review from one of my mentors that I need to make the code more architectural in the cause of doing that bug was introduced into the code and the app was crashing. It took me some days to realise that it was a minor try and catch issue, the exception type I was using was causing the crash meanwhile I had already refactored the code back to the former state. After detecting the bug, I had to write a cleaner code.

**Why did those project goals take longer than expected?**

The project goal took longer than expected because I was new to MVP design architecture. I needed to understand how MVP works to be able to do a proper migration and I was also implementing the offline feature for the app alongside.

In the processing of Migrating from MVP to MVVM I realised there were more pages to be migrated than I thought.

**What would you do differently if you were starting the project over?**

If i was starting the project over I would follow best practice. Already the current state of the project is already moving in that direction. I would create a single activity application what less of activities and more fragments, GenericListAdapter and some others I would have mentioned but they are already used in the project.

**Which original goals needed to be modified?**

The following are the original goals that needed to be modified

* Taking feedback from users about the current app
* Adding new features
* Fixing bugs
* improving the code quality of the app
* Email and communicate with users using the app for getting feedback.
* Add a list of my articles (articles assigned to me) on the course page.
* As a program organizer, create accounts for edit-a-thon participants
* Join a course (that does not require a passcode or require a passcode)
* Assign yourself s for a course you are in.
* Campaign Details Page
* Local Database to add offline support in App
* Migrate app from MVP to MVVM architecture

**What is your new plan for the second half of the internship?**

Here are the new goals for the project

* Taking feedback from users about the current app
* Adding new features
* Fixing bugs
* Improving the code quality of the app
* UI improvement of the app
* Campaign Details Page
* Local Database to add offline support in App
* Migrate app from MVP to MVVM architecture
* Update the app on playstore

If time permit would add some more features not listed here.

In conclusion, I have learnt not to under-estimate a task,If I am not sure of the duration it will take I will fix a timeline that will not put me under pressure.
