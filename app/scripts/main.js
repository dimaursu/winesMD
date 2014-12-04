/*jslint browser: true*/
/*global L */

(function (window, document, L, undefined) {
    'use strict';

    /* create leaflet map */
    var map = L.map('map', {
            center: [46.973, 28.372],
            zoom: 8
    });

    new L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}', {
            minZoom: 3,
            maxZoom: 17,
            attribution: 'Map data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>'
    }).addTo(map);

    var wineries = [
        {
            base: 'cricova',
            name: 'Cricova',
            lat: 47.135,
            lng: 28.854,
        },

        {
            base: 'milestiiMici',
            name: 'Mileștii Mici',
            lat: 46.905,
            lng: 28.794,
        }
    ];

    wineries.map(function(winery) {
        console.log(winery);

        var icon = L.icon({
            iconUrl: 'lib/images/marker-icon.png',
            shadowUrl: 'lib/images/marker-shadow.png',

            iconAnchor:   [2, 4],
            shadowAnchor: [4, 2],
            popupAnchor:  [10, 10]
        });

        var popup = L.popup();
        popup.setContent(
            '<a href="' + winery.base +  '.html">' + winery.name + '</a>' +
            '<br />' +
            '<img src="images/' + winery.base + '.jpg"></img>'
        );

        var popupOptions = {
            icon: icon,
            maxWidth: 260,
            minWidth: 240,
        };

        L.marker([winery.lat, winery.lng], popupOptions)
            .bindPopup(popup)
            .addTo(map);
    });

}(window, document, L));
