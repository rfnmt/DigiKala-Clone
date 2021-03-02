import data from "../../src/Data/Mobile.json";

export default (req, res) => {
  res.status(200).json({ data });
};
