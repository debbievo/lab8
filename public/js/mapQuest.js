function initMap() {
	// add your code here
	L.mapquest.key = 'gxWLWA56jH40MeL8BGQhGhFFwMXQG1hd';

	//map refers to a div element with the ID map
	var map = L.mapquest.map('map', {
		center:[32.8788, -117.2359],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//Add marker to map
	//L.marker([32.88, -117.236]).addTo(map);
	L.marker([32.8788, -117.2359]).addTo(map);
}