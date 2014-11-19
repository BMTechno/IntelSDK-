function stringifyVector(vec){
  return ""+vec.x+" "+vec.y+" "+vec.z;
}

function stringifyVertex(vec){
  return "vertex "+stringifyVector(vec)+" \n";
}

function generateSTL(geometry){
  var vertices = geometry.vertices;
  var tris     = geometry.faces;

  var stl = "no_name";
  for(var i = 0; i<tris.length; i++){
        stl += ("facet normal "+stringifyVector( tris[i].normal )+" \n");
        stl += ("outer loop \n");
        stl += stringifyVertex( vertices[ tris[i].a ]);
        stl += stringifyVertex( vertices[ tris[i].b ]);
        stl += stringifyVertex( vertices[ tris[i].c ]);
        stl += ("endloop \n");
        stl += ("endfacet \n");
  }
  stl += ("endsolid");
  return stl
}

function saveSTL(geometry, linkElement){
    var stlString = generateSTL(geometry);
    var blob = new Blob([stlString], {type: 'text/plain'});
    console.log(stlString);
    objectURL = URL.createObjectURL(blob);
    console.log(objectURL);
    linkElement.setAttribute("href", objectURL);
    linkElement.setAttribute("download", "3DObject.stl");
}