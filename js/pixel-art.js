var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Guardando en variables elementos de DOM
let $paleta= document.getElementById("paleta");
let $grillaPixeles=document.getElementById("grilla-pixeles");
let tamañoGrilla= 1750;
let $indicadorDeColor;

// Generando paleta de colores
function paletaColores(){
  for(let i=0;i<nombreColores.length; i++){
    let color= nombreColores[i];
      let div = document.createElement('div');
      div.style.backgroundColor = color;
      div.className = "color-paleta";
      $paleta.appendChild(div);
    //console.log(nombreColores[i]);
    //console.log(div);
  }
}
// Creando la grilla de pixeles
function crearGrilla(){
  for(let i=0;i<=tamañoGrilla; i++){    
      let div = document.createElement('div');
      //div.style.backgroundColor = "red";
      $grillaPixeles.appendChild(div);
  }
}
// Indicador de color
function indicadorColor(){
  $("#paleta .color-paleta").click(function(){
  $indicadorDeColor = $("#indicador-de-color").css("background-color", $(this).css("background-color"));
  
});
}
// Función pintar pixel
function pintarPixel(){
  $grillaPixeles.addEventListener("mousedown", pixel);
  //$grillaPixeles.addEventListener("mouseover", continua);
  $grillaPixeles.addEventListener("mouseup", levantarPincel);
  function pixel(e){
    e.target.style.backgroundColor = "red";
    if (!$grillaPixeles.addEventListener("mouseup", levantarPincel)) {
      $grillaPixeles.addEventListener("mouseover", continua);
    }          
  }
  function continua(e){
    e.target.style.backgroundColor = "red";     
  }
  function levantarPincel(e){
    e.target.style.backgroundColor = "trasparent";
  }
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual


  })
);

// Llamando funciones cuando el DOM está cargado
$(document).ready(iniciar());

function iniciar(){
  paletaColores();
  crearGrilla();
  indicadorColor()
  pintarPixel()
  
}
