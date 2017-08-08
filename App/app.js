
/*
	classe qui représente un point sur la carte
*/
class Point {

  constructor(positionCoords) {
    this.positionCoords = positionCoords;
  }

  distance( p ) {	// retourne la distance entre la point actuel et celui passé en paramétre
  	// http://leafletjs.com/reference-1.0.3.html#latlng
  	return this.positionCoords.distanceTo( p.positionCoords );
  	// https://en.wikipedia.org/wiki/Haversine_formula
  	// The haversine formula determines the great-circle distance between two points on a sphere given their longitudes and latitudes
  }
}

var dotRadius = 100;	// rayon du markeur ( cercle )
var circles = [];		// sauvegarde les markeurs crées ( pour pouvoir les enlever ensuite )

// cette fonction ajoute les stations passés en argument avec la couleur passée en argument
function addStations( stations, color ) {
	for( station in stations ) {
		station = stations[station];
		//var popupMsgContent = station.name + " ( " + station.id + " )";
		var popupMsgContent = station.name;
		var marker = L.circle(station.coords, dotRadius, {
			color: color,
			fillColor: color,
			fillOpacity: 0.5
		}).addTo(map).bindPopup(popupMsgContent);
		marker.on('mouseover', function (e) {
            this.openPopup();
        });
        marker.on('mouseout', function (e) {
        	var currentObject = this;
        	setTimeout(function() {
        		currentObject.closePopup();
        	}, 1000);	// closing the popup after 1 second
        });
        circles.push( marker );	// add the circle
	}

}

// markeurs de clicks et de stations ( les plus proches du click )
var clickMarker, nearestStationMarker;
var clickMarker2, nearestStationMarker2;

// noms des stations ( de départ et d'arrivée )
var stationDepart, stationArrive;

// le numéro du clique ( 0 : premier click ; 1 : second click )
// premier click : station de départ ; deuxiéme click : station d'arrivée
var numClick = 0;

// supprime les markeurs de la carte + réinitialise le compteur des clicks + efface les anciens messages
function removeMarkers() {
	if(clickMarker != undefined) { map.removeLayer(clickMarker); }
	if(nearestStationMarker != undefined) { map.removeLayer(nearestStationMarker); }
	if(clickMarker2 != undefined) { map.removeLayer(clickMarker2); }
	if(nearestStationMarker2 != undefined) { map.removeLayer(nearestStationMarker2); }
	// réinitialisation de la variable numClick
	numClick = 0;
	// effacer toutes les messages
	toastr.clear();
}

// fonction à éxécuter si on clicke sur la carte
function onMapClick(e) {

	if(e.latlng == undefined) {
		console.log('not a valid click');
		return;
	}

	if(numClick == 0) {	// premier click

		// remove old markers if any !
		removeMarkers();

		// point clické
		var clickedPoint = new Point(e.latlng);

		// Add marker to map at click location; add popup window
		clickMarker = new L.marker(e.latlng).addTo(map);

		// on récupére le point de la station la plus proche du click
		var pointPlusProcheObj = nearestStation(clickedPoint);
		var pointPlusProche = pointPlusProcheObj.pointPlusProche;
		stationDepart = pointPlusProcheObj.nomStation;

		// Add marker to map at click location; add popup window
		e.latlng.lat = pointPlusProche.positionCoords.lat;
		e.latlng.lng = pointPlusProche.positionCoords.lng;
		nearestStationMarker = new L.marker(e.latlng).addTo(map);

	} else {	// numClick == 1 ( 2eme click )

		// point clické
		var clickedPoint = new Point(e.latlng);

		// Add marker to map at click location; add popup window
		clickMarker2 = new L.marker(e.latlng).addTo(map);

		// on récupére le point de la station la plus proche du click
		var pointPlusProcheObj = nearestStation(clickedPoint);
		var pointPlusProche = pointPlusProcheObj.pointPlusProche;
		stationArrive = pointPlusProcheObj.nomStation;

		// Add marker to map at click location; add popup window
		e.latlng.lat = pointPlusProche.positionCoords.lat;
		e.latlng.lng = pointPlusProche.positionCoords.lng;
		nearestStationMarker2 = new L.marker(e.latlng).addTo(map);

		// find shortest path between the 2 stations !
		if(stationDepart == stationArrive) {
			displayInfo("La station d'arrivée doit être différente de celle du départ !");
			return;
		}
		// le plus court chemin entre les deux stations
		shortestPath(graph, stationDepart, stationArrive);

	}
	// mise à jour du numéro du click : 0, 1, 0, 1, 0, 1, ... ( module 2 ) numClick = ( numClick + 1 ) % 2;
	numClick = 1 - numClick;
	return;
}

// retourne les coordonnées de la station la plus proche du point clické ( passé en paramétre )
function nearestStation(clickedPoint) {
	// initialisé à l'infinie ( théoriquement ) / à une grande valeur ( pratiquement ) pour trouver la distance minimale
    var distanceMin = 999999999999999999;
    var pointPlusProche;
    var nomStation;
    var idStation;

    for(var s in stations) {
    	s = stations[s];

    	//	http://leafletjs.com/reference-1.0.3.html#latlng
    	p = new Point(
    		L.latLng(
    			{
    				lat: s.coords[0],
    				lon: s.coords[1]
    			}
			)
    	);

    	d = clickedPoint.distance(p);

    	if(d < distanceMin) {
    		distanceMin = d;
    		pointPlusProche = p;
    		nomStation = s.name;
    		idStation = s.id;
    	}
    }

    return {
    	"pointPlusProche"	: pointPlusProche,
    	"nomStation"		: nomStation,
    	"idStation"			: idStation
    };
}

map.on('click', onMapClick);

// ajoute toutes les stations à la carte
function addAllStations() {
	addStations( stationsTGM, '#00ced1' );
	addStations( stationsMetroTGM_Passage, '#ffa500' );
	addStations( stationsMetroPassage_Ariana, '#ffcc00' );
	addStations( stationsMetroTGM_IbnKhaldoon, '#3366ff' );
	addStations( stationsMetroTGM_Intilaka, '#20b2aa' );
	addStations( stationsMetroTGM_Campus, '#008000' );
	addStations( stationsMetroTGM_BenArous, '#ff1493');
	addStations( stationsMetroTGM_Mourouj2, '#9400d3');

	addStations( autresPlaces, 'blue');
}

addAllStations();

// flag qui permet d'afficher / masquer les stations
var stationsDisplayed = true;

// masque toutes les stations
function hideAllStations() {
	// loop through all the circle markers ...
	circles.forEach(function(element) {
		// ... and remove them
		map.removeLayer(element);
	});
	circles = [];
}

// gestion des touches clavier
$(document).keypress(function(e) {
	console.log(e.which);
	if(e.which == 13) {	// enter
		removeMarkers();
	}
});

// gestion des clicks ( click droit -> afficher / masquer les stations )
$(document).contextmenu(function() {
  //console.log( "Handler for .contextmenu() called." );
	if(stationsDisplayed) {	// if the stations are displayed
		// hide them !
		hideAllStations();
		stationsDisplayed = false;
		displayInfo('Stations Masquées !', 3000);
	} else {
		// show them !
		addAllStations();
		stationsDisplayed = true;
		displayInfo('Stations Affichées !', 3000);
	}
});

function hideFirstMsg() {
	localStorage.setItem('showFirstMsg', 'no');
}

if( localStorage.getItem('showFirstMsg') === null ) {
	var firstMsg = "click droit : afficher / masquer les stations <br> cliquez deux fois pour afficher l'itinéraire <br> si vous voulez réinitialiser, tappez la touche entrée <br> cliquez sur ce message pour le fermer <a href='#' onclick='hideFirstMsg(); return false;'>ok, ne plus afficher ce message !</a>";
	displayInfo(firstMsg);
}
