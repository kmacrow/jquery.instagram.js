#
# jquery.instagram
# Copyright (C) Kalan MacRow, 2013
# This code is MIT licensed <http://opensource.org/licenses/MIT>
#

DATE=$(shell date +%I:%M%p)

default:
	@echo "Building jquery.instagram..."
	@uglifyjs jquery.instagram.js -nc > jquery.instagram.min.js
	@echo "jquery.instagram successfully built at ${DATE}."
	