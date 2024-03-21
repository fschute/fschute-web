  let myMap;
  let canvas;
  const mappa = new Mappa('Leaflet');
    
  const options = {
    lat: 49, 
    lng: -123, 
    zoom: 3, 
    style: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' 
  }

  function setup(){
    
    canvas = createCanvas(640,640); 
    myMap = mappa.tileMap(options); 
    myMap.overlay(canvas);
    
    meteorites = loadTable('Meteorite_Landings.csv', 'csv', 'header');
    
    myMap.onChange(drawMeteorites);
    
    fill(70, 203, 31);
    stroke(100);
}

  function draw(){
  }
  
  function drawMeteorites(){
    
    clear();
    
    for (let i = 0; i < meteorites.getRowCount(); i++) {
      const latitude = Number(meteorites.getString(i, 'reclat'));
      const longitude = Number(meteorites.getString(i, 'reclong'));
      
    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
        const pos = myMap.latLngToPixel(latitude, longitude);
        let size = meteorites.getString(i, 'mass (g)');
        size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
        ellipse(pos.x, pos.y, size, size);
    
    blendMode(SCREEN);
    strokeWeight(10);
    stroke(224, 144, 144);
    line(25, 25, 75, 75);
    stroke(240, 43, 43);
    line(75, 25, 25, 75);
    }
  }

}
