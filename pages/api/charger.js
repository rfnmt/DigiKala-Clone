import data from "../../src/Data/Chargers.json";

export default (req, res) => {
  res.status(200).json({ data });
};
