# GDG Central Florida - Ionic/Capacitor wizardry with Angular

Starter code for Building an Ionic Application with Angular

## The App

We will be creating a Photo Gallery app that allows you to take photos from your device’s camera and display them in a grid and store them in your device.

## Getting Started

Make sure you have the following installed in your computer:

- Node.js - Download the LTS version [here](https://nodejs.org/en/).
- A code editor – For example [Visual Studio Code](https://code.visualstudio.com/). 
- Ionic CLI – Open your terminal and type `npm install -g @ionic/cli native-run cordova-res`
  - @ionic/cli - the ionic command line tool
  - native-run - is a cross-platform command-line utility for running native app binaries (.ipa and .apk files) on iOS and Android devices.
  - cordova-res - automatically create icon and splash screen resources it was developed for use with Cordova, but Capacitor and other native runtimes are supported.
- Xcode – for [iOS app deployment](https://developer.apple.com/xcode/) 
- Android Studio – for [Android app deployment](https://developer.android.com/studio)
- Run `npm install` from the project root.
- Run `ionic serve` in a terminal from the project root.


## Deploying

### Progressive Web App

1. Run `ionic build`
2. Push the `www` folder to your hosting service

### iOS

1. Run `ionic cap add ios`

### Android

1. Run `ionic cap add android`

## Reference 

- [Presentation slides](shorturl.at/kou05)
- [Codelab documentation](https://docs.google.com/document/d/1wK08fBhKyhz88bx7-mIDXQSTZAq5tmko/edit?usp=sharing&ouid=103343524775880660503&rtpof=true&sd=true)
