---
title: "Making API calls with Apollo client in\_Android"
description: GraphQL is a query Language for your API
date: 2019-11-16T18:36:11.767Z
update: 2019-11-16T18:36:11.816Z
---
![]()

GraphQL is a query Language for your API

It is an alternative for the REST APIs. It is not specific for a single platform and works for all type of clients including Android, iOS or web. It stands between your server and client and helps you to query your data in a more optimized way. 

GraphQL helps to address some of the headaches developers face when developing a REST-API and when consuming REST-API

**Apollo Client**

To use GrahpQL on Android you need the Apollo-client. It’s the only client that allows you to consume graphQL data. It will take care of requesting and caching your data, as well as updating your UI.

![](/images/uploads/1_-ifernutg6-6e_fb2u0tea.png)

**Features of GraphQL**

![](/images/uploads/screenshot-2019-11-16-at-8.31.29-am.png)

* Client, driven, you only get what you want
* Avoid doing multiple calls. Incase of rest we have to maintain multiple endpoints
* Universally compatible. Use any build setup and any GRAPHQL API
* Better network performance
* Community driven

**URL Routes vs GraphQL Schema**

An API isn’t useful if it isn’t predictable.

![REST URL](/images/uploads/screenshot-2019-11-15-at-5.58.58-pm.png "Rest URL Route")

In GraphQL, you don’t use URLs to identify what is available in the API. Instead, you use a GraphQL schema:

![GraphQL Schema](/images/uploads/screenshot-2019-11-15-at-5.59.17-pm.png "GraphQL Schema")

**Who is using GraphQL?**

![Companies using GraphQL](/images/uploads/screenshot-2019-11-16-at-9.05.51-am.png "Companies using GraphQL")

**Graphcool is a service that gives you a graphql server**

![Graphcool](/images/uploads/screenshot-2019-11-16-at-8.45.02-am.png "Graphcool")

The **Schema** is the contract between the server and the client

![schema](/images/uploads/screenshot-2019-11-16-at-8.43.04-am.png "schema")

**Required Steps**

* Step 1
npm install
* Step 2
npm install apollo-codegen
* Step 3 Generate Schema
apollo-codegen download-schema link-to-url-endpoint --output schema.json

Now make a file with `.graphql` queries and add following queries:

![GraphQL Query](/images/uploads/screenshot-2019-11-16-at-7.36.16-am.png "GraphQL Query")

Make a directory with name “graphql”under the /main of your project in the same level of java directory and paste both the files. Now rebuild your project and when the build is successful you will see auto generated models in build/generated like shown in following screenshot:

**AllPostQuery**
![AllPostQuery generated file](/images/uploads/screenshot-2019-11-16-at-7.44.02-am.png "AllPostQuery generated file")

**CreatePostMutation**

![createPostMutation](/images/uploads/screenshot-2019-11-16-at-7.45.38-am.png "createPostMutation")

 **Setting up Apollo client**

Apollo-android uses okhttp client for requesting the queries and getting response.

![ApolloClient](/images/uploads/screenshot-2019-11-16-at-7.53.13-am.png "ApolloClient")

**Querying from the client - CreatePost**

![createPost](/images/uploads/screenshot-2019-11-16-at-8.08.30-am.png "createPost")

**Querying from the client - getAllPost**

![getAllPost](/images/uploads/screenshot-2019-11-16-at-8.01.09-am.png "getAllPost")

**Setup UI**

![setup UI](/images/uploads/screenshot-2019-11-16-at-8.12.15-am.png "setup UI")

**Additional Resource**

* <https://medium.com/codingthesmartway-com-blog/rest-vs-graphql-418eac2e3083>
* <https://graphql.org/>
* <https://console.graph.cool/>

You can get the source code [here](https://github.com/gconnect/Android_GraphQL_Apollo)
