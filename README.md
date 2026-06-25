# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

```bash
nvm list
 nvm list
->     v20.19.0
       v24.14.1
         system
default -> 20.19.0 (-> v20.19.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v24.14.1) (default)
stable -> 24.14 (-> v24.14.1) (default)
lts/* -> lts/krypton (-> v24.14.1)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.3 (-> N/A)
lts/gallium -> v16.20.2 (-> N/A)
lts/hydrogen -> v18.20.8 (-> N/A)
lts/iron -> v20.20.2 (-> N/A)
lts/jod -> v22.22.2 (-> N/A)
lts/krypton -> v24.14.1

 nvm use v24.14.1
Now using node v24.14.1 (npm v11.11.0)
user1@kuzovkov-pc:~/projects/reactnativelearn/todo-list$ node -v
v24.14.1

npx expo install @react-native-async-storage/async-storage
```


### Build

https://docs.expo.dev/eas/


Install nessesary packages
```bash
npx expo install expo-dev-client

sudo npm install -g eas-cli

```

```bash
eas login
```
Открывется браузер, предлагается залогиниться (например с Google).
Вводим свои данные, имя проекта.

Открывается старница (https://expo.dev/get-started?appId=9a5158e0-a5c9-44e9-9f66-f6d25f763508&appSlug=todo-list&organization=akuzovkovs-team&organizationId=3d256984-b7f2-4e3b-bbbc-bd66ffb0dcf8&account_type=personal&f... ) примерно с таким содержимым:
---------------------------------------------------------------------------------------

Get your project started
￼
Existing project    New project

Connect your project
Run the following command to connect your project and use Expo services:

npx eas-cli init --id 9a5158e0-a5c9-44e9-9f66-f6d25f763508
￼
Create a production build
Run the following command to create a production build:

npx eas-cli build --profile production

--------------------------------------------
￼
```bash
eas login
Waiting for browser login...
If your browser doesn't automatically open, visit this link to log in: https://expo.dev/login?client_id=eas-cli&redirect_uri=http://localhost:39465/auth/callback&response_type=code&code_challenge=4LCTwJjkr36Zx2rtmkk-VKKeQujm9qWYfQAbEZsHpsA&code_challenge_method=S256&state=aSlxiYPrH-iBUnQcR3_GIS22zhKa-UB4tZsPP5kSOTs&confirm_account=true
Logged in
user1@kuzovkov-pc:~/projects/reactnativelearn/todo-list$ npx eas-cli init --id 9a5158e0-a5c9-44e9-9f66-f6d25f763508
✔ Project successfully linked (ID: 9a5158e0-a5c9-44e9-9f66-f6d25f763508) (modified app.json)

eas build --platform android --profile development # тяжелый билд, привязан к expo, нужен для отладки
eas build --platform android --profile preview # получаем apk, не привязанный к expo, можно установить на устройство
eas build --platform android --profile production #нужен для деплоя на Google Play

```
Expo dashboard:
------------------
https://expo.dev/accounts/akuzovkovs-team￼

Billing for a_kuzovkov's team
(akuzovkovs-team)
Current plan
Free
￼
See plans
30 Builds
Builds & Workflows: 1 concurrency
Updates: 1,000 monthly active users
Updates: 100 GiB global edge bandwidth


------------------------
Статус билда проекта
https://expo.dev/accounts/akuzovkovs-team/projects/todo-list/builds/7e7a9f8d-67cf-46bc-b066-f4ecd59da6b5

```bash
npx eas-cli build --profile preview
✔ Select platform › Android
Resolved "preview" environment for the build. Learn more
No environment variables with visibility "Plain text" and "Sensitive" found for the "preview" environment on EAS.



✔ Using remote Android credentials (Expo server)
✔ Generate a new Android Keystore? … yes
✔ Created keystore

Compressing project files and uploading to EAS Build. Learn more
✔ Uploaded to EAS 1s
✔ Computed project fingerprint

See logs: https://expo.dev/accounts/akuzovkovs-team/projects/todo-list/builds/7e7a9f8d-67cf-46bc-b066-f4ecd59da6b5

Waiting for build to complete. You can press Ctrl+C to exit.

✔ Build finished

  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  █ ▄▄▄▄▄ █▀█▀█▄▄▀▀▀▀█▄▀█▀▄▄ █▀▄█ ▄▄▄▄▄ █
  █ █   █ █▀▀▀██▀ ▀█▀█ ▄▄ ▄▄▀ ▀ █ █   █ █
  █ █▄▄▄█ █▀ █▄ ▀█▀▄█▄▄▀  ▄▀ ▀▀ █ █▄▄▄█ █
  █▄▄▄▄▄▄▄█▄▀ ▀ █▄█▄█▄▀▄▀▄█▄█ █ █▄▄▄▄▄▄▄█
  █▄   ▄▀▄  ▄▀▀▄▄▀▄▀▄▄▀ █▄▀█▄ █▀▄█ █ ▀ ██
  █▄▄█▄▄█▄█  ▀▀▄██▄▀▄██▀▀ ▀▀▄▄▄█▀▄▄█ ▄▀▄█
  ██ ▀▀██▄▄█▄▀▀▀▄▀▄▄▄▀▀▀▀▄▀▄▄ █ ▄▄▀▄▄ ▀▄█
  █▀█▄▀▄ ▄▀  ██▀▄▄ ▀█▄█▀ ▄██▄▀  ▀▄  ▀▄▄ █
  █▀▀▄  █▄ █▄▀▀▄▄▀▄▄ ▄ ▀█▄▀▄ █▄ ▄▄█▄▄ ▀▄█
  ██▄▀▀▀▄▄▀██ █▄▄▄  █▄█▄▀ ▀ █ ▄▄ █▀▄█▄▄ █
  █▄▄▄██▄▄▄ █▄▀▄ ███▄▀ ▀██ ▄▄ █▀ ▄ ▄▄▄ ▄█
  █████ ▄▄▀ ▄▄█▀█ ▄▀▄▀█   ▀██▄ ▄   ███▄ █
  █   ▀  ▄ ▄▄  ▀▄▄▄▀ ▄▀ █▄ ▄▄▄▄▀▄▄▀▄▀  ▄█
  █ █▄▀█▄▄ ▄▄▀██▄▄▄▄█ ▀█ ▄▀ █ ▄ ▄█▀█▄█▄ █
  █▄████▄▄▄▀█▀▀▀▄▀▄▀▄▀▀▀█▄▀█▄▄▀ ▄▄▄ ▀▄███
  █ ▄▄▄▄▄ █▄▄██▄█▄▄ █▀▀  ▀█ █▀▀ █▄█ ▄█▄ █
  █ █   █ █ ▄▀▀▄▄▄▄▄   █▀ ▀█ ▄▄   ▄ ▄ ███
  █ █▄▄▄█ █ ▄▄▀▀█ ▄▀███▀▀▀▀██ ▄▀ ▀▄▀▀▄▄ █
  █▄▄▄▄▄▄▄█▄█▄█▄▄▄▄▄▄▄█▄█▄▄▄▄████▄▄▄▄▄▄▄█


🤖 Open this link on your Android devices (or scan the QR code) to install the app:
https://expo.dev/accounts/akuzovkovs-team/projects/todo-list/builds/7e7a9f8d-67cf-46bc-b066-f4ecd59da6b5


```

Сам билд происходит на сервере expo и скачать его можно будет оттуда же
