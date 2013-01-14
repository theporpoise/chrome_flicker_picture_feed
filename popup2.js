// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var req = new XMLHttpRequest();
req.open(
    "GET", "http://api.flickr.com/services/feeds/photos_public.gne/?id=91177882@N07&format=xml",
    true);
req.onload = showPhotos;
req.send(null);

function showPhotos() {
  var photos = req.responseXML.getElementsByTagName("link");
	length = photos.length
	photoarray = []
	for (var i = 0; i<length; i++){
		if (photos[i].getAttribute("type") == "image/jpeg"){
			photoarray.push(photos[i])
		}
	}

  for (var i = 0, photo; photo = photoarray[i]; i++) {
    var img = document.createElement("image");
    img.src = constructImageURL(photo);
    document.body.appendChild(img);
  }
}

// See: http://www.flickr.com/services/api/misc.urls.html
function constructImageURL(photo) {
	//if photo.getAttribute("type") == "image/jpeg"
	//	return photo.getAttribute("href")
	//else:
	return photo.getAttribute("href")
}