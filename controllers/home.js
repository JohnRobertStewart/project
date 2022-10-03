


module.exports = {
    getIndex: (req, res) => {

      res.render("index.ejs");
      console.log(req.sessionID);     
    },
    getBracket: (req, res) => {
      res.render("bracket.ejs");
      console.log(req.sessionID);
  }
  };

 
  