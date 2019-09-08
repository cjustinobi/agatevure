---
title: How to Configure CircleCI in Android
description: >-
  As part of the recent trends in software development best practices. The need
  for a Continuous Integration tool cannot be over-emphasized. You might want to
  ask what’s Continuous Integration? 
date: 2019-09-06T08:56:03.075Z
update: 2019-09-06T08:56:03.089Z
---
As part of the recent trends in software development best practices. The need for a Continuous Integration tool cannot be over-emphasized. You might want to ask what’s Continuous Integration? 

**Continuous Integration** sometimes called CI is a development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration can then be verified by an automated build and automated tests. 

That means you need to write test for your codes. You can checkout my other post on how to write test in android.

There are several Continuous Integration tools like Buddy, TeamCity, Jenkins, travisCI, bamboo, gitlabCI, circleCI, codeship, codefresh, nevercode.io, virtual studio app center, fastlane, bitrise.io, buddybuild but this post will be focused on CircleCI

**CircleCI** is a continuous integration tool used by software teams allowing them to  build, test and deploy applications easier and quicker on multiple platforms.

Alright let’s get to work. Here are the steps involve in configuring your android project to CircleCI

**Step 1**

Signup on CircleCI  [here](https://circleci.com/signup)

You have the option to signup with your github or bitbucket account depending on which platforms you have your projects.

![circleci signup](/images/uploads/screenshot-2019-09-04-at-10.39.03-pm.png "circleci signup page")

**Step 2**

Login into your circleci account.  On the left side of the menu select Add Projects. All the projects you have on your github or bitbucket account depending on which one you are currently logged in with will be displayed for you to make your selection.
I have a simple android app which I already created for this tutorial on my github account. 

Note: You can integrate CircleCI on both new and existing projects. Just login to your CircleCI dashboard

Click on the project you want to integrate CircleCI

![circleci dashboard](/images/uploads/screenshot-2019-09-05-at-1.19.24-am.png "circleci dashboard")

**Step 3**

Create a `.circleci` folder on the root of the project in android studio and add a `config.yml`

![Android studio circleci config](/images/uploads/screenshot-2019-09-05-at-8.54.49-am.png "Android studio circleci config")

**Step 4**

Populate the `config.yml` with the contents of the `sample.yml` as shown below
<https://circleci.com/docs/2.0/language-android/>

[Here is the code on my github repo](https://github.com/gconnect/CircleCiExample/blob/master/.circleci/config.yml)

![circleci config file](/images/uploads/screenshot-2019-09-06-at-10.13.05-am.png "circleci config file")

**Step 5**

Update the `sample.yml` file to suit your project configuration. This section is very important because it kept me for days. I was building and it was failing without knowing that it’s something as small as not changing the docker image android-api version from 25 to the api level of my project. Please take note of that. I knew several of this article exist online but if you follow the tutorials without taking your time to read and understand the documentations, you might encounter some problems.

**Step 6**

Push your changes up to Github. Finally click the Start building button on your CircleCI dashboard This will launch your project on CircleCI and make  webhooks listen for updates to your work.

**Errors/ Build failed**

If your configuration `.circleci` folder and your `config.yml`file is not in the right path in your project. Your build will fail and you will get the below error.
To run a successful build, you need to take note of the following points
•Make sure your working directory is set to your current project working directory in the config file. If your build fails you see something like this.

![circleci build failure](/images/uploads/screenshot-2019-09-05-at-1.34.57-am.png "circleci build failure")

•Be sure to change the docker image from the default from the sample config file to suit the android api level of your project. You can check your app.build or gradle file to be sure, use the compileSdkVersion of your project. If your android api is not same as the docker image api you will get this error or mac/linux it might be certificate not accepted

![permission denied](/images/uploads/permissiondenied.png "permission denied")

•Make sure the `.circleci` is all small caps. Previously mine was carmel case and it was failing. If you put the`.circleci` directory in the wrong path you will get the no configuration found error. Be case sensitive and be sure to put it on the root of the project file structure.

![](/images/uploads/screenshot-2019-09-05-at-1.34.57-am.png)

**Build success**

Hurray, you finally did it. How do you feel about the green build success message. Excited I guess! Keep building

![circleci success build](/images/uploads/screenshot-2019-09-05-at-2.42.01-am.png "circleci success build")

Click on the succes message to get the detailed view of the build summary

![circleci build success](/images/uploads/screenshot-2019-09-05-at-2.18.02-am.png "circleci build success")

You can checkout the project on github here <https://github.com/gconnect/CircleCiExample>

If you have any question you can reach out to me on twitter and any of my social handles.Thanks for reading!
