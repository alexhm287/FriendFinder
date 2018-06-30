// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    var newSeeker = req.body;
    var seekerScores = newSeeker.scores;
    var minDiff = 100; 
    var bestMatch;

    for (var i = 0; i<friendData.length; i++ ) {
        var friend = friendData[i];
        var scores = friend.scores; 
        var totalDiff = 0;

        for (var j = 0; j<scores.length; j++ ) {
          var fs = scores[j];
          var ss = seekerScores[j];
          var diff = parseInt(fs) - parseInt(ss); 
          diff = Math.abs(diff);
          totalDiff += diff;
        }
        if (minDiff > totalDiff) {
            minDiff = totalDiff;
            bestMatch = friend;
        }
 }
      console.log(bestMatch);

    friendData.push(newSeeker);
    var response = 
      {"name":bestMatch.name,"photo":bestMatch.photo,"friendDifference":minDiff}
    
    res.json(response);
  
  }
);

 
};
