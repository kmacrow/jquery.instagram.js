/**
 * jquery.instagram.js <https://github.com/kmacrow/jquery.instagram.js>
 * 
 * Copyright (C) Kalan MacRow, 2013
 * A plugin to you embed/display a user's N most recent Instagram photos.
 *
 * This code is MIT licensed <http://opensource.org/licenses/MIT>
*/


(function($)
{

  'use strict';

  $.fn.instagram = function(options) {
    
    var $this = this;

    var settings = {
            'tag': null,
      'client_id': null,
          'proxy': null,
        'display': 5
    };

    // check settings...
    for(var key in settings) {
      if(options.hasOwnProperty(key)
        && typeof options[key] != 'undefined') {
        settings[key] = options[key];
      }
    }

    $.ajax({
      'url': settings.proxy,
      'type': 'GET',
      'dataType': 'json',
      'data': {'client_id': settings.client_id,
               'tag': settings.tag},
      'success': function(data, status, xhr)
      {
        console.log(data);
        var hits = data.data;
        var images = [];

        for(var i = 0; i < hits.length; i++) {
          var hit = hits[i];

          images.push({
            'thumb': hit.images.thumbnail.url,
            'full': hit.images.standard_resolution.url,
            'text': hit.caption.text,
            'created': parseInt(hit.created_time),
            'filter': hit.filter,
            'likes': hit.likes.count,
            'name': hit.user.full_name 
          });
        }

        images.sort(function(a, b){
          return b.created - a.created;
        });

        images = images.slice(0, settings.display);

        console.log(images);

        for(var i = 0; i < images.length; i++) {
          var image = images[i];
          $this.append('<img src="' + image.thumb 
            + '" title="'+image.text+'" onclick="window.open(\''+image.full+'\')" />');
        }

      },
      'error': function()
      {
        console.error('instagram: failed to load.');
      }
    })

  }

})(jQuery);