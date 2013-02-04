jquery.instagram.js
===================

jQuery plugin to display your Instagram photos in a Bootstrap carousel.

This is admittedly a bit of a hack, but a fairly tidy and useful one. Instagram requires an
OAuth 2 authentication token to read a user's recent media, but we don't want to bother with
OAuth. All you'll need to do is register your client with Instagram and get a <code>client_id</code>.
Next you'll need to figure out your numeric <code>userid</code>. You can find this by querying
the <code>/users/search</code> API endpoint with your Instagram user name. The <code>userid</code> will be embedded in the response. Finally, you'll need to tag photos you want to appear in the
carousel with a unique hash tag (this is how we circumvent authentication!)

Then you can simply create a layer for your carousel and do something like this:

```javascript
$("#instagram").instagram({
	"userid": "xxxxxxxxx",
	"tag": "snoopdog",
	"client_id": "yyyyyyyyyyyyyyyyyyyyyyy"
});

```

For more details and or advanced settings, see the code and demo.
