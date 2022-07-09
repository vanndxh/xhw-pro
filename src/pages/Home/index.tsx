import { Grid, NavBar } from "antd-mobile";
import BottomBar from "@/components/BottomBar";
import TransparentCard from "@/components/TransparentCard";
import { webData } from "./constants";
import styles from "./index.less";
// import { useState } from "react";

function Home() {
  const axios = require("axios").default;
  // const [test, setTest] = useState();
  axios
    .get("http://localhost:8088/home/test")
    .then((res: any) => console.log(res));

  return (
    <div className={styles["home"]}>
      <div className={styles["home-top"]}>
        <NavBar back={null}>主页</NavBar>
      </div>

      <div className={styles["home-content"]}>
        <div className={styles["home-content-web"]}>实用网站推荐</div>
        <Grid columns={2} gap={20}>
          {webData.gameWeb.map((i, index) => {
            return (
              <Grid.Item
                key={index}
                onClick={() => {
                  window.open(i.url);
                }}>
                <TransparentCard borderRadius={16} bgOpacity={0.3}>
                  <div className={styles["web-card"]}>
                    <p className={styles["web-card-title"]}>{i.title}</p>
                    <p className={styles["web-card-desc"]}>{i.desc}</p>
                  </div>
                </TransparentCard>
              </Grid.Item>
            );
          })}
        </Grid>
      </div>

      <BottomBar />
    </div>
  );
}

export default Home;
