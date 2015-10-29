var cesiumWidget = new Cesium.Viewer('cesiumContainer');
//add a point
var point = cesiumWidget.entities;

point.add({
        position : Cesium.Cartesian3.fromDegrees(136.173477, 35.899619),
        point : {
            pixelSize : 10,
            color : Cesium.Color.BLUE
    }
});

var line = cesiumWidget.entities;

line.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([136.137600, 36.218795,
                                                        136.146183, 36.210070,
                                                        136.147385, 36.197465,
                                                        136.155109, 36.191923,
                                                        136.157513, 36.188183,
                                                        136.154938, 36.182364,
                                                        136.146870, 36.175574
                                                ]),
        width : 5,
        material : Cesium.Color.RED
    }
});
