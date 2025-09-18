
const MilairCode = '30032000001213010000';
const CommercialAirCode = '30042000001213010000';
const AirsymbolDetails = {
    width: 40,
    height: 30,
};

const Airfielddata =
[
    {
        "name": "Las Cruces Int Airport",
        "latitude": 32.2912322,
        "longitude": -106.9208121,
        "type": "Commercial"
    },
    {
        "name": "Stahmann Farms Airfield",
        "latitude": 32.1897222,
        "longitude": -106.7500000,
        "type": "Commercial"
    },
    // {
    //     "name": "Cielo Dorado Estates Airport",
    //     "latitude": null,
    //     "longitude": null,
    //     "type": "Commercial"
    // },
    {
        "name": "Dona Ana County International Jetport",
        "latitude": 31.8754202,
        "longitude": -106.7412324,
        "type": "Commercial"
    },
    {
        "name": "El Paso International Airport",
        "latitude": 31.8109001,
        "longitude": -106.3666147,
        "type": "Commercial"
    },
    {
        "name": "Biggs Army Airfield",
        "latitude": 31.8495131,
        "longitude": -106.421166,
        "type": "Military"
    },
    // {
    //     "name": "4 Delta Fort Bliss",
    //     "latitude": null,
    //     "longitude": null,
    //     "type": "Military"
    // },
    {
        "name": "Condron Army Airfield",
        "latitude": 32.2829064,
        "longitude": -106.5493808,
        "type": "Military"
    }
]
Airfielddata.forEach((item) => {

    const MilitaryUnit = new ms.Symbol(MilairCode, AirsymbolDetails);
    const CommericalUnit = new ms.Symbol(CommercialAirCode,AirsymbolDetails);
    if(item.type == "Military") {
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
        billboard: {
            image: MilitaryUnit.asCanvas(),
            width: AirsymbolDetails.width,
            height: AirsymbolDetails.height,
        }
    }
    ) } else {
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude),
            billboard: {
                image: CommericalUnit.asCanvas(),
                width: AirsymbolDetails.width,
                height: AirsymbolDetails.height,
    }});
}});