
function set_sidebar_wrapper_height() {
    $('#sidebar-wrapper').css('height', $('#content-wrapper').css('height'));
}


$(document).ready(function() {


    set_sidebar_wrapper_height();

    floatingMenu.add('sidebar',
    {
        // Represents distance from top or
        // bottom browser window border
        // depending upon property used.
        // Only one should be specified.
        targetTop: 200,
        // targetBottom: 0,
        // prohibits movement on x-axis
        prohibitXMovement: true,

        // Remove this one if you don't
        // want snap effect
        snap: true
    });

    $("#the-marsh-map").gMap({
        //address: "The Marsh, 15000 Minnetonka Boulevard, Minnetonka, MN 55345",
        //(44.937857, -93.470081)
        latitude: 44.937857,
        longitude: -93.470081,
        zoom: 13,
        controls: ["GSmallMapControl", "GMapTypeControl"],
        scrollwheel: false,
        maptype: G_HYBRID_MAP,
        html_prepend: '<div class="gmap_marker">',
        html_append: '</div>',
        markers: [{
          latitude: 44.937857,
          longitude: -93.470081,
          html: "<address>The Marsh<br/>15000 Minnetonka Boulevard <br/>Minnetonka, MN 55345<br/><br/><a class='external' href='http://www.themarsh.com/'>http://www.themarsh.com/</a></br><a class='external' href='http://goo.gl/maps/PUtQ'>Map it in Google Maps</a></address>"
          }]
    });

    $("#country-inn-map").gMap({
        //address: "210 Carlson Parkway North, Plymouth, MN",
        //(44.981313, -93.461133)
        latitude: 44.981313,
        longitude: -93.461133,
        zoom: 13,
        controls: ["GSmallMapControl", "GMapTypeControl"],
        scrollwheel: false,
        maptype: G_HYBRID_MAP,
        html_prepend: '<div class="gmap_marker">',
        html_append: '</div>',
        markers: [{
          latitude: 44.981313,
          longitude: -93.461133,
          html: "<address>Country Inn and Suites – Plymouth<br/>210 Carlson Parkway<br/>Plymouth, MN 55447<br/><br/>+1 (763) 473-3008 </br><br/><a class='external' href='www.countryinns.com/plymouthmn'>www.countryinns.com/plymouthmn</a></br><a class='external' href='http://goo.gl/maps/tHHu'>Map it in Google Maps</a></address>"
          }]
    });
    
    $('a.nudge').hover(function() { //mouse in
      $(this).animate({ paddingLeft: '6px' }, 150);
    }, function() { //mouse out
      $(this).animate({ paddingLeft: 0 }, 150);
    });

});