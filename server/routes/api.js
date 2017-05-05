var express = require('express');
var router = express.Router();
var SERVERURL = "localhost";
var SITE = "test";
var ADMIN_USER_NAME = "Srivani";
var ADMIN_PW = "123admin";
var XMLWriter = require('xml-writer');
var request = require("request");
var jsxml = require("node-jsxml");
/* GET api listing. */
router.get('/token', (req, res1) => {
    //Build the XML payload
		// This will happen differently in different programming languages and depending on what library/module you
		// decide to do it with. Here I'm using a module called xml writer which simplifies the process.
		// To see what xml you need to build for each of the different calls, see the documentation.
		var reqxml = new XMLWriter();
		reqxml.startElement('tsRequest').startElement('credentials').writeAttribute('name', ADMIN_USER_NAME)
			.writeAttribute('password', ADMIN_PW).startElement('site').writeAttribute('contentUrl', '');
		request.post( 
			{
				url: 'http://' + SERVERURL + '/api/2.5/auth/signin',
				body: reqxml.toString(),
				headers: {'Content-Type': 'text/xml'}
			},
			// Express requests take a 'callback' function which will be called when the request has been processed. The
			// response from the server will be contained in the 3rd parameter 'body'.
			function(err, response, body) {
                console.log("Auth token: " + body);
				if(err) {
					var err = err;
				} else {
				console.log("Auth token: " + body);
					var bodyXML = new jsxml.XML(body);
					authToken = bodyXML.child('credentials').attribute("token").getValue();
					console.log("Auth token: " + bodyXML);
				}
				
				
				// Only display the error once
				
			}
		);	
	myObj = {
   "token":authToken,
   
    "options":[ "Ford", "BMW", "Fiat" ]
};

  res1.json(myObj);
});
router.get('/tableau', (req, res) => {
  
    
    	console.log('Requested: workbooks published by');
	var workbooks = [];
	// This is a similar GET request to getting the list of users. The difference is that instead of querying
	// .../users/userid we query .../users/userid/workbooks
	/*request( 
		{
			url: 'http://' + SERVERURL + '/api/2.5/sites/6e718eda-36e8-4b88-82fe-035daaf6578c/users/b5e46a4c-cc57-4e79-b33d-f54102b613d5/workbooks',
			headers: {
				'Content-Type': 'text/xml',
				'X-Tableau-Auth': req.session.authToken
			}
		},
		function(err, response, body) {
			if(err) {
				req.session.err = err;
			} else {
				// The returned xml is similar to the users xml. It contains a <workbooks> element that contains multiple
				// <workbook> elements. We will grab the name attribute from each workbook, store it in an array and 
				// render it in a list in the html.
                console.log('sri'+body)
				var bodyXML = new jsxml.XML(body);
				bodyXML.descendants('workbook').each(function(item, index) {
					workbooks.push('http://localhost/#/site/test/views/Regional/College?');
				});
				for(var i = 0; i < workbooks.length; i++) {
					console.log(workbooks[i]);
				}
			}
			
			// Only display the error once
			req.session.err = null;
		}
	);*/	
      request.post( 
		{
			url: 'http://' + SERVERURL + '/trusted',
			form: { 'username': 'Srivani',
                    'target_site': 'test'}
		},
		// Express requests take a 'callback' function which will be called when the request has been processed. The
		// response from the server will be contained in the 3rd parameter 'body'.
		function(err, response, body) {
			if(err) {
				
			} else {
				 ticket = body;
                 url= 'http://localhost/trusted/'+ ticket +'/t/test/views/Regional/College?:embed=yes&:tabs=yes';
				console.log(body);
               /* res.render("app.components.html", {
				err: req.session.err,
				user: 'http://localhost/trusted/'+ ticket +'/t/test/views/Regional/College?:embed=yes&:tabs=yes',
				userID: userIDs[req.params.user],
				workbooks: workbooks*/
			}
           
				
            });
             	myObj1 = {
                  "test":url,
                  "options":[ "Arts & Sciences", "Business", "Communication","Education","Engineering","Music","Public Affairs","Public Health" ]
};
         res.json(myObj1);
        })
	
 

module.exports = router;