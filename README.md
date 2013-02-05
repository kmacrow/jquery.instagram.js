# jquery.instagram.js

A jQuery plugin to display your most recent Instagram photos.

This is admittedly a bit of a hack, but a fairly tidy and useful one. <b>Proceed with caution, at your own risk.</b> Instagram requires an OAuth 2 authentication token to read a user's recent media, but we don't want to bother with OAuth.

# Quick Start 

* Register your client with Instagram and get a <code>client_id</code>
* Figure out your numeric <code>userid</code> by querying the <code>/users/search</code> API endpoint with your Instagram user name. 
* Tag photos you want to appear with a unique hash tag (this is how we circumvent authentication!) 
* Finally, setup a CGI script on a server you own that will GET and return the content of an arbitrary URI passed to it in the <code>uri</code> query string parameter. <b>This is required because the Instagram API does not support cross origin resource sharing.</b> For liability reasons I don't include a such script, but a few lines of Python will do it.   

Then you can create a layer for your Instagram photos and do something like this:

```javascript
$("#instagram").instagram({
	"client_id": "YOUR_CLIENT_ID",
	"userid": "YOUR_NUMERIC_USERID",
	"tag": "YOUR_UNIQUE_TAG",
	"display": 5,
	"proxy": "/cgi-bin/proxy.py"
});

```

For more details and or advanced settings, see the code and demo.
