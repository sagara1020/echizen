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
