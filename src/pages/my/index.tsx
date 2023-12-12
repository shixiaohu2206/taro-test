import Taro from "@tarojs/taro";
import { AtImagePicker } from "taro-ui";
import { useEffect, useState } from "react";

export default () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          url: "https://gw.alicdn.com/imgextra/i1/O1CN014Nxfx61k5xr4PpJYp_!!6000000004633-0-tps-1860-1296.jpg",
        },
        {
          url: "https://gw.alicdn.com/imgextra/i1/O1CN014Nxfx61k5xr4PpJYp_!!6000000004633-0-tps-1860-1296.jpg",
        },
        {
          url: "https://gw.alicdn.com/imgextra/i1/O1CN014Nxfx61k5xr4PpJYp_!!6000000004633-0-tps-1860-1296.jpg",
        },
      ]);
    }, 1500);
  }, []);

  const onChange = () => {};

  return (
    <>
      <AtImagePicker files={data} onChange={onChange} />
    </>
  );
};

// import { View, Text } from "@tarojs/components";
// import Taro, { useLoad } from "@tarojs/taro";
// import { useState, useEffect } from "react";

// import "./index.scss";

// export default function Index() {
//   useLoad(() => {
//     console.log("Page loaded.");
//   });

//   const [name, setName] = useState("首页");

//   useEffect(() => {
//     setTimeout(() => {
//       setName("静态缓存静态缓存静态缓存静态缓存静态缓存");
//     }, 1000);
//     setTimeout(() => {
//       const { __data__ } = Taro.getCurrentPages()?.[0] || {};

//       // 页面发生跳转，不存储
//       if (__data__) {
//         let stashRootCNList = __data__?.root?.cn || [];

//         console.log("Taro.__data__", stashRootCNList);

//         if (stashRootCNList.length) {
//           Taro.setStorage({
//             key: "HOME_STASH_ROOT_CN",
//             data: { data: stashRootCNList },
//             fail: (err) => console.warn("STASH_ROOT_CN error: ", err),
//           });
//         }
//       }
//     }, 2000);
//   }, []);

//   return (
//     <View className="index">
//       <Text>{name}</Text>
//     </View>
//   );
// }
