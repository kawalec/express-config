exports.store = (req, res) => {
  req.flash("form", `Data from ${req.body.name}.`);
  res.redirect("/");
  //   res.json({
  //     name: req.body.name,
  //     phone: req.body.phone,
  //     message: req.body.message
  //   });
};
