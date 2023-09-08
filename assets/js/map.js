function map(maps,width){

 
if(typeof mapboxgl == 'undefined'){
 
}else{

    mapboxgl.accessToken = 'pk.eyJ1IjoicHJvdG90eXBlY2F6b3UiLCJhIjoiY2t2Yzh6cDl4MDZnYjJ3bzBhd2Jtc29oZyJ9.wvxebQ-hQ4ur0IiJ3VMzBQ';
    var map = new mapboxgl.Map({
    container: maps,
    style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
    center: [1.3254394,44.0672005],
    zoom:14
    });
  
    const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat([1.3254394,44.0672005])
    .addTo(map);
  
    const pop =     new mapboxgl.Popup({offset:34,closeOnClick: false, closeButton: false }) // add popups
    .setHTML(
      `<h6 class='m-0 pt-1 fw-bold'>Accès Habitat</h6>
      <p class='m-0 pt-1'><strong>Plombier / Chauffagiste</strong></p>
      <p class='m-0'> 625 Chemin de Villemade, 82000 Montauban</p>`
    )
    .setLngLat([1.3254394,44.0672005])
    .setMaxWidth(width)
    .addTo(map);}
  }
  
 
 

setTimeout(function(){
  map("map","350px");
},2700)
 
