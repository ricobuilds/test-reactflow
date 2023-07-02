import localFont from 'next/font/local';

export const outfit = localFont({
  src: [
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-Thin.otf', weight: '100' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-ExtraLight.otf', weight: '200' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-Light.otf', weight: '300' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-Regular.otf', weight: '400' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-Medium.otf', weight: '500' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-SemiBold.otf', weight: '600' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-Bold.otf', weight: '700' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-ExtraBold.otf', weight: '800' },
    { path: '../public/fonts/Outfit_Complete/Fonts/OTF/Outfit-Black.otf', weight: '900' },
  ]
})

export const cal = localFont({
  src: [
    { path: '../public/fonts/Cal_Sans/CalSans-SemiBold.ttf', weight: '600' },
  ]
})