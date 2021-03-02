import data from "../../src/Data/SuperMarketOffers.json";

export default (req, res) => {
  res.status(200).json({ data });
};
