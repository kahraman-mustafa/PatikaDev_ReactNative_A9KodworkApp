# PatikaDev - React Native Kursu - Redux Ders Sonu Kendin Yap Projesi

PatikaDev ReactNative kursu 7. dersi redux kapsamında yaptığım ders sonu kendin yap çalışmasıdır. Muse websitesinin iş ilanlarını paylaştığı API'ndan faydalanılarak geliştirilen, güncel iş ilanlarının listeletilmesi, favoriye ekleme, başvuru yapma ve bunların offline olarak bir dahaki açılışta listelenmesi gibi bir takım fonksiyonlar/özellikler barındıran bir çalışmadır.

![KODWORK React Native Uygulaması](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A9KodworkApp/master/A9KodworkApp.gif)

- State management: **@reduxjs/toolkit, createAsyncThunk**
- Figma ile tasarım,
- **Colors.ts** dosyası ile özel tema
- Özelleştirilmiş navigasyon başlıkları/ikonları
- **react-native-render-html** ile static HTML rendering,
- **Regex** ile HTML pre-processing,
- Vscode-eslint-prettier settings ayarları özelleştirme,
- **Drawer & Stack nested navigation**
- **Vector icons**
- **Navigation listener** (beforeRemove)
- Custom **back button handling** (Android)
- Persisted state/offline storage: **redux-persist**, **asyncstorage**
- Network handling: **net-info**, custom hook **useNetworkListener**
- Notification on screen: **Toast** component

PatikaDev Redux kursunun ToDo App dahil ilk üç dersi tüm uygulamalar yapılarak ReactNative kursunda anlatıldığı haline göre güncellenmiş olan reduxjs/toolkit ve ilave olarak createAsyncThunk kullanımı pratik olarak öğrenilmiş ve bu uygulamada pekiştirilmiştir.

Baştan sona Figma ile tasarım, Colors.ts gibi bir dosyadan özelleştirilmiş renk-tema kullanımı, özelleştirilmiş navigasyon başlıkları/ikonları, reduxjs/toolkit ile state management, createAsyncThunk kullanımı, react-native-render-html ile statik HTML rendering, regex ile HTML pre-processing, vscode-eslint-prettier settings ayarları özelleştirme, nested navigation kullanımı, vector icons kullanımı, navigation listener kullanımı (beforeRemove) ile navigasyon geçişlerin yakalama ve bu aşamada işlemler gerçekleştirme, custom back button handling ile Android'de uygulama çıkışı öncesi uyarı gösterimi.

Uygulamaya redux-persist kütüphanesi ile offline çalışabilme kabiliyeti kazandırıldı. Jobs state içindeki favorites ve applications stateleri reducers içindeki persistedReducer'a whitelist olarak tanımlanıp AsyncStorage kütüphanesi de storage olarak ayarlanıp, persist etmeleri yani uygulama kapanıp açılldıktan sonra da son değerleri ile açılmaları sağlandı. redux-persist kütüphanesi expire, eas security gibi ilave kütüphanelerle de desteklenebilir ileride.

Net-info kütüphanesi ile connection listener özellikleri eklendi. Listener kod bloğu utils içine useEffect ile ilk açılışta subscripe edecek ve kapanırkan unsubscribe edecek şekilde useNetworkListener olarak eklendi, Router.tsx içinde import edildi. Bağlantı özelliklerinde değişiklikler olduğunda 3. parti Toast componenti kullanılarak bildirim verilmesi sağlandı. Jobs apiden çekilmeden internet bağlantısı kesilirse/yoksa ve sonradan bağlantı kurulursa bu durumda apiden veri çekilmesini tetiklemek için useNetworkListener içine gerekli mantık kontrol yapısı eklendi. Gösterimdeki hataları gidermek için extraReducer içinde gerekli düzenlemeler yapıldı. Son olarak Jobs sayfasında seçilen page bilgisi jobs staten içine eklenerek offlinedan online geçilirken yapılan api tetiklemesinde o anki page değerinin kullanılması sağlandı. Page persist olmayan bir yapıda tutuldu.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
