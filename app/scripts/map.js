function initialize () {
   

    var kcBishkek = [
        {
            name: '24/7 Офис в отеле Hyatt Regency Bishkek',
            desc: '',
            lat: 42.872811,
            long: 74.591669,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        }, 
        {
            name: 'Офис на проспекте Чуй',
            desc: '',
            lat: 42.854049,
            long: 74.591819,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        },
        {
            name: 'Офис на ул. Киевская ',
            desc: '',
            lat: 42.85673,
            long: 74.59033,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        },
        {
            name: 'Офис в Beta Stores',
            desc: '',
            lat: 42.854667,
            long: 74.592557,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        },
        {
            name: 'Офис Kyrgyz Concept Academy',
            desc: '',
            lat: 42.874588,
            long: 74.593754,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        }
    ];

    var kcOsh = [
        {
            name: '24/7 Офис в отеле Hyatt Regency Bishkek',
            desc: '',
            lat: 42.872811,
            long: 74.591669,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        }, 
        {
            name: 'Офис на проспекте Чуй',
            desc: '',
            lat: 42.874049,
            long: 74.591819,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        },
        {
            name: 'Офис на ул. Киевская ',
            desc: '',
            lat: 42.874673,
            long: 74.59033,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        },
        {
            name: 'Офис в Beta Stores',
            desc: '',
            lat: 42.874667,
            long: 74.592557,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        }
    ];

    var kcAlmaty = [
        {
            name: '24/7 Офис в отеле Hyatt Regency Bishkek',
            desc: '',
            lat: 42.872811,
            long: 74.591669,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        }, 
        {
            name: 'Офис на проспекте Чуй',
            desc: '',
            lat: 42.874049,
            long: 74.591819,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        },
        {
            name: 'Офис на ул. Киевская ',
            desc: '',
            lat: 42.874673,
            long: 74.59033,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        },
        {
            name: 'Офис в Beta Stores',
            desc: '',
            lat: 42.874667,
            long: 74.592557,
            marker_icon: '../images/icons/contacts/map-marker.svg'
        }
    ];


    var mapOptionsBish = {
        zoom: 13,
        center: new google.maps.LatLng(42.872811, 74.591669)
    };

    var mapOptionsOsh = {
        zoom: 16,
        center: new google.maps.LatLng(42.872811, 74.591669)
    };

    var mapOptionsAlmaty = {
        zoom: 16,
        center: new google.maps.LatLng(42.872811, 74.591669)
    }


    var mapBish = new google.maps.Map(document.getElementById('map-bishkek'), mapOptionsBish);
    var mapOsh = new google.maps.Map(document.getElementById('map-osh'), mapOptionsOsh);
    var mapAlmaty = new google.maps.Map(document.getElementById('map-almaty'), mapOptionsAlmaty);

    var markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info, map){
        
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.name,
            icon: info.marker_icon,
            animation: google.maps.Animation.DROP
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2 id="marker_title">' + marker.title + '</h2>' + marker.content);
            infoWindow.open(map, marker);
        });
        
        markers.push(marker);
        
    }

    for (var i = 0; i < kcBishkek.length; i++){
        createMarker(kcBishkek[i], mapBish);
    }

    for (var i = 0; i < kcOsh.length; i++){
        createMarker(kcOsh[i], mapOsh);
    }

    for (var i = 0; i < kcAlmaty.length; i++){
        createMarker(kcAlmaty[i], mapAlmaty);
    }

    openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

}

google.maps.event.addDomListener(window, 'load', initialize);

//Fix for google maps in tabs not showing
$(window).load(function(){
    function fix() {

        $('.kc-contacts-map-details').find(".tab-pane.active").each(function(){
            if($(this).index() > 0) {
                $(this).removeClass('active');
            }
            
        })
    }
    setTimeout(fix, 3000);
})