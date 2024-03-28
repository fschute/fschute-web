      var map = L.map('mapid',
                        {
          				  center: [49.265637, -123.256113],
          				  zoom: 15
        				} 
                  );

      var topoTiles = L.tileLayer(
          'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                          {
      						maxZoom: 17,
      						attribution: 'Basemap data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Basemap style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      					  }
      					).addTo(map);

        function onEachPoint(feature, layer) {
           if (feature.properties && feature.properties.BLDG_CODE) {
              layer.bindTooltip( feature.properties.BLDG_CODE);
           }
        }

      $.getJSON("https://raw.githubusercontent.com/UBCGeodata/ubc-geospatial-opendata/master/ubcv/locations/geojson/ubcv_buildings.geojson",
                
        function(data){
        	L.geoJSON(data, {
       			style: function (feature, latlng) {},
                onEachFeature: onEachPoint}).addTo(map);
            L.geoJson(data, {style: style}).addTo(map);
            });
      
      
        function style(feature) {
            return {
            fillColor: "#87ABB7",
            weight: 2,
            opacity: 1,
            color: '#CECECE',
            fillOpacity: 0.8
    };
}
