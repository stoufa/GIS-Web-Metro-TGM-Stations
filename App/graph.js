/*
    Ce fichier contient la structure de données et les opérateurs utilisés dans le graphe
*/

//  http://stackoverflow.com/questions/32527026/shortest-path-in-javascript
//  Shortest path in JavaScript

function Graph() {
  var neighbors = this.neighbors = {}; // Key = vertex, value = array of neighbors.

  // ajoute une arêttre ( bidirectionelle : a -> b et b -> a )
  this.addEdge = function (u, v) {
    if (neighbors[u] === undefined) {  // Add the edge u -> v.
      neighbors[u] = [];
    }
    neighbors[u].push(v);
    // graphe non orientée, donc bidirectionelle
    if (neighbors[v] === undefined) {  // Also add the edge v -> u in order
      neighbors[v] = [];               // to implement an undirected graph.
    }                                  // For a directed graph, delete
    neighbors[v].push(u);              // these four lines.
  };

  return this;
}

// Breadth-first search
// L'algorithme de parcours en largeur permet de calculer les distances de tous les nœuds depuis un nœud source dans un graphe non pondéré (orienté ou non orienté) [ Source : https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_largeur ]
function bfs(graph, source) {
  var queue = [ { vertex: source, count: 0 } ],
      visited = { source: true },
      tail = 0;
  while (tail < queue.length) {
    var u = queue[tail].vertex,
        count = queue[tail++].count;  // Pop a vertex off the queue.
    //print('distance from ' + source + ' to ' + u + ': ' + count);
    graph.neighbors[u].forEach(function (v) {
      if (!visited[v]) {
        visited[v] = true;
        queue.push({ vertex: v, count: count + 1 });
      }
    });
  }
}

// permet de trouver le chemin de plus prêt entre deux noeuds du graphe
function shortestPath(graph, source, target) {
  if (source == target) {   // Delete these four lines if
    print(source);          // you want to look for a cycle
    return;                 // when the source is equal to
  }                         // the target.
  var queue = [ source ],
      visited = { source: true },
      predecessor = {},
      tail = 0;
  while (tail < queue.length) {
    var u = queue[tail++],  // Pop a vertex off the queue.
        neighbors = graph.neighbors[u];
    for (var i = 0; i < neighbors.length; ++i) {
      var v = neighbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;
      if (v === target) {   // Check if the path is complete.
        var path = [ v ];   // If so, backtrack through the path.
        while (u !== source) {
          path.push(u);
          u = predecessor[u];
        }
        path.push(u);
        path.reverse();

        console.log(path);
        //var html = "<table><tr><td>nom station</td><td>noms métros</td></tr>";
        //var html = "";
        // ajout des numéroes de métros aux noms des stations
        for(var i = 0; i < path.length; ++i) {
          var nomStation = path[i];
          console.log('ns : ' + nomStation);
          console.log(ns(nomStation));
          path[i] = nomStation + " [ " + ns(nomStation).join(' / ') + " ]";

          //html = html + "<span style='padding:5px'>" + nomStation + "</span><span style='padding:5px'>" + ns(nomStation).join(' / ') + "</span>";
        }
        console.log(path);
        print(path.join(' &rarr; '));
        //print(path.join(' <br> '));
        //print(html);

        return;
      }
      predecessor[v] = u;
      queue.push(v);
    }
  }
  print('there is no path from ' + source + ' to ' + target);
}

// permet l'affichage du plus court chemin passé en paramétre
function print(s) {
  s = s || '';
  if(s === '') return;  // to prohibit showing empty notifications !
  displayInfo(s);
}

