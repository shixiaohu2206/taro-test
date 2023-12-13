import { View } from "@tarojs/components";
import Taro, { useLoad, useResize, showToast } from "@tarojs/taro";

import "./index.scss";

export default function Index() {
  useResize(() => {
    showToast({ title: "useResize" });
  });

  useLoad(() => {
    showToast({ title: "useLoad" });

    if (Taro.Current.page) {
      Taro.Current.page.onResize = () => {
        showToast({ title: "Taro.Current.page.onResize" });
      };
    }
  });

  return <View className="my">index</View>;
}

// import React, { Component } from "react";
// import { View } from "@tarojs/components";
// import Taro, { useLoad, useResize, showToast } from "@tarojs/taro";

// import "./index.scss";

// class Index extends Component {
//   onResize() {
//     showToast({ title: "Component-onResize" });
//   }

//   render(): React.ReactNode {
//     return <View>index2</View>;
//   }
// }

// export default Index;
