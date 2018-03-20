
var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
      friendData.push(req.body);
      console.log('thanks for submitting');
      var comparer = [];
      var minDiff = 50;
      var match = 0;
      for (var i = 1; i < 11 ; i++){
        comparer.push(req.body['question'+i]);
      }
      for (var i = 0; i < friendData.length-1; i++)
      {
        var comparee = [];  
        for (var j = 1; j <11; j++) {
          comparee.push(friendData[i]['question'+j]);
        }
        var diff = 0;
        for (var j = 0; j <comparer.length; j++) {
          diff +=Math.abs(comparer[j]-comparee[j]);
        }
        if(diff<minDiff){
          minDiff=diff;
          match = i;
        }
      }
      res.json(friendData[match]);
  });

};
