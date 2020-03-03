---
title: Outreachy Internship Experience with Wikimedia
description: >-
  The internship has provided me with a great learning experience. One of the
  fears I had about the internship that turned out not to come true was the fear
  of not being able to complete the project.
date: 2020-03-03T12:18:20.868Z
update: 2020-03-03T12:18:20.886Z
---
This was due to the fact that I was almost new to kotlin at the time of the internship and the project makes use of Kotlin and the architectural design pattern used for the project was MVP which was not something I was familiar with at the time.

At the start of the internship things were a bit slow on my part since I was still trying to familiarize with the project. At some point I was scared I might not be able to complete the project task designed for the internship, especially the major top priority task. After one month into the internship things started taking shape. As I was making more than one PR in a day and was getting acquainted with Model View Presenter (MVP) so as to do a proper migration to Model View ViewModel (MVVM).

Technically, during the course of the internship I got a better understanding of kotlin, MVP, MVVM, Coroutines and Room.Even though these terms were not new to me but it became much clearer. All this wouldn’t have been possible if not for the help of my mentorsUjjwal Agrawal and Victor Vicari.They were both there for me whenever I needed their help. They are the best set of mentors I have had. In fact they were the first set of mentors I have had since I started programming. All thanks to Outreachy for the opportunity to have such great mentors.

Outreachy did not just make me feel confident in making open source and free software contributions but also helped me build up my remote working skills. Now I feel more confident and comfortable working remotely with the Outreachy remote internship experience. Now I feel so confident contributing to any open source project. If I can contribute to the Wikimedia project why can’t I contribute to any open source project out there. Now I am no longer confused on where and how to begin contributing to a project. The outreachy internship opportunity it’s one of the best thing that has happen to me.



Now I am confident in working with a diverse team remotely, irrespective of different timezones. With a proper understanding of each team timezone we can always have a unifying point where teams can meet and talk about the progress of the project.



The internship helped me to be a better communicator. Whenever I am stuck I reach out to my mentors and always seek their opinion on what I am doing to ensure I am on the right path. I don’t keep my work challenge to myself. I discuss my challenges and progress with the team. Daily checkings were paramount to my project as it's common with most teams. We always have checking Monday - Thursday where we discuss the project throughout the period of the internship, important public holidays were also observed.



I was able to convert the existing code from MVP to MVVM. This entails changing most parts of the codebase from MVP to MVVM. Rewriting/refactoring some part of the code and deleting unused codes. With the Migration from MVP to MVVM the code became more shorter and readable with the comments. Migration to MVVM also helped reduce the app crashes caused by heap dump and leaks. I added offline features to the explore tab. The campaign list and course list. I refactored the dependencies to use Kotlin buildSrc. I designed and implemented the campaign details pages with four tabs for home, course, articles and student tabs, consumed the available APIs. I also created some mockup designs to add more items on the campaign list, course list and created empty state design with illustrations which are yet to be implemented.

Here is a list of the PRs I made during the internship

* [Setup local database](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/227)
* [Manage gradle dependencies with kotlin buildSrc](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/271)
* [Campaign List Page offline feature](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/283)and MVVM Migration
* [Course List page offline feature and MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/286)
* [My dashboard MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/285)
* [Course details Home tab MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/317)
* [Course details Student tab MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/318)
* [Course details Article tab MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/319)
* [Course details Uploads tab MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/320)
* [Course details Activity tab MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/321)
* [Seperate Koin modules](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/322)
* [Media details page MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/337)
* [CampaignList details page mockup](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/338)
* [CampaignList, CourseList and dashboard refactor](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/339)
* [Profile Page MVVM migration](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/344)
* [Campaign details course tab implementation](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/347)
* [Campaign details Articles tab implementation](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/347)
* [Campaign details Student tab implementation](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues/349)
* Camapign details home tab implementation

Given the duration of the internship there were some tasks listed in the project which I was not able to implement because of time. However, I would still like to work on them even after the internship ends. And it’s still open for anyone who would like to contribute to the project. Here are some of the TODOs for the project:

* Join a course that does not require a passcode
* As a program organizer create account for editors
* Assign yourself articles for a course you are in
* Add a list of my articles. Articles assigned to me in the course page
* There are a few bugs in the app which need to be fixed. This needs to be found in the [issues](https://github.com/WikiEducationFoundation/apps-android-wikiedudashboard/issues)

In conclusion, my profound gratitude goes to Outreachy organizers and Wikimedia staff mentors who made this internship worthwhile for me.
