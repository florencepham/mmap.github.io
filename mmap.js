/*

var data = '{"characters":[{"name":"carmen","loc":{"latitude":37.81972,"longitude":-122.47861,"note":"Golden Gate Bridge"}}],"students":[{"login":"tlubeck","lat":42.5335,"lng":-71.1036,"created_at":"Tue Oct 07 2014 05:08:03 GMT+0000 (UTC)","_id":"543375331e214f020086c425"},{"login":"mchow","lat":42.5335,"lng":-71.1036,"created_at":"Tue Oct 07 2014 05:00:57 GMT+0000 (UTC)","_id":"543373891e214f020086c424"},{"login":"forbiddencity","lat": 39.9147,"lng": 116.3906,"created_at":"Tue Oct 07 2014 04:59:53 GMT+0000 (UTC)","_id":"543373491e214f020086c423"},{"login":"hawaii","lat": 21.3114,"lng":-157.7964,"created_at":"Tue Oct 07 2014 04:59:03 GMT+0000 (UTC)","_id":"543373171e214f020086c422"},{"login":"effeitower","lat": 48.8582,"lng": 2.2945,"created_at":"Tue Oct 07 2014 04:58:02 GMT+0000 (UTC)","_id":"543372da1e214f020086c421"}]}';
var map;
var landmark;
var marker;
var parsed;
var request = new XMLHttpRequest();

var myLat;
var myLng;
var me = new google.maps.LatLng(myLat, myLng); 

var infowindow = new google.maps.InfoWindow();
var studentsinfo;


//create a map
function initialize()
{
	var mapOptions = { 
	zoom: 3,
	center: new google.maps.LatLng(myLat, myLng), //change later on
	mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	map = new google.maps.Map(document.getElementById("map_canvas"), 
		mapOptions);

	var myLocation = markMe();

	parsed = JSON.parse(data);

	charactersMaker(parsed);
	studentsMaker(parsed);

	//service = new google.maps.places.PlacesService(map);
	//service.search(request, studentsMaker(parsed));
	//service.search(request, studentsMaker(parsed));

}
google.maps.event.addDomListener(window, 'load', initialize);

function markMe()
{
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(function(position){
			myLat = position.coords.latitude; 
			myLng = position.coords.longitude;
		});
	}
	markerMaker(myLat, myLng, "Me!");
}

function studentsMaker(parsed)
{
	//mark students
	for (i = 0; i < parsed['students'].length; i++){
		studentsinfo = "login: " + parsed['students'][i]['login'] + 
			", " + "latitude: " + parsed['students'][i]['lat'] + 
			", " + "longitude: " + parsed['students'][i]['lng'] +
			", " + "timestamp: " + parsed['students'][i]['created_at'];
		console.log(studentsinfo);
		markerMaker(parsed['students'][i]['lat'], 
			parsed['students'][i]['lng'],
			studentsinfo);
	}
}

function markerMaker(lat, lng, stringtitle)
{
	landmark = new google.maps.LatLng (lat, lng);
	marker = new google.maps.Marker({ position:landmark, title: stringtitle });
	marker.setMap(map);

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.close();
		infowindow.setContent(marker.title);
		infowindow.open(map, this);
	});
}




function charactersMaker(parsed)
{
	//mark characters
	for (i = 0; i < parsed.characters.length; i++)	{
		if (typeof parsed['characters'][i]['loc'] != 'undefined')
			markerMaker(parsed['characters'][i]['loc']['latitude'], 
				parsed['characters'][i]['loc']['longitude'],
				parsed['characters'][i]['name']);
	}
}


*/
var data = '{ "TripList": {"CurrentTime": 1413396518,"Line": "Red", "Trips": [{"TripID": "23851062", "Destination": "Alewife", "Position": {"Timestamp": 1413396441, "Train": "1819", "Lat": 42.31791, "Long": -71.05201,"Heading": 0}, "Predictions": [ {"StopID": "70096", "Stop": "JFK/UMass", "Seconds": -8}, {"StopID": "70084", "Stop": "Andrew", "Seconds": 169}, {"StopID": "70082", "Stop": "Broadway", "Seconds": 301}, {"StopID": "70080", "Stop": "South Station", "Seconds": 454}, {"StopID": "70078", "Stop": "Downtown Crossing", "Seconds": 546}, {"StopID": "70076", "Stop": "Park Street", "Seconds": 649}, {"StopID": "70074", "Stop": "Charles/MGH", "Seconds": 780}, {"StopID": "70072", "Stop": "Kendall/MIT", "Seconds": 931}, {"StopID": "70070", "Stop": "Central Square", "Seconds": 1084}]}, {"TripID": "23851019", "Destination": "Alewife", "Position": {"Timestamp": 1413396464, "Train": "1873", "Lat": 42.35266, "Long": -71.05536,"Heading": 290}, "Predictions": [ {"StopID": "70078", "Stop": "Downtown Crossing", "Seconds": 38}, {"StopID": "70076", "Stop": "Park Street", "Seconds": 141}, {"StopID": "70074", "Stop": "Charles/MGH", "Seconds": 272}, {"StopID": "70072", "Stop": "Kendall/MIT", "Seconds": 423}, {"StopID": "70070", "Stop": "Central Square", "Seconds": 576}, {"StopID": "70068", "Stop": "Harvard Square", "Seconds": 773}, {"StopID": "70066", "Stop": "Porter Square", "Seconds": 962}, {"StopID": "70064", "Stop": "Davis", "Seconds": 1084}]}, {"TripID": "23851060", "Destination": "Alewife", "Position": {"Timestamp": 1413396434, "Train": "1877", "Lat": 42.39676, "Long": -71.12241,"Heading": 285}, "Predictions": [ {"StopID": "70061", "Stop": "Alewife", "Seconds": 76}]}, {"TripID": "23851042", "Destination": "Ashmont", "Position": {"Timestamp": 1413396424, "Train": "1651", "Lat": 42.37231, "Long": -71.11585,"Heading": 135}, "Predictions": [ {"StopID": "70069", "Stop": "Central Square", "Seconds": 38}, {"StopID": "70071", "Stop": "Kendall/MIT", "Seconds": 195}, {"StopID": "70073", "Stop": "Charles/MGH", "Seconds": 341}, {"StopID": "70075", "Stop": "Park Street", "Seconds": 474}, {"StopID": "70077", "Stop": "Downtown Crossing", "Seconds": 563}, {"StopID": "70079", "Stop": "South Station", "Seconds": 657}, {"StopID": "70081", "Stop": "Broadway", "Seconds": 796}, {"StopID": "70083", "Stop": "Andrew", "Seconds": 927}, {"StopID": "70085", "Stop": "JFK/UMass", "Seconds": 1110}]}, {"TripID": "23851068", "Destination": "Braintree", "Position": {"Timestamp": 1413396453, "Train": "1517", "Lat": 42.36194, "Long": -71.08144,"Heading": 95}, "Predictions": [ {"StopID": "70073", "Stop": "Charles/MGH", "Seconds": -0}, {"StopID": "70075", "Stop": "Park Street", "Seconds": 133}, {"StopID": "70077", "Stop": "Downtown Crossing", "Seconds": 222}, {"StopID": "70079", "Stop": "South Station", "Seconds": 316}, {"StopID": "70081", "Stop": "Broadway", "Seconds": 456}, {"StopID": "70083", "Stop": "Andrew", "Seconds": 587}, {"StopID": "70095", "Stop": "JFK/UMass", "Seconds": 744}]}, {"TripID": "23851067", "Destination": "Braintree", "Position": {"Timestamp": 1413396362, "Train": "1861", "Lat": 42.31602, "Long": -71.05206,"Heading": 170}, "Predictions": [ {"StopID": "70097", "Stop": "North Quincy", "Seconds": 214}, {"StopID": "70099", "Stop": "Wollaston", "Seconds": 343}, {"StopID": "70101", "Stop": "Quincy Center", "Seconds": 519}, {"StopID": "70103", "Stop": "Quincy Adams", "Seconds": 703}, {"StopID": "70105", "Stop": "Braintree", "Seconds": 966}]}, {"TripID": "23851037", "Destination": "Ashmont", "Position": {"Timestamp": 1413396477, "Train": "1868", "Lat": 42.29607, "Long": -71.06664,"Heading": 180}, "Predictions": [ {"StopID": "70091", "Stop": "Shawmut", "Seconds": -16}, {"StopID": "70093", "Stop": "Ashmont", "Seconds": 138}]}, {"TripID": "23851034", "Destination": "Alewife", "Position": {"Timestamp": 1413396472, "Train": "1878", "Lat": 42.38013, "Long": -71.11979,"Heading": 0}, "Predictions": [ {"StopID": "70066", "Stop": "Porter Square", "Seconds": 6}, {"StopID": "70064", "Stop": "Davis", "Seconds": 128}, {"StopID": "70061", "Stop": "Alewife", "Seconds": 288}]}, {"TripID": "23850833", "Destination": "Alewife", "Predictions": [ {"StopID": "70105", "Stop": "Braintree", "Seconds": 862}, {"StopID": "70104", "Stop": "Quincy Adams", "Seconds": 1099}]}, {"TripID": "23851061", "Destination": "Alewife", "Position": {"Timestamp": 1413396441, "Train": "1629", "Lat": 42.3565, "Long": -71.06263,"Heading": 310}, "Predictions": [ {"StopID": "70074", "Stop": "Charles/MGH", "Seconds": 54}, {"StopID": "70072", "Stop": "Kendall/MIT", "Seconds": 205}, {"StopID": "70070", "Stop": "Central Square", "Seconds": 358}, {"StopID": "70068", "Stop": "Harvard Square", "Seconds": 555}, {"StopID": "70066", "Stop": "Porter Square", "Seconds": 744}, {"StopID": "70064", "Stop": "Davis", "Seconds": 866}, {"StopID": "70061", "Stop": "Alewife", "Seconds": 1026}]}, {"TripID": "23851070", "Destination": "Braintree", "Predictions": [ {"StopID": "70061", "Stop": "Alewife", "Seconds": 322}, {"StopID": "70063", "Stop": "Davis", "Seconds": 407}, {"StopID": "70065", "Stop": "Porter Square", "Seconds": 536}, {"StopID": "70067", "Stop": "Harvard Square", "Seconds": 700}, {"StopID": "70069", "Stop": "Central Square", "Seconds": 909}, {"StopID": "70071", "Stop": "Kendall/MIT", "Seconds": 1066}]}, {"TripID": "23851066", "Destination": "Braintree", "Position": {"Timestamp": 1413396460, "Train": "1875", "Lat": 42.2668, "Long": -71.02063,"Heading": 135}, "Predictions": [ {"StopID": "70101", "Stop": "Quincy Center", "Seconds": 118}, {"StopID": "70103", "Stop": "Quincy Adams", "Seconds": 302}, {"StopID": "70105", "Stop": "Braintree", "Seconds": 565}]}, {"TripID": "23851022", "Destination": "Ashmont", "Position": {"Timestamp": 1413396471, "Train": "1757", "Lat": 42.34157, "Long": -71.05711,"Heading": 175}, "Predictions": [ {"StopID": "70083", "Stop": "Andrew", "Seconds": 66}, {"StopID": "70085", "Stop": "JFK/UMass", "Seconds": 249}, {"StopID": "70087", "Stop": "Savin Hill", "Seconds": 393}, {"StopID": "70089", "Stop": "Fields Corner", "Seconds": 572}, {"StopID": "70091", "Stop": "Shawmut", "Seconds": 699}, {"StopID": "70093", "Stop": "Ashmont", "Seconds": 853}]}, {"TripID": "23851025", "Destination": "Alewife", "Predictions": [ {"StopID": "70094", "Stop": "Ashmont", "Seconds": 562}, {"StopID": "70092", "Stop": "Shawmut", "Seconds": 634}, {"StopID": "70090", "Stop": "Fields Corner", "Seconds": 744}, {"StopID": "70088", "Stop": "Savin Hill", "Seconds": 914}, {"StopID": "70086", "Stop": "JFK/UMass", "Seconds": 1052}]}, {"TripID": "23851020", "Destination": "Ashmont", "Predictions": [ {"StopID": "70061", "Stop": "Alewife", "Seconds": 742}, {"StopID": "70063", "Stop": "Davis", "Seconds": 827}, {"StopID": "70065", "Stop": "Porter Square", "Seconds": 956}, {"StopID": "70067", "Stop": "Harvard Square", "Seconds": 1123}]}, {"TripID": "23851069", "Destination": "Braintree", "Position": {"Timestamp": 1413396455, "Train": "1883", "Lat": 42.38686, "Long": -71.11936,"Heading": 185}, "Predictions": [ {"StopID": "70067", "Stop": "Harvard Square", "Seconds": 35}, {"StopID": "70069", "Stop": "Central Square", "Seconds": 244}, {"StopID": "70071", "Stop": "Kendall/MIT", "Seconds": 401}, {"StopID": "70073", "Stop": "Charles/MGH", "Seconds": 547}, {"StopID": "70075", "Stop": "Park Street", "Seconds": 680}, {"StopID": "70077", "Stop": "Downtown Crossing", "Seconds": 769}, {"StopID": "70079", "Stop": "South Station", "Seconds": 863}, {"StopID": "70081", "Stop": "Broadway", "Seconds": 1003}, {"StopID": "70083", "Stop": "Andrew", "Seconds": 1134}]}, {"TripID": "23851039", "Destination": "Alewife", "Predictions": [ {"StopID": "70094", "Stop": "Ashmont", "Seconds": 283}, {"StopID": "70092", "Stop": "Shawmut", "Seconds": 355}, {"StopID": "70090", "Stop": "Fields Corner", "Seconds": 465}, {"StopID": "70088", "Stop": "Savin Hill", "Seconds": 635}, {"StopID": "70086", "Stop": "JFK/UMass", "Seconds": 773}]}, {"TripID": "23851064", "Destination": "Alewife", "Predictions": [ {"StopID": "70105", "Stop": "Braintree", "Seconds": 262}, {"StopID": "70104", "Stop": "Quincy Adams", "Seconds": 499}, {"StopID": "70102", "Stop": "Quincy Center", "Seconds": 685}, {"StopID": "70100", "Stop": "Wollaston", "Seconds": 856}, {"StopID": "70098", "Stop": "North Quincy", "Seconds": 980}]}, {"TripID": "23851016", "Destination": "Ashmont", "Predictions": [ {"StopID": "70061", "Stop": "Alewife", "Seconds": 22}, {"StopID": "70063", "Stop": "Davis", "Seconds": 134}, {"StopID": "70065", "Stop": "Porter Square", "Seconds": 255}, {"StopID": "70067", "Stop": "Harvard Square", "Seconds": 419}, {"StopID": "70069", "Stop": "Central Square", "Seconds": 629}, {"StopID": "70071", "Stop": "Kendall/MIT", "Seconds": 787}]}, {"TripID": "23851063", "Destination": "Alewife", "Position": {"Timestamp": 1413396438, "Train": "1636", "Lat": 42.24615, "Long": -71.00368,"Heading": 15}, "Predictions": [ {"StopID": "70102", "Stop": "Quincy Center", "Seconds": -7}, {"StopID": "70100", "Stop": "Wollaston", "Seconds": 164}, {"StopID": "70098", "Stop": "North Quincy", "Seconds": 287}, {"StopID": "70096", "Stop": "JFK/UMass", "Seconds": 795}, {"StopID": "70084", "Stop": "Andrew", "Seconds": 972}, {"StopID": "70082", "Stop": "Broadway", "Seconds": 1104}]}]}}'; 
var parsed;
var map;
var landmark;
var marker;

//create a map
function initialize()
{
	parsed = JSON.parse(data); //change str when the XMLHttpRequest works

	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(42.4069, -71.1198), //TUFTS
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	reddata = new XMLHttpRequest();
	reddata.open("get", "http://developer.mbta.com/lib/rthr/red.json", true);  //change redline.text when XMLHttpRequest works
	reddata.onreadystatechange = dataReady;
	//reddata.send(null); // uncomment when XMLHttpRequest works 

	for (i = 0; i < parsed.TripList.Trips.length-1; i++) {
		if (typeof parsed.TripList.Trips[i].Position != 'undefined')
			markerMaker(parsed.TripList.Trips[i].Position.Lat,
				parsed.TripList.Trips[i].Position.Long);
	}
}
google.maps.event.addDomListener(window, 'load', initialize);


function markerMaker(lat, lng)
{
	landmark = new google.maps.LatLng (lat, lng);
	marker = new google.maps.Marker({ position:landmark });
	marker.setMap(map);
}


function dataReady() {
    if (reddata.readyState == 4) {
    parsed = JSON.parse('reddata.responseText');
    console.log(parsed);
    }
}


