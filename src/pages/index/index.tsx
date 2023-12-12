import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  ScrollView,
} from "@tarojs/components";
import Taro, { useLoad, useResize, showToast } from "@tarojs/taro";
import { useState, useEffect, useRef } from "react";
import {
  AtTabBar,
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
} from "taro-ui";

import "./index.scss";

export default function Index() {
  const [show, setShow] = useState(false);

  useResize(() => {
    showToast({ title: "useResize" });
  });

  useEffect(() => {
    // setTimeout(() => {
    //   const { route, __data__ } = Taro.getCurrentPages()?.[0] || {};
    //   // 页面发生跳转，不存储
    //   if (__data__ && route == "pages/index/index") {
    //     let stashRootCNList = __data__?.root?.cn || [];
    //     console.log("Taro.__data__", stashRootCNList);
    //     if (stashRootCNList.length) {
    //       Taro.setStorage({
    //         key: "HOME_STASH_ROOT_CN",
    //         data: { data: stashRootCNList },
    //         fail: (err) => console.warn("STASH_ROOT_CN error: ", err),
    //       });
    //     }
    //   }
    // }, 2000);
  }, []);

  useLoad(() => {
    console.log("Page loaded.");
    showToast({ title: "useLoad" });

    setTimeout(() => {
      setShow(true);
    }, 1000);
  });

  const handleCancel = () => {
    setShow(false);
  };

  const onClickBtn = (res) => {
    Taro.navigateBack();
    console.log("res", res);
  };

  return (
    <View className="my">
      {show && (
        <ScrollView scrollX>
          <Swiper
            className="test-h"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            vertical={false}
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View>
                <Image src="https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"></Image>
                <View onClick={() => onClickBtn("按钮1")}>按钮1</View>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View>
                <Image src="https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"></Image>
                <View onClick={() => onClickBtn("按钮2")}>按钮2</View>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View>
                <Image src="https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"></Image>
                <View onClick={() => onClickBtn("按钮3")}>按钮3</View>
              </View>
            </SwiperItem>
          </Swiper>
          <AtActivityIndicator></AtActivityIndicator>
          <AtActivityIndicator color="#13CE66"></AtActivityIndicator>
          <AtActivityIndicator content="加载中..."></AtActivityIndicator>
          <AtActivityIndicator isOpened></AtActivityIndicator>
          <AtActivityIndicator mode="center"></AtActivityIndicator>

          <AtTabBar
            tabList={[
              { title: "待办事项", text: 8 },
              { title: "拍照" },
              { title: "通讯录", dot: true },
            ]}
            onClick={handleCancel}
            current={1}
          />
        </ScrollView>
      )}
    </View>
  );
}
