import data from "../../src/Data/GameCate.json";

export default (req, res) => {
  res.status(200).json({ data });
};
