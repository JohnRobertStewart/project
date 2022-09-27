module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getBracket: (req, res) => {
        res.render("bracket.ejs");
    }
  };
  