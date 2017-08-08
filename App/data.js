/*
	Contient les données de l'application ( stations : TGM + Métros, graphe des stations )
*/

var stationsTGM = [
	{
		id: 1,
		name: "La Marsa Plage",
		coords: [36.88284,	10.33367],
		stations: ["TGM"]
	},
	{
		id: 2,
		name: "La Corniche",
		coords: [36.87968,	10.33932],
		stations: ["TGM"]
	},

	{
		id: 3,
		name: "Sidi Edhrif",
		coords: [36.87574,	10.33974],
		stations: ["TGM"]
	},
	{
		id: 4,
		name: "Sidi Bou Saïd",
		coords: [36.87062,	10.34208],
		stations: ["TGM"]
	},
	{
		id: 5,
		name: "Carthage Amilcar",
		coords: [36.86661,	10.33751],
		stations: ["TGM"]
	},
	{
		id: 6,
		name: "Carthage Présidence",
		coords: [36.86165,	10.33502],
		stations: ["TGM"]
	},
	{
		id: 7,
		name: "Carthage Hannibal",
		coords: [36.85355,	10.32898],
		stations: ["TGM"]
	},
	{
		id: 8,
		name: "Carthage Dermech",
		coords: [36.85009,	10.32559],
		stations: ["TGM"]
	},
	{
		id: 9,
		name: "Carthage Birsa",
		coords: [36.84623,	10.32183],
		stations: ["TGM"]
	},
	{
		id: 10,
		name: "Carthage Salambou",
		coords: [36.84169,	10.31913],
		stations: ["TGM"]
	},
	{
		id: 11,
		name: "El Kram",
		coords: [36.83633,	10.31664],
		stations: ["TGM"]
	},
	{
		id: 12,
		name: "L'Aéroport",
		coords: [36.83204,	10.31387],
		stations: ["TGM"]
	},
	{
		id: 13,
		name: "Khayriddine",
		coords: [36.82892,	10.31159],
		stations: ["TGM"]
	},
	{
		id: 14,
		name: "La Goulette Casino",
		coords: [36.82378,	10.30846],
		stations: ["TGM"]
	},
	{
		id: 15,
		name: "La Goulette Neuve",
		coords: [36.81990,	10.30560],
		stations: ["TGM"]
	},
	{
		id: 16,
		name: "La Goulette",
		coords: [36.81803,	10.30197],
		stations: ["TGM"]
	},
	{
		id: 17,
		name: "Le Bac",
		coords: [36.81422,	10.29238],
		stations: ["TGM"]
	},
	{
		id: 18,
		name: "Tunis Marine",
		coords: [36.80063,	10.19210],
		stations: ["TGM", 3, 6]
	},
];

var stationsMetroTGM_Passage = [
	{
		id: 19,
		name: "Tunis Marine",
		coords: [36.80008,	10.19289],
		stations: ["TGM", 3, 6]
	},
	{
		id: 20,
		name: "Farhat Hached",
		coords: [36.79770,	10.18441],
		stations: [3, 6]
	},
	{
		id: 21,
		name: "Station Barcelone",
		coords: [36.79655,	10.18043],
		stations: [1, 3, 4, 5, 6]
	},
	{
		id: 22,
		name: "Habib Thameur",
		coords: [36.80130,	10.17868],
		stations: [3, 6]
	},
	{
		id: 23,
		name: "Station République",
		coords: [36.80648,	10.18082],
		stations: [2, 3, 4, 5, 6]
	},
];

var stationsMetroPassage_Ariana = [
	{
		id: 24,
		name: "Station République",
		coords: [36.80647, 10.18082],
		stations: [2, 3, 4, 5, 6]
	},
	{
		id: 25,
		name: "Nelson Mandela",
		coords: [36.81107, 10.18256],
		stations: [2]
	},
	{
		id: 26,
		name: "Mohamed V",
		coords: [36.81595, 10.18322],
		stations: [2]
	},
	{
		id: 27,
		//name: "Palestine (A->T)",
		name: "Palestine",
		coords: [36.81910, 10.181],
		stations: [2]
	},
	{
		id: 29,
		name: "Les Jardins",
		coords: [36.82342, 10.18558],
		stations: [2]
	},
	{
		id: 30,
		name: "Cité El Khadhra",
		coords: [36.82921, 10.19038],
		stations: [2]
	},
	{
		id: 31,
		name: "La Jeunesse",
		coords: [36.83328, 10.18281],
		stations: [2]
	},
	{
		id: 32,
		name: "Cité Sportive",
		coords: [36.8385, 10.18198],
		stations: [2]
	},
	{
		id: 33,
		name: "10 Décembre 1984",
		coords: [36.84424, 10.18404],
		stations: [2]
	},
	{
		id: 34,
		name: "Cité des Sciences",
		coords: [36.84699, 10.19237],
		stations: [2]
	},
	{
		id: 35,
		name: "L'indépendance",
		coords: [36.85437, 10.19593],
		stations: [2]
	},
	{
		id: 36,
		name: "Ariana",
		coords: [36.85978, 10.19751],
		stations: [2]
	},
];

var stationsMetroTGM_IbnKhaldoon = [
	{
		id: 37,
		name: "Beb El Khadhra",
		coords: [36.81027, 10.17243],
		stations: [3, 4, 5]
	},
	{
		id: 38,
		name: "Beb El Assal",
		coords: [36.81327, 10.1682],
		stations: [3, 4, 5]
	},
	{
		id: 39,
		name: "Beb Saadoun",
		coords: [36.80983, 10.1622],
		stations: [3, 4, 5]
	},
	{
		id: 40,
		name: "Mefteh Saadallah",
		coords: [36.81312, 10.15625],
		stations: [3, 5]
	},
	{
		id: 41,
		name: "Rommena",
		coords: [36.82341, 10.15094],
		stations: [3, 5]
	},
	{
		id: 42,
		name: "Campus",
		coords: [36.82597, 10.14388],
		stations: [3, 5]
	},
	{
		id: 43,
		name: "14 Janvier 2011",
		coords: [36.82285, 10.13997],
		stations: [3, 5]
	},
	{
		id: 44,
		name: "Les Jasmins",
		coords: [36.82582, 10.13459],
		stations: [3, 5]
	},
	{
		id: 45,
		name: "Ibn Khaldoon",
		coords: [36.83073, 10.13416],
		stations: [3]
	},
];

var stationsMetroTGM_Intilaka = [
	{
		id: 46,
		name: "Ettahrir",
		coords: [36.82907, 10.12869],
		stations: [5]
	},
	{
		id: 47,
		name: "Omrane Supérieur",
		coords: [36.83052, 10.12404],
		stations: [5]
	},
	{
		id: 48,
		name: "Ettadhamen",
		coords: [36.83563, 10.11766],
		stations: [5]
	},
	{
		id: 49,
		name: "Intilaka",
		coords: [36.83921, 10.11703],
		stations: [5]
	},
];

var stationsMetroTGM_Campus = [
	{
		id: 50,
		name: "Bouchoucha",
		coords: [36.8095, 10.15029],
		stations: [4]
	},
	{
		id: 51,
		name: "20 Mars",
		coords: [36.80832, 10.14241],
		stations: [4]
	},
	{
		id: 52,
		name: "Bardo",
		coords: [36.8072, 10.13525],
		stations: [4]
	},
	{
		id: 53,
		name: "Essaïdia",
		coords: [36.80541, 10.12666],
		stations: [4]
	},
	{
		id: 54,
		name: "Khaznadar",
		coords: [36.8042, 10.12178],
		stations: [4]
	},
	{
		id: 55,
		name: "L'Artisanat",
		coords: [36.8029, 10.11602],
		stations: [4]
	},
	{
		id: 56,
		name: "Danden",
		coords: [36.80221, 10.11076],
		stations: [4]
	},
	{
		id: 57,
		name: "Slimen Kehia",
		coords: [36.80332, 10.09909],
		stations: [4]
	},
	{
		id: 58,
		name: "Moncef Bey",
		coords: [36.80525, 10.09067],
		stations: [4]
	},
	{
		id: 59,
		name: "Errazi",
		coords: [36.807441, 10.082297],
		stations: [4]
	},
	{
		id: 60,
		name: "Technopôle",
		coords: [36.808983, 10.076042],
		stations: [4]
	},
	{
		id: 61,
		name: "Palais El Warda",
		coords: [36.810241, 10.068282],
		stations: [4]
	},
	{
		id: 62,
		name: "Campus Manouba",
		coords: [36.812998, 10.062295],
		stations: [4]
	},
];

var stationsMetroTGM_BenArous = [
	{
		id: 63,
		name: "Beb Alioua",
		coords: [36.78572, 10.1798],
		stations: [1, 6]
	},
	{
		id: 64,
		name: "Mohamed Manachou",
		coords: [36.7821, 10.17986],
		stations: [1, 6]
	},
	{
		id: 65,
		name: "13 Août",
		coords: [36.77502, 10.17921],
		stations: [1, 6]
	},
	{
		id: 66,
		name: "Mohamed Ali",
		coords: [36.76789, 10.18389],
		stations: [1, 6]
	},
	{
		id: 67,
		name: "Kabbaria",
		coords: [36.75977, 10.1906],
		stations: [1]
	},
	{
		id: 68,
		name: "Ibn Sina",
		coords: [36.75425, 10.19395],
		stations: [1]
	},
	{
		id: 69,
		name: "Ouardia 4",
		coords: [36.75421, 10.19907],
		stations: [1]
	},
	{
		id: 70,
		name: "Cité Ennour",
		coords: [36.75148, 10.20474],
		stations: [1]
	},
	{
		id: 71,
		name: "Abou El Kacem Echebbi",
		coords: [36.75244, 10.21474],
		stations: [1]
	},
	{
		id: 72,
		name: "Ben Arous",
		coords: [36.75536, 10.21898],
		stations: [1]
	},
];

var stationsMetroTGM_Mourouj2 = [
	{
		id: 73,
		name: "Taher Haddad",
		coords: [36.760753, 10.187020],
		stations: [6]
	},
	{
		id: 74,
		name: "El Ghazeli",
		coords: [36.754618, 10.187620],
		stations: [6]
	},
	{
		id: 75,
		name: "Cité Municipale",
		coords: [36.74838, 10.18876],
		stations: [6]
	},
	{
		id: 76,
		name: "Ennesri",
		coords: [36.7451, 10.19047],
		stations: [6]
	},
	{
		id: 77,
		name: "El Montazah",
		coords: [36.7429, 10.19353],
		stations: [6]
	},
	{
		id: 78,
		name: "El Mourouj 2",
		coords: [36.74211, 10.1978],
		stations: [6]
	},
];

var autresPlaces = [
	{
		id: "ISI",
		name: "ISI",
		coords: [36.8613903120047, 10.189143419265749]
	},
];

//	http://stackoverflow.com/questions/1181575/determine-whether-an-array-contains-a-value
//	Determine whether an array contains a value [duplicate]
function containsStation(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i].name === obj.name) {
            return true;
        }
    }
    return false;
}

// Toutes les stations
var stations = [];
//var nomMetros = [];	// hashmap ( nomStation -> metro )

var addElementToArray = function(element) {
	// s'il n'existe pas, on l'ajoute
	if(!containsStation(stations, element)) {
		// add the element to the array
		stations[stations.length] = element;
	}
};

// to ensure having the station only once !
stationsTGM.forEach(addElementToArray);
stationsMetroTGM_Passage.forEach(addElementToArray);
stationsMetroPassage_Ariana.forEach(addElementToArray);
stationsMetroTGM_IbnKhaldoon.forEach(addElementToArray);
stationsMetroTGM_Intilaka.forEach(addElementToArray);
stationsMetroTGM_Campus.forEach(addElementToArray);
stationsMetroTGM_BenArous.forEach(addElementToArray);
stationsMetroTGM_Mourouj2.forEach(addElementToArray);

// retourne le nom de la station à partir de son id
function s(id) {
	var res = undefined;
	stations.forEach(function(element) {
		if( element.id === id ) {
			//res = element.name + element.stations.join(' | ');
			res = element.name;
		}
	});
	return res;
}

// retourne la liste des métros qui passent par cette station
function ns(nomStation) {
	var res = undefined;
	stations.forEach(function(element) {
		if( element.name === nomStation ) {
			//res = element.name + element.stations.join(' | ');
			res = element.stations;
		}
	});
	return res;
}

// Construction du graphe
var graph = new Graph();

// La Marsa -> Tunis Marine
graph.addEdge(s(1), s(2));
graph.addEdge(s(2), s(3));
graph.addEdge(s(3), s(4));
graph.addEdge(s(4), s(5));
graph.addEdge(s(5), s(6));
graph.addEdge(s(6), s(7));
graph.addEdge(s(7), s(8));
graph.addEdge(s(8), s(9));
graph.addEdge(s(9), s(10));
graph.addEdge(s(10), s(11));
graph.addEdge(s(11), s(12));
graph.addEdge(s(12), s(13));
graph.addEdge(s(13), s(14));
graph.addEdge(s(14), s(15));
graph.addEdge(s(15), s(16));
graph.addEdge(s(16), s(17));
graph.addEdge(s(17), s(18));

// Tunis Marine -> Farhat Hached
graph.addEdge(s(18), s(20));

// Farhat Hached -> Station République
graph.addEdge(s(20), s(21));
graph.addEdge(s(21), s(22));
graph.addEdge(s(22), s(23));

// Station République -> Mandela
graph.addEdge(s(23), s(25));

// Mandela -> Palestine
graph.addEdge(s(25), s(26));
graph.addEdge(s(26), s(27));

// Palestine -> Les Jardins
graph.addEdge(s(27), s(29));

// Les Jardins -> Ariana
graph.addEdge(s(29), s(30));
graph.addEdge(s(30), s(31));
graph.addEdge(s(31), s(32));
graph.addEdge(s(32), s(33));
graph.addEdge(s(33), s(34));
graph.addEdge(s(34), s(35));
graph.addEdge(s(35), s(36));

// Station République -> Beb El Khadhra
graph.addEdge(s(23), s(37));

// Beb El Khadhra -> Ibn Khaldoon
graph.addEdge(s(37), s(38));
graph.addEdge(s(38), s(39));
graph.addEdge(s(39), s(40));
graph.addEdge(s(40), s(41));
graph.addEdge(s(41), s(42));
graph.addEdge(s(42), s(43));
graph.addEdge(s(43), s(44));
graph.addEdge(s(44), s(45));

// Les Jasmins -> Ettahrir
graph.addEdge(s(44), s(46));

// Ettahrir -> Intilaka
graph.addEdge(s(46), s(47));
graph.addEdge(s(47), s(48));
graph.addEdge(s(48), s(49));

// Beb Saadoun -> Bouchoucha
graph.addEdge(s(39), s(50));

// Bouchoucha -> Campus Manouba
graph.addEdge(s(50), s(51));
graph.addEdge(s(51), s(52));
graph.addEdge(s(52), s(53));
graph.addEdge(s(53), s(54));
graph.addEdge(s(54), s(55));
graph.addEdge(s(55), s(56));
graph.addEdge(s(56), s(57));
graph.addEdge(s(57), s(58));
graph.addEdge(s(58), s(59));
graph.addEdge(s(59), s(60));
graph.addEdge(s(60), s(61));
graph.addEdge(s(61), s(62));

// Station Barcelone -> Beb Alioua
graph.addEdge(s(21), s(63));

// Beb Alioua -> Ben Arous
graph.addEdge(s(63), s(64));
graph.addEdge(s(64), s(65));
graph.addEdge(s(65), s(66));
graph.addEdge(s(66), s(67));
graph.addEdge(s(67), s(68));
graph.addEdge(s(68), s(69));
graph.addEdge(s(69), s(70));
graph.addEdge(s(70), s(71));
graph.addEdge(s(71), s(72));

// Mohamed Ali -> Taher Haddad
graph.addEdge(s(66), s(73));

// Taher Haddad -> El Mourouj 2
graph.addEdge(s(73), s(74));
graph.addEdge(s(74), s(75));
graph.addEdge(s(75), s(76));
graph.addEdge(s(76), s(77));
graph.addEdge(s(77), s(78));


bfs(graph, s(1));	// giving distances to the edges
