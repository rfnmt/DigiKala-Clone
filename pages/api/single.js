import data from "../../src/Data/Single.json";

export default (req, res) => {
  res.status(200).json({ data });
};
