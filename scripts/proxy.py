#!/usr/bin/env python

'''
	Copyright (C) Kalan MacRow, 2013

	This code is distributed with jquery.instagram.js 
	under the MIT license.

	https://github.com/kmacrow/jquery.instagram.js
'''

import os
import cgi
import sys
import cgitb
import urllib2

 
# Base URL for Instagram API endpoints
INSTAGRAM_BASE = 'https://api.instagram.com/v1/'

# Add acceptable origins here...
ACCEPT_ORIGINS = ['http://localhost',
		   		 'http://localhost:8888',
		   		 'http://localhost:8080']

# Initialize CGI with JSON output
cgitb.enable()
form = cgi.FieldStorage()
print "Content-Type: application/json"

# Support cross origin resource sharing
origin = os.environ.get('HTTP_ORIGIN')
if origin in ACCEPT_ORIGINS:
	print "Access-Control-Allow-Origin: %s" % origin

# empty line after headers
print

client_id = form.getfirst('client_id', None)
tag_name  = form.getfirst('tag', None)

if not client_id or not tag_name:
	print '{"error":"client_id and tag required."}'
	sys.exit(0)

# Get the data from Instagram
stream = urllib2.urlopen(INSTAGRAM_BASE + 'tags/' + tag_name \
							+ '/media/recent/?client_id=' + client_id)

print stream.read()
