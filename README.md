# jquery.instagram.js

A jQuery plugin to display your most recent Instagram photos.

This is admittedly a bit of a hack, but a fairly tidy and useful one. Instagram requires an OAuth 2 authentication token to read a user's recent media, but we don't want to bother with OAuth.

# Quick start

* Register your app with Instagram <a href="http://instagram.com/developer/">here</a> and get a <code>client_id</code>
* Tag photos you want to appear using a unique hash tag (E.g., #jane-doe-jquery) 
* Finally, setup one of the scripts in <code>/scripts</code> on your server. <b>This is required because the Instagram API does not support cross origin resource sharing or JSONP.</b> Currently the only option is a Python CGI implementation, however, I intend to provide standalone WSGI and nodejs options shorty. 
* Include <code>jquery.instagram.min.js</code> and <code>jquery.instagram.css</code> 

Then you can create a <code>&lt;div&gt;</code> for your Instagram photos and do something like this:

```javascript
$("#instagram").instagram({
	"client_id": "YOUR_CLIENT_ID",
	      "tag": "YOUR_UNIQUE_TAG",
	    "proxy": "proxy.py"
});

```

For more details and or advanced settings, see the example in <code>/demo</code> or the code. 

# Authors

<strong>Kalan MacRow</strong>

* <a href="https://github.com/kmacrow">https://github.com/kmacrow</a>

# Copyright and license

Copyright &copy; Kalan MacRow, 2013

Licensed under the MIT license. This code is provided "as is", without warranty of any kind.

<a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>


<a href=""></a> 
