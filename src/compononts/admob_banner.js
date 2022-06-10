import React from "react";
import { Platform, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
export default function BannerAd() {
  const unitID = Platform.select({
     ios: "ca-app-pub-1209942377805776/7199376084",
    android: "ca-app-pub-1209942377805776/8979361614",
  });
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AdMobBanner
        adUnitID={unitID}
        bannerSize="fullBanner"
        servePersonalizedAds={true}
        style={{
          padding: 30,
        }}
      />
    </View>
  );
};