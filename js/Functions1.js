// Leaflet map setup
var map = L.map('map', {
  center: [44.980814, -93.335080],
  zoom: 12
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var sublayer0;
var sublayer1;
var sublayer2;
var sublayer3;


  var cartoUserName = 'echoxiaowu1993';
  var cartoVizId = '8b7b846f-6556-4c59-91cf-468e390daeee';
  var cartoVizId1 = 'c7b147d6-932a-4ce2-b864-14bf9ba7e458';
  var layerUrl = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId+'/viz.json';
  var layerUrl1 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId1+'/viz.json';

  var points;
  var pointsLayer;
  var tractslayer;
  var tracts;
  var tracts1;
  var medianpoints;
  var lowpoints;


  pointsCDB = cartodb.createLayer(map, {
    user_name: cartoUserName,
    type: 'cartodb',
    interactivity: true,
    legends: true,
    sublayers: [
      {
        type: 'mapnik',
        sql: 'SELECT * FROM pointsjson2',
        cartocss: "#pointsjson2 {   marker-width: 8; marker-fill: ramp([stpws_p], (#d1eeea, #96d0d1, #68abb8, #45829b, #2a5674), quantiles); marker-fill-opacity: 1; marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #ffffff;marker-line-opacity: 0.8; }",
        interactivity: 'stpws_p' // Define properties you want to be available on interaction
     }
    ]
  });

  pointsCDB.addTo(map).done(function(layer) {
    pointsLayer = layer;
    points = layer.getSubLayer(0);
    points.hide();
    // console.log(layer.options.legend);
    layer.setZIndex(1000);
  });

  cartodb.createLayer(
      map,
      layerUrl1,
      {
          https: true,
          legends: true,
          cartodb_logo:true,
          layerIndex:1,
      })
  .addTo(map)
  .done(function(layer) { // when successful, do this stuff

      tracts = layer.getSubLayer(0);
      tracts1 = layer.getSubLayer(1);

      // hide sublayer1
      tracts.hide();
      tracts1.hide();
    //   $("#EBLL").on('click',function(){
    //     tracts.show();
    //     tracts.setInteractivity("pctebllct");
    //     tracts.setInteraction(true);
    //     cdb.vis.Vis.addInfowindow(
    //       map, tracts, ["pctebllct"],
    //       {
    //          infowindowTemplate: $('#iw_template_tracts').html()
    //       });
    //       // tracts.on('featureClick',function(e,latlng,pos,data){
    //       // $('.cartodb-infowindow #tracts' ).css('visibility', 'hidden');
    //       // return false;
    // // });
    //   });
});
  $("#EBLL").on('click',function(){
    tracts.show();
    tracts1.hide();
    sublayer0.hide();
    sublayer1.hide();
    sublayer2.hide();
    sublayer3.hide();
    tracts.setInteractivity("pctebllct");
    tracts.setInteraction(true);
    cdb.vis.Vis.addInfowindow(
      map, tracts, ["pctebllct"],
      {
         infowindowTemplate: $('#iw_template_tracts').html()
      });
//       tracts.on('featureClick',function(e,latlng,pos,data){
//       $('.cartodb-infowindow #tracts' ).css('visibility', 'hidden');
//       return false;
});
$("#EBLL1").on('click', function(){
  tracts.show();
  tracts1.show();
  sublayer0.hide();
  sublayer1.hide();
  sublayer2.hide();
  sublayer3.hide();
  tracts1.setSQL("SELECT * from minleadtracts where pctebllct = 'No significant difference'");
  tracts1.setCartoCSS('#layer { polygon-fill: #5F4690; polygon-opacity: 0.5;} #layer::outline { line-width: 2; line-color: #f7feae; line-opacity: 1; }');
});
$("#EBLL2").on('click', function(){
  tracts.show();
  tracts1.show();
  sublayer0.hide();
  sublayer1.hide();
  sublayer2.hide();
  sublayer3.hide();
  tracts1.setSQL("SELECT * from minleadtracts where pctebllct = 'Significantly higher (1-2 times)'");
  tracts1.setCartoCSS('#layer { polygon-fill: #5F4690; polygon-opacity: 0.5;} #layer::outline { line-width: 2; line-color: #f7feae; line-opacity: 1; }');
});
$("#EBLL3").on('click', function(){
  tracts.show();
  tracts1.show();
  sublayer0.hide();
  sublayer1.hide();
  sublayer2.hide();
  sublayer3.hide();
  tracts1.setSQL("SELECT * from minleadtracts where pctebllct = 'Significantly higher (3+ times)'");
  tracts1.setCartoCSS('#layer { polygon-fill: #5F4690; polygon-opacity: 0.5;} #layer::outline { line-width: 2; line-color: #f7feae; line-opacity: 1; }');
});
$("#EBLL4").on('click', function(){
  tracts.hide();
  tracts1.hide();
  sublayer0.hide();
  sublayer1.hide();
  sublayer2.hide();
  sublayer3.hide();
  $('div#tracts.cartodb-popup.v2').remove();
  });
//   });

  var medianIncLegend = new cdb.geo.ui.Legend.Choropleth({
    title: "Median Income Quintile Breaks",
    left:  "Bottom 20%",
    right: "Top 20%",
    colors: [ "#ffffcc", "#c2e699", "#78c679", "#31a354", "#006837"]
  });
// basemap url
var mapURL = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png';

// add basemap tiles to map
L.tileLayer(mapURL, {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);

// add cartodb data layers to map
cartodb.createLayer(
    map,
    layerUrl,
    {
        https: true,
        legends: true,
        cartodb_logo:true,
        layerIndex:1,
    })
.addTo(map)
.done(function(layer) { // when successful, do this stuff

    sublayer0 = layer.getSubLayer(0);
    sublayer1 = layer.getSubLayer(1);
    sublayer2 = layer.getSubLayer(2);
    sublayer3 = layer.getSubLayer(3);


    // hide sublayer1
    sublayer0.hide();
    sublayer1.hide();
    sublayer2.hide();
    sublayer3.hide();



    $("#load_3").on('click', function() {
    // turn on layer off, turn off layer on
        sublayer0.hide();
        sublayer1.show();
        sublayer2.hide();
        sublayer3.hide();
        tracts.hide();
        tracts1.hide();
        $('#map').append(medianIncLegend.render().el);
        $('.legend-title').replaceWith("Median Income Quintile Breaks");
        $(".colors").replaceWith("<div class='quartile' style='background-color:#ffffcc'></div><div class='quartile' style='background-color:#c2e699'></div><div class='quartile' style='background-color:#78c679'></div><div class='quartile' style='background-color:#31a354'></div><div class='quartile' style='background-color:#006837'></div>");
        sublayer1.setInteractivity("medianh");
        sublayer1.setInteraction(true);
        sublayer0.setInteraction(false);
        sublayer2.setInteraction(false);
        sublayer3.setInteraction(false);
        $('div#sublayer0.cartodb-popup.v2').remove();
        $('div#sublayer2.cartodb-popup.v2').remove();
        $('div#sublayer3.cartodb-popup.v2').remove();
        $('div#tracts.cartodb-popup.v2').remove();
        cdb.vis.Vis.addInfowindow(
          map, sublayer1, ["vacancy","educati", "poverty","medianh"],
          {
             infowindowTemplate: $('#iw_template_sublayer1').html()
          });
          sublayer0.on('featureClick',function(e,latlng,pos,data){
          $('.cartodb-infowindow #sublayer0' ).css('visibility', 'hidden');
          return false;
    });
      });
    $("#load_4").on('click', function() {
    // turn on layer off, turn off layer on
        sublayer0.show();
        sublayer1.hide();
        sublayer2.hide();
        sublayer3.hide();
        tracts.hide();
        tracts1.hide();
        $('#map').append(medianIncLegend.render().el);
        $(".legend-title").replaceWith("HS Degree or Above Quintile Breaks");
        $(".colors").replaceWith("<div class='quartile' style='background-color:#eff3ff'></div><div class='quartile' style='background-color:#bdd7e7'></div><div class='quartile' style='background-color:#6baed6'></div><div class='quartile' style='background-color:#3182bd'></div><div class='quartile' style='background-color:#08519c'></div>");
        sublayer0.setInteractivity("educati");
        sublayer1.setInteraction(false);
        sublayer0.setInteraction(true);
        $('div#sublayer1.cartodb-popup.v2').remove();
        $('div#sublayer2.cartodb-popup.v2').remove();
        $('div#sublayer3.cartodb-popup.v2').remove();
        $('div#tracts.cartodb-popup.v2').remove();
        cdb.vis.Vis.addInfowindow(
          map, sublayer0, ["vacancy","educati", "poverty","medianh"],
          {
             infowindowTemplate: $('#iw_template_sublayer0').html()
          });
          sublayer1.on('featureClick',function(e,latlng,pos,data){
          $('.cartodb-infowindow #sublayer1' ).css('visibility', 'hidden');
          return false;
    });
      });
      $("#load_5").on('click', function() {
      // turn on layer off, turn off layer on
          sublayer0.hide();
          sublayer1.hide();
          sublayer2.show();
          sublayer3.hide();
          tracts.hide();
          tracts1.hide();
          $('#map').append(medianIncLegend.render().el);
          $(".legend-title").replaceWith("Number of Familes In Poverty Quintile Breaks");
          $(".colors").replaceWith("<div class='quartile' style='background-color:#f7f7f7'></div><div class='quartile' style='background-color:#cccccc'></div><div class='quartile' style='background-color:#969696'></div><div class='quartile' style='background-color:#636363'></div><div class='quartile' style='background-color:#252525'></div>");
          sublayer0.setInteractivity("poverty");
          sublayer1.setInteraction(false);
          sublayer0.setInteraction(false);
          sublayer2.setInteraction(true);
          sublayer3.setInteraction(false);
          $('div#sublayer0.cartodb-popup.v2').remove();
          $('div#sublayer1.cartodb-popup.v2').remove();
          $('div#sublayer3.cartodb-popup.v2').remove();
          $('div#tracts.cartodb-popup.v2').remove();
          cdb.vis.Vis.addInfowindow(
            map, sublayer2, ["vacancy","educati", "poverty","medianh"],
            {
               infowindowTemplate: $('#iw_template_sublayer2').html()
            });
            sublayer0.on('featureClick',function(e,latlng,pos,data){
            $('.cartodb-infowindow #sublayer0' ).css('visibility', 'hidden');
            return false;
      });
        });
        $("#load_6").on('click', function() {
        // turn on layer off, turn off layer on
          sublayer0.hide();
          sublayer1.hide();
          sublayer2.hide();
          sublayer3.show();
          tracts.hide();
          tracts1.hide();
            $('#map').append(medianIncLegend.render().el);
            $(".legend-title").replaceWith("Number of Vacant Homes Quintile Breaks");
            $(".colors").replaceWith("<div class='quartile' style='background-color:#ffc6c4'></div><div class='quartile' style='background-color:#ee919b'></div><div class='quartile' style='background-color:#cc607d'></div><div class='quartile' style='background-color:#9e3963'></div><div class='quartile' style='background-color:#672044'></div>");
            sublayer0.setInteractivity("vacancy");
            sublayer1.setInteraction(false);
            sublayer0.setInteraction(false);
            sublayer2.setInteraction(false);
            sublayer3.setInteraction(true);
            $('div#sublayer1.cartodb-popup.v2').remove();
            $('div#sublayer2.cartodb-popup.v2').remove();
            $('div#sublayer3.cartodb-popup.v2').remove();
            $('div#tracts.cartodb-popup.v2').remove();
            cdb.vis.Vis.addInfowindow(
              map, sublayer3, ["vacancy","educati", "poverty","medianh"],
              {
                 infowindowTemplate: $('#iw_template_sublayer3').html()
              });
              sublayer0.on('featureClick',function(e,latlng,pos,data){
              $('.cartodb-infowindow #sublayer0' ).css('visibility', 'hidden');
              return false;
        });
          });

})
.error(function(err) { // when error, do this
    console.log("error: " + err);
});
$("#load_7").on('click', function(){
  tracts.hide();
  tracts1.hide();
  sublayer0.hide();
  sublayer1.hide();
  sublayer2.hide();
  sublayer3.hide();
  $('div#tracts.cartodb-popup.v2').remove();
  $('div#sublayer0.cartodb-popup.v2').remove();
  $('div#sublayer1.cartodb-popup.v2').remove();
  $('div#sublayer2.cartodb-popup.v2').remove();
  $('div#sublayer3.cartodb-popup.v2').remove();
  $('div').removeClass("cartodb-legend choropleth");
  });
$("#AllProb").on('click',function(){
  points.show();
  points.setSQL('SELECT * from pointsjson2');
  points.setCartoCSS("#pointsjson2 {   marker-width: 8; marker-fill: ramp([stpws_p], (#d1eeea, #96d0d1, #68abb8, #45829b, #2a5674), quantiles); marker-fill-opacity: 1; marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #ffffff;marker-line-opacity: 0.8; }");
});
$("#HighProb").on('click',function(){
  points.show();
  points.setSQL('SELECT * from pointsjson2 where stpws_p > .8');
  points.setCartoCSS("#pointsjson2 {marker-width: 8; marker-fill: '#2a5674'; marker-fill-opacity: 1; marker-allow-overlap: true; marker-line-width: 1; marker-line-color: #ffffff; marker-line-opacity: 1;}");
});
$("#MedianProb").on('click',function(){
  points.show();
  points.setSQL('SELECT * from pointsjson2 where stpws_p < .8 AND stpws_p > .3');
  points.setCartoCSS("#pointsjson2 {marker-width: 8; marker-fill: '#4f90a6'; marker-fill-opacity: 1; marker-allow-overlap: true; marker-line-width: 1; marker-line-color: #ffffff; marker-line-opacity: 1;}");
});
$("#LowProb").on('click',function(){
  points.show();
  points.setSQL('SELECT * from pointsjson2 where stpws_p < .3');
  points.setCartoCSS("#pointsjson2 {marker-width: 8; marker-fill: '#85c4c9'; marker-fill-opacity: 1; marker-allow-overlap: true; marker-line-width: 1; marker-line-color: #ffffff; marker-line-opacity: 1;}");
});
$("#HidePoints").on('click',function(){
  points.hide();
  // points.setSQL('SELECT * from pointsjson2 where stpws_p < .3');
  // points.setCartoCSS("#pointsjson2 {marker-width: 8; marker-fill: 'blue'; marker-fill-opacity: 1; marker-allow-overlap: true; marker-line-width: 1; marker-line-color: #ffffff; marker-line-opacity: 1;}");
});
