//
//
//     let trackdropData;
//
//
//     function parsedropDataFeed() {
//         fetch('/DropDataFeed/', {
//            method: 'GET',
//        })
//            .then((response) => {
//                if (!response.ok) {
//                    throw  new Error("Error with network repsonse");
//                }
//                return response.json();
//            })
//            .then((trackdropData) => {
//            console.log('fetching track data:', trackData)
// validate in console that data is being fetched from web server
//
//
//
//                trackdropData.forEach((item) => {
//                    const DataUnit = new ms.Symbol(item.symbol);
//                    const symbolDetails = {
//                        width: 40,
//                        height: 30,
//                    };
//
//                    viewer.entities.add({
//                        position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
//                        billboard: {
//                            image: DataUnit.asCanvas(),
//                            width: symbolDetails.width,
//                            height: symbolDetails.height,
//                            show: true,
//                            type: item.type
//                        },
//
//                    });
//                });
//
//            })
//
//            .catch((error) => {
//                console.error("Error loading track data: ", error);
//            });
//     }
// datafeeds.js
//
//     export function fetchDropData() {
//        return fetch('/DropDataFeed/', {
//            method: 'GET',
//        })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Error with network response");
//         }
//         return response.json();
//     })
//
//     .catch((error) => {
//         console.error("Error loading track data: ", error);
//     });
//     }
//
//
//     parsedropDataFeed();
//
