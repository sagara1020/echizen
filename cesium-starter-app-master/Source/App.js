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
    name : 'Red line',
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

//add polygon
var polygon = cesiumWidget.entities;

polygon.add({
    name : 'polygon',
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArray([136.220266, 36.066095,
                                                        136.220287, 36.063848,
                                                        136.221542, 36.063857,
                                                        136.222444, 36.063978,
                                                        136.222529, 36.064239,
                                                        136.223495, 36.064516,
                                                        136.223238, 36.065704,
                                                        136.223034, 36.065722,
                                                        136.222948, 36.066190,
                                                        136.222315, 36.066138,
                                                        136.221435, 36.066216,
                                                      ]),
        extrudedHeight: 3333.0,
	material : Cesium.Color.GREEN
    }
});
