import fs from 'fs';

/** 
 * @file 获取点赞数
 * @type GET
 * @path /mine/setting/likeAmount 
 */
export const getLikeAmount = (req, res) => {
  const likeData = JSON.parse(fs.readFileSync("./src/services/database/like.json"));
  const newLikeData = {
    ...likeData,
    amount: likeData.amount + 1,
  };
  if (req.query.isAdd == 1) {
    fs.writeFileSync("./src/services/database/like.json", JSON.stringify(newLikeData));
  }

  res.send({
    "code": 200,
    "data": req.query.isAdd == 1 ? newLikeData : likeData,
    "message": "success"
  });
}; 
