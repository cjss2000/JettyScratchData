
import { fetchData } from './datafeeds.js';
import { fetchTacos } from './datafeeds.js';
import { toggleTacos } from './datafeeds.js';
import { fetchUkraine } from './datafeeds.js'
import { fetchLegacy } from './datafeeds.js'
import { removeEntities } from './datafeeds.js'
// import { fetchDropData } from './dropdatafeeds.js';

const symbolCode = '30031000001211000000'; // Replace with your desired MIL-STD-2525 symbol code
const symbolOptions = {
   // size: 40, // Adjust the size as needed
    width: 40,
    height: 30,
};

let getTacos = true;
const symbol = new ms.Symbol(symbolCode, symbolOptions);



//Create a Cesium billboard for the symbol
// const entity = viewer.entities.add({
//     position: Cesium.Cartesian3.fromDegrees(-100.77802176389179, 32.305969917912826), // Set the coordinates as needed
//     billboard: {
//         image: symbol.asCanvas(), // Use the milsymbol's generated canvas as the billboard image
//         width: symbolOptions.width,
//         height: symbolOptions.height,
//     },
// });
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(-106.4850, 31.7619, 10000000), 
    orientation: {
        heading: Cesium.Math.toRadians(0.0), 
        pitch: Cesium.Math.toRadians(-45.0), 
        roll: Cesium.Math.toRadians(0.0) 
    }
});

const infrantryUnit = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-106.77802176389179, 32.305969917912826),
    billboard: {
        image: symbol.asCanvas(),
        show: true,
        width: symbolOptions.width,
        height: symbolOptions.height,
    }});

    const testTrack = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-106.4850, 31.7619), // Set the coordinates as needed
        billboard: {
            image: symbol.asCanvas(),
            show: true,
            width: symbolOptions.width,
            height: symbolOptions.height,
        },
    });




let buttonBarDivId = document.getElementById("buttonDiv");
let buttonNavigation = document.getElementById("buttonNavigation");
//let buttonCategory = document.getElementById('buttonCategory');
const MOVEBUTTON = document.createElement('button');
const LAYER_BUTTON = document.createElement('button');
const HIDE_BUTTON = document.createElement('button');
const FRDNEU = document.createElement('button');
const CORENU = document.createElement('button');
const GLBSGN = document.createElement('button');
const MOVE_BUTTON_NORTH = document.createElement('button');
const MOVE_BUTTON_SOUTH = document.createElement('button');
const MOVE_BUTTON_WEST = document.createElement('button');
const MOVE_BUTTON_EAST = document.createElement('button');
const TacoButton = document.createElement('button');
const UKRButton = document.createElement('button');
const LegacyButton = document.createElement('button');
const clearTracks = document.createElement('button');



TacoButton.style.width = '58px';
TacoButton.style.height = '3xpx';
TacoButton.textContent = "T A C O S";
TacoButton.style.backgroundColor = "Orange";

UKRButton.style.width = '58px';
UKRButton.style.height = '3xpx';
UKRButton.textContent = "UKR";
UKRButton.style.backgroundColor = "Fusia";

LegacyButton.style.width = '58px';
LegacyButton.style.height = '3xpx';
LegacyButton.textContent = "RU Enemy";
LegacyButton.style.backgroundColor = "Gold";

clearTracks.style.width = '58px';
clearTracks.style.height = '3xpx';
clearTracks.textContent = "K I L L ";
clearTracks.style.backgroundColor = "Red";

FRDNEU.style.width = '58px';
FRDNEU.style.height = '38px';
FRDNEU.textContent = 'FRD NEU';
FRDNEU.style.backgroundColor = 'SteelBlue';

CORENU.style.width = '58px';
CORENU.style.height = '38px';
CORENU.textContent = 'COR ENU';
CORENU.style.backgroundColor = 'red';


GLBSGN.style.width = '58px';
GLBSGN.style.height = '38px';
GLBSGN.textContent = 'GLB SGN';
GLBSGN.style.backgroundColor = 'chartreuse';

MOVEBUTTON.style.backgroundColor = 'aquamarine';
MOVEBUTTON.textContent = 'move Icon';
MOVEBUTTON.style.width = '58px';
MOVEBUTTON.style.height = '38px';

//document.body.appendChild(moveButton);

HIDE_BUTTON.style.width = '58px';
HIDE_BUTTON.style.height = '38px';
HIDE_BUTTON.textContent = 'hide icon';
HIDE_BUTTON.style.backgroundColor = 'coral';


LAYER_BUTTON.style.width = '58px';
LAYER_BUTTON.style.height = '38px';
LAYER_BUTTON.textContent = 'change layer';
LAYER_BUTTON.style.backgroundColor = 'chartreuse';


MOVE_BUTTON_NORTH.style.width = '58px';
MOVE_BUTTON_NORTH.style.height = '38px';
MOVE_BUTTON_NORTH.textContent = 'move north';
MOVE_BUTTON_NORTH.style.backgroundColor = 'yellow';

MOVE_BUTTON_SOUTH.style.width = '58px';
MOVE_BUTTON_SOUTH.style.height = '38px';
MOVE_BUTTON_SOUTH.textContent = 'move south';
MOVE_BUTTON_SOUTH.style.backgroundColor = 'yellow';

MOVE_BUTTON_EAST.style.width = '58px';
MOVE_BUTTON_EAST.style.height = '38px';
MOVE_BUTTON_EAST.textContent = 'move east';
MOVE_BUTTON_EAST.style.backgroundColor = 'yellow';

MOVE_BUTTON_WEST.style.width = '58px';
MOVE_BUTTON_WEST.style.height = '38px';
MOVE_BUTTON_WEST.textContent = 'move west';
MOVE_BUTTON_WEST.style.backgroundColor = 'yellow';


buttonBarDivId.appendChild(MOVEBUTTON);
buttonBarDivId.appendChild(LAYER_BUTTON);
buttonBarDivId.appendChild(HIDE_BUTTON);
buttonBarDivId.appendChild(FRDNEU);
buttonBarDivId.appendChild(CORENU);
buttonBarDivId.appendChild(GLBSGN);
buttonBarDivId.appendChild(TacoButton);
buttonBarDivId.appendChild(UKRButton);
buttonBarDivId.appendChild(LegacyButton);
buttonBarDivId.appendChild(clearTracks);

buttonNavigation.appendChild(MOVE_BUTTON_NORTH);
buttonNavigation.appendChild(MOVE_BUTTON_EAST);
buttonNavigation.appendChild(MOVE_BUTTON_WEST);
buttonNavigation.appendChild(MOVE_BUTTON_SOUTH);


MOVE_BUTTON_NORTH.id = 'moveButtonNorth'; // Assign an id to the button
MOVE_BUTTON_SOUTH.id = 'moveButtonSouth'; // Assign an id to the button
MOVE_BUTTON_EAST.id = 'moveButtonEast'; // Assign an id to the button
MOVE_BUTTON_WEST.id = 'moveButtonWest'; // Assign an id to the button

let colorCount = false;
let buttonCount = false;
let moveCount = false;
let isFriendly = false;
let GLBSGNCount = false;
let CORENUCount = false;
let FRDNEUCount = false;
//Why are these counts working outside the function but not inside?
function colorChange() {
    // var colorCount = 0;
    if (colorCount === false) {

        const myImageryLayer = new Cesium.ImageryLayer(
            new Cesium.OpenStreetMapImageryProvider({
                url: "https://tile.openstreetmap.org/",
            })
        );


        viewer.scene.imageryLayers.add(myImageryLayer);
        LAYER_BUTTON.style.backgroundColor = 'red'
        colorCount = true;

    } else {
        const transportLayer = viewer.scene.imageryLayers.addImageryProvider(opentopomapTransportProvider)
        LAYER_BUTTON.style.backgroundColor = 'chartreuse'
        colorCount = false;
    }

}

function buttonHide(viewer) {
    //  var buttonCount = 0;
    console.log("Hide Button", buttonCount);
    if (buttonCount === false) {

        infrantryUnit.billboard.show = false;


        HIDE_BUTTON.style.backgroundColor = 'red'


        buttonCount = true;
    }

    else {
        infrantryUnit.billboard.show = true;
        HIDE_BUTTON.style.backgroundColor = 'coral'
        buttonCount = false;
    }


    // buttonHide(viewer);
}

function moveUnit(viewer) {
    if (moveCount === false) {
        infrantryUnit.position = Cesium.Cartesian3.fromDegrees(-106.77861221981614, 32.30526482854694)
        console.log("1st POS", infrantryUnit.position);
        MOVEBUTTON.style.backgroundColor = 'chartreuse';
        moveCount = true;
    }

    else {
        infrantryUnit.position = Cesium.Cartesian3.fromDegrees(-106.77802176389179, 32.305969917912826)
        console.log("2nd POS", infrantryUnit.position);
        MOVEBUTTON.style.backgroundColor = 'red';
        moveCount = false;
    }

}

function moveButtonNorth(){
    let latLonPos = Cesium.Cartographic.fromCartesian(infrantryUnit.position.getValue(Cesium.JulianDate.now()));
    console.log("latlonPos", latLonPos);
    latLonPos.latitude += Cesium.Math.toRadians(.001);
    console.log("pos change", latLonPos.latitude)
    const newPosition = Cesium.Cartesian3.fromRadians(latLonPos.longitude, latLonPos.latitude, 0.0);

    infrantryUnit.position = newPosition;
}

function moveButtonSouth(){
    let latLonPos1 = Cesium.Cartographic.fromCartesian(infrantryUnit.position.getValue(Cesium.JulianDate.now()));
    console.log("latlonPos", latLonPos1);
    latLonPos1.latitude += Cesium.Math.toRadians(-.001);

    const newPosition = Cesium.Cartesian3.fromRadians(latLonPos1.longitude, latLonPos1.latitude, 0.0);
    infrantryUnit.position = newPosition;
}
function moveButtonEast(){
    let latLonPos1 = Cesium.Cartographic.fromCartesian(infrantryUnit.position.getValue(Cesium.JulianDate.now()));
    console.log("latlonPos", latLonPos1);
    latLonPos1.longitude += Cesium.Math.toRadians(.001);

    const newPosition = Cesium.Cartesian3.fromRadians(latLonPos1.longitude, latLonPos1.latitude, 0.0);
    infrantryUnit.position = newPosition;
}
function moveButtonWest(){
    let latLonPos1 = Cesium.Cartographic.fromCartesian(infrantryUnit.position.getValue(Cesium.JulianDate.now()));
    console.log("latlonPos", latLonPos1);
    latLonPos1.longitude += Cesium.Math.toRadians(-.001);

    const newPosition = Cesium.Cartesian3.fromRadians(latLonPos1.longitude, latLonPos1.latitude, 0.0);
    infrantryUnit.position = newPosition;
}



// function displayTracks(){
//
// }
//
// function  hideTracks(){
//
// }
//
// function toggleTracks() {
//     viewer.entities.values.forEach((entity) =>{
//         //
//     })
//     if (trackToggleEnabled) {
//         hideTracks();
//         trackToggleEnabled = false;
//     } else {
//
//         displayTracks();
//         trackToggleEnabled = true;
//     }
// }

MOVE_BUTTON_NORTH.addEventListener('click', function () {

    moveButtonNorth(viewer);
});
MOVE_BUTTON_SOUTH.addEventListener('click', (event) => {

    moveButtonSouth(viewer);
});
MOVE_BUTTON_EAST.addEventListener('click', (event) => {

    moveButtonEast(viewer);
});
MOVE_BUTTON_WEST.addEventListener('click', (event) => {

    moveButtonWest(viewer);
});
LAYER_BUTTON.addEventListener('click', function() {
    colorChange(viewer);
});


HIDE_BUTTON.addEventListener('click', function() {
    buttonHide(viewer);
});

MOVEBUTTON.addEventListener('click', function (){
    moveUnit(viewer)
});

 FRDNEU.addEventListener('click', function (){
     fetchData("Military")
     fetchData("Commercial")
 });
//

GLBSGN.addEventListener('click', function (){
    fetchData("Global Significant")
});
CORENU.addEventListener('click', function (){
    fetchData("Enemy")
});
TacoButton.addEventListener('click', function (){


    toggleTacos(getTacos);
    getTacos = false;


});
UKRButton.addEventListener('click', function (){
    fetchUkraine();
})
LegacyButton.addEventListener('click', function (){
    fetchLegacy();
});
clearTracks.addEventListener('click', function (){
    removeEntities();
});

// ToggleButton.addEventListener('click', toggleTracks);



let trackData;

