var map;
function initialize() {
    var mapOptions = {
        zoom:12,
        center:new google.maps.LatLng(40.890204, -73.985128)
    };
    map=new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
}
google.maps.event.addDomListener(window,'load',initialize);

