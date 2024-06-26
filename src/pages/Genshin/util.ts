/**
 * 第一次处理数据
 * 原接口数据 -> 只有5星的数据
 */
export const handleRawData = (rawData) => {
  const finalData: Object[] = [];
  let count = 0;
  let preName = "已垫";

  rawData?.map((i) => {
    if (i.rank_type === "5") {
      finalData.push({
        name: preName,
        count: count + 1,
      });
      count = 0;
      preName = i.name;
    } else {
      count++;
    }
  });

  // 最后部分数据处理
  if (count) {
    finalData.push({
      name: preName,
      count: count + 1,
    });
  }

  return finalData;
};
