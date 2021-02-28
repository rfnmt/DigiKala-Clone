import data from "../../src/Data/SpecialOffers.json";

export default (req, res) => {
  res.status(200).json({ data });
};
