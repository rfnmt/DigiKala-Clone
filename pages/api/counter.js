export default (req, res) => {
  let today = new Date().getTime();
  let remaining = today + 864_000_000;

  res.status(200).json({ remaining });
};
