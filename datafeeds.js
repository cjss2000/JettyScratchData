var trackData;
var tacosDisplayed = true;
var tacoEntities = [];
var showOption = {
    show: true,
};


function parseDataFeed() {
    fetch('/datafeed/?test=global', {
        method: 'GET',
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error with network repsonse");
            }
            return response.json();
        })
        .then((trackData) => {
            console.log('fetching track data:', trackData)
            trackData.forEach((item) => {
                console.log(item);
                let DataUnit = new ms.Symbol(item.symbol);
                let symbolDetails = {
                    width: 40,
                    height: 30,
                };
                if ((item.type === "Enemy") || (item.type === "Global Significant")) {

                    viewer.entities.add({
                        position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
                        billboard: {
                            image: DataUnit.asCanvas(),
                            width: symbolDetails.width,
                            height: symbolDetails.height,
                            show: true,
                            type: item.type
                        }
                    });
                    console.log(item.type);
                } else {
                    item.show = false;
                }


            });


        })

        .catch((error) => {
            console.error("Error loading track data: ", error);
        });
}

//datafeeds.js

export function fetchData(trackType) {
    console.log(trackType);
    return fetch('/datafeed?trackType=' + trackType, {
        method: 'GET',
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Response from Servlet was not okay");
            }
            return response.json();
        })
        .then((trackData) => {
            console.log("fetching data", trackData)
            trackData.forEach((item) => {
                let DataUnit = new ms.Symbol(item.symbol);
                let symbolDetails = {
                    width: 40,
                    height: 30,
                };

                viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
                    billboard: {
                        image: DataUnit.asCanvas(),
                        width: symbolDetails.width,
                        height: symbolDetails.height,
                        show: true,
                        type: item.type
                    }
                });
            });
        })
        .catch((error) => {
            console.error("error fetching track data", error);
        });
}

export function removeEntities() {
    viewer.entities.removeAll(); 
}
export function fetchTacos() {

    fetch('/testservlet', {
        method: 'GET',
    })
        .then((response) => {
            if (!response.ok) {
                console.log("Error with Servlet Response")
            }
            console.log(response)
            return response.json();

        })
        .then((TacoData) => {
            // console.log("fetching your taco destinations", TacoData)
            TacoData.forEach((item) => {
                let tacoSymbol = '30042000001201051100';
                let tacoDataUnit = new ms.Symbol(tacoSymbol);
                let symbolDetails = {
                    width: 40,
                    height: 30,
                };
                let entity = viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
                    billboard: {
                        image: tacoDataUnit.asCanvas(),
                        width: symbolDetails.width,
                        height: symbolDetails.height,
                        show: true,
                        type: item.type
                    }
                });

                tacoEntities.push(entity);

                console.log("Array contents", tacoEntities)
            });

        })
}

export function toggleTacos(fetch) {
    if (fetch) {
        fetchTacos();

    } else {
        viewer.entities.removeAll();
    }


}
const uA = '30031000000000000000';
const rU = '30061000000000000000';

var UkraineUnit = new ms.Symbol(uA);
var RussiaUnit = new ms.Symbol(rU);
// const DataUnit = new ms.Symbol(item.symbol);

export function fetchLegacy() {
    fetch('/legacydata', {
        method: 'GET',
    })
    .then((response) => {
        if (!response.ok) {
            console.log("Issue with Servlet Response")
        }
        return response.json();
    })
        .then(legacyData => {
            let symbolDetails = {
                width: 40,
                height: 30,
            };
            legacyData.forEach((item) => {
                viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
                    billboard: {
                        image: RussiaUnit.asCanvas(),
                        width: symbolDetails.width,
                        height: symbolDetails.height,
                        show: true,
                        type: item.type
                    }
            });
                console.log(item);
        });
        // .catch((error) => {
        //         console.error("error fetching track data", error);
        //     });
        });
}

export function fetchUkraine() {
    fetch('/Ukraine', {
        method: 'GET',
    })
        .then((response) => {
            if (!response.ok) {
                console.log("Error with Servlet Response")
            }
          //  console.log(response)
            return response.json();
        })
        .then(ukraineData => {
            let symbolDetails = {
                width: 40,
                height: 30,
            };
            ukraineData.forEach((item) => {

          //  console.log(item);
            if (item.name.includes("russia") || item.name.includes("Ru")) {
            viewer.entities.add({
                    position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
                    billboard: {
                        image: RussiaUnit.asCanvas(),
                        width: symbolDetails.width,
                        height: symbolDetails.height,
                        show: true,
                        type: item.type
                    }

                }); console.log(item);
            }  else {
                viewer.entities.add({
                        position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
                        billboard: {
                            image: UkraineUnit.asCanvas(),
                            width: symbolDetails.width,
                            height: symbolDetails.height,
                            show: true,
                            type: item.type
                        }

                    });
            }
            });
        })
        .catch(error => {
            console.error("Error fetching Ukraine data: ", error);
        });
}

// parseDataFeed();
//  fetchTacos();
