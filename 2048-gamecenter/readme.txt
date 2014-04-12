Daniel Pasternak
COMP 20
A4
-------------------------------------------------------------------------------
What Aspects of the Project have been correctly implemented?
- The Index page of the webapp shows the gamecenter scores in descending order
  as specified
- The /scores.json page will show the json content of the scores database
  -To get the scores of just one user, use the following format:
    -   /scores.json?username=<YOUR USERNAME HERE>
- The submit.json API handles post requests. It checks to see if the input
  is a json object with a username field, a grid field, and a score field.
  No further validation is performed

What has not been correctly implemented?
- The entire project spec was implemented

-------------------------------------------------------------------------------
No collaboration on this assingment. Christopher Buecheler's tutorial on
web apps located at cwbuecheler.com/web/tutorials/2014/restful-web-app-
node-express-mongodb/ was referenced to get up to speed on expressjs.

-------------------------------------------------------------------------------
Explain how the score and grid are stored:

the score is stored as a key:value pair in an object that stores all the
state information

the grid is stored as a key:value pair, with the key being "grid", and the 
value another json object detailing the size of the grid, and a list of cells,
their coordinates, their values and their previous position.

-------------------------------------------------------------------------------
explain the modifications needed to send the fnal score and grid to your web
app:

I needed to create a JSON object of the form specified on the comp20 site. In
order to do this, the following code was added to the actuate function in the
game_manager file:
   
    var tm = new Date();
    var tmstr = tm.toUTCString()
    data_to_submit = {"username":"test1", "score": this.score.toString(), "created_at": tmstr, grid:JSON.stringify(this.serialize())};

additionally, a post request was generated immidiately after:

    $.ajax({
       type: "POST",
       url: "http://130.64.221.181:3000/submit.json",

       crossDomain:true,
      
       data:data_to_submit,
       dataType: 'JSON'
    })

