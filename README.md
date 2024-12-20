﻿
# Frog Stream 🐸 

## Overview  

Frog Stream is a streaming platform owned by the creators. The platform will host para-social interactions while providing a safe space for all users.

### Problem Space
  

Frog Stream is a collectivist alternative to traditional capitalist streaming platforms. Frog Stream provides a safe space for marginalised content creators. Without worrying about revenue from advertisers, creators on Frog Stream will own an equal share in the platform and make business and policy decisions as a community.

### Initialization

#### OBS Set Up
+ File > Settings > Stream
  + **Service:** Custom
  + **Server :** rtmp://localhost:1935/live
  + **Stream Key:** stream
  + click **OK**

+ Tools > Websocket Server Settings
  + [x] *Enabled:* Enable Websocket Server
  + **Server Port:** 4455
  + [ ] *Disabled:* Enable Authentication

+ Add a view of your favourite game in OBS

#### Client: 
This will start the front end client.
```
npm i && npm run dev
```
###### Client/public:
This will start a socket.io live chat server
```
npm i && npm start
```

#### Server:
This will start the back end server.
```
npm i && npm start
```

### Testing Walk Through

- initialize all 3 of client, client/public, and server using npm i
- Open Chrome to 'http://localhost:5173' to view the home page
- click on the Frog Stream logo or refresh the page to see the random generation of Featured Creators on the home page
- click on one of the Featured Creators to open their streaming page
  + not param'd; this will open a generic stream page

- view the output from OBS in the stream video
- input a message to the live chat
+ click the Frog Stream logo once more to return to the home page and view the next Featured Creators

Thank you for testing my app!

### User Profile  

Content Creators:

- connect their OBS studio to the streaming platform

- streams their creative work, social commentary, and gaming to subscribers and followers

- owns an equal share in Frog Stream

- live react to follower & subscriber chatter in the livestream chat


### Features


A __user__ is any creator, subscriber, follower:
- a user can see the featured creators on the home page
- a user can visit other user pages


## Implementation

### Tech Stack

Languages:

- JSX
- Sass
- SQL

Programs:

- VSCode
- Git
- MySQL

Client Libraries:

- react 
- react-router
- react-router-dom
- @mui/material & @mui/styled-engine-sc
- socket.io-client to host real-time live chat
- sqlite3 to store and serve real-time live chat messages

Server Libraries:
- cors
- dotenv
- node-media-server to create the RTMP server
- obs-websocket-js to create an OBS socket
- ws to create a websocket for OBS to connect
- flv.js to format the stream video into FLV

### Sitemap
- HomePage
- CreatorStreamPage

  

### Mockups

  

![Image of low fidelity mockup of Frog Stream](./project-proposal/1924988181033383_page-0001.jpg)

  

### Data

- user-data.json
- OBS video in FLV format
  

### Endpoints

  

- /users to capture the user-data.json
- ws://localhost:4455 to connect to OBS
- /video to capture FLV of OBS video and serve video to client

## Roadmap 

+ [x] Draft the Pages in JSX components

+ [x] add functionality in JS

+ [x] connect OBS

+ [ ] connect socket.io *in progress*

+ [ ] Style with Sass

---

  

# Future Implementations

- Establish video-on-demand hosting with cloudinary
- Scale Frog Stream up with AWS
- Establish FrogStream dot TV domain
- Add soundboard and custom emoji livestream interactions for creators and subscribers to use to interact with each other
- ToS & Code of Conduct for onboarding
- Content creators can collect data on channel performance on their creator dashboard


### Features

Subscribers:
- support their favourite creator directly

- contribute to the creative community

- get notified when a creator is live

- find like-minded creators to follow and support

- use the livestream chat to interact with their favourite creator

Followers:
- beginning their para-social relationship with the content creators

- use chat to interact with the creator

- become subscribers to the creator

A __user__ is any creator, subscriber, follower:
- a user can follow other users
- a user can remove followers & subscribers
- a user can subscribe to creators
- a user can interact with a livestream of a creator

A subscriber can do all of the above and:
- contribute a monthly subscription to the creator

A creator can do all of the above and:
- gain subscribers
- view channel dashboard
- host videos-on-demand (VODs) using YT API


Livestream interactions:
- a user can read and write in the livestream chat
- a subscriber can use personalized art and emojis in the chat
- a user can use a creator's soundboard
- a creator can enable and disable any livestream interaction for their whole audience or for individual users

  

## Implementation

  

### Tech Stack

Client Libraries:

- flv.js
- react-chat-widget
- mixpanel for stream health analysis

Server Libraries:

- node.js
- express
- knex
- cors
- obs-websocket-js
- socket.io
- bcryptjs
- passport.js
- UUIDv4
  


### Sitemap

- HomePage
- RegisterPage
- LogInPage
- UserPage
- CreatorStreamPage
- UserSettingsPage
- CreatorDashboardPage


### Data

  

To be updated.

  

### Endpoints

  

To be updated.

  

## Roadmap

- Create express server enpoints
- Connect express server with react client through cors