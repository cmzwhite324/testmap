var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mergedstreets_1955_outerstreets_1 = new ol.format.GeoJSON();
var features_mergedstreets_1955_outerstreets_1 = format_mergedstreets_1955_outerstreets_1.readFeatures(json_mergedstreets_1955_outerstreets_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergedstreets_1955_outerstreets_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergedstreets_1955_outerstreets_1.addFeatures(features_mergedstreets_1955_outerstreets_1);
var lyr_mergedstreets_1955_outerstreets_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mergedstreets_1955_outerstreets_1, 
                style: style_mergedstreets_1955_outerstreets_1,
                interactive: true,
                title: '<img src="styles/legend/mergedstreets_1955_outerstreets_1.png" /> mergedstreets_1955_outerstreets'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mergedstreets_1955_outerstreets_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mergedstreets_1955_outerstreets_1];
lyr_mergedstreets_1955_outerstreets_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SEGMENTID': 'SEGMENTID', 'FULLNAME': 'FULLNAME', 'RECLENGTH': 'RECLENGTH', 'OLDID': 'OLDID', 'PMPID': 'PMPID', 'COMMENTS': 'COMMENTS', 'ADDRESSED': 'ADDRESSED', 'PRE_DIR': 'PRE_DIR', 'ST_NAME': 'ST_NAME', 'ST_TYPE': 'ST_TYPE', 'LADD_FROM': 'LADD_FROM', 'RADD_FROM': 'RADD_FROM', 'LADD_TO': 'LADD_TO', 'RADD_TO': 'RADD_TO', 'SUF_DIR': 'SUF_DIR', 'CLASSIFICA': 'CLASSIFICA', 'ROAD_NAME': 'ROAD_NAME', 'NAME_CAPS': 'NAME_CAPS', 'E911Class': 'E911Class', 'MUN_R': 'MUN_R', 'MUN_L': 'MUN_L', 'SegmentID_': 'SegmentID_', 'EDITDATE': 'EDITDATE', 'Join_ID': 'Join_ID', 'MPH': 'MPH', 'Time_': 'Time_', 'Max_Height': 'Max_Height', 'Max_Weight': 'Max_Weight', 'ONEWAY': 'ONEWAY', 'City_R': 'City_R', 'City_L': 'City_L', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'sinuosity': 'sinuosity', 'map_origin': 'map_origin', 'StreetTo': 'StreetTo', 'StreetFrom': 'StreetFrom', 'CurrentPCI': 'CurrentPCI', 'OverlayPro': 'OverlayPro', 'OverlayCom': 'OverlayCom', 'LinearMile': 'LinearMile', 'Shape__Len': 'Shape__Len', 'row': 'row', 'Shape_Leng': 'Shape_Leng', 'layer': 'layer', 'path': 'path', });
lyr_mergedstreets_1955_outerstreets_1.set('fieldImages', {'OBJECTID': 'Range', 'SEGMENTID': 'TextEdit', 'FULLNAME': 'TextEdit', 'RECLENGTH': 'TextEdit', 'OLDID': 'Range', 'PMPID': 'Range', 'COMMENTS': 'TextEdit', 'ADDRESSED': 'TextEdit', 'PRE_DIR': 'TextEdit', 'ST_NAME': 'TextEdit', 'ST_TYPE': 'TextEdit', 'LADD_FROM': 'TextEdit', 'RADD_FROM': 'TextEdit', 'LADD_TO': 'TextEdit', 'RADD_TO': 'TextEdit', 'SUF_DIR': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'NAME_CAPS': 'TextEdit', 'E911Class': 'TextEdit', 'MUN_R': 'TextEdit', 'MUN_L': 'TextEdit', 'SegmentID_': 'Range', 'EDITDATE': 'TextEdit', 'Join_ID': 'TextEdit', 'MPH': 'Range', 'Time_': 'TextEdit', 'Max_Height': 'TextEdit', 'Max_Weight': 'Range', 'ONEWAY': 'TextEdit', 'City_R': 'TextEdit', 'City_L': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'sinuosity': 'TextEdit', 'map_origin': 'TextEdit', 'StreetTo': 'TextEdit', 'StreetFrom': 'TextEdit', 'CurrentPCI': 'Range', 'OverlayPro': 'TextEdit', 'OverlayCom': 'TextEdit', 'LinearMile': 'TextEdit', 'Shape__Len': 'TextEdit', 'row': 'TextEdit', 'Shape_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_mergedstreets_1955_outerstreets_1.set('fieldLabels', {'OBJECTID': 'no label', 'SEGMENTID': 'no label', 'FULLNAME': 'no label', 'RECLENGTH': 'no label', 'OLDID': 'no label', 'PMPID': 'no label', 'COMMENTS': 'no label', 'ADDRESSED': 'no label', 'PRE_DIR': 'no label', 'ST_NAME': 'no label', 'ST_TYPE': 'no label', 'LADD_FROM': 'no label', 'RADD_FROM': 'no label', 'LADD_TO': 'no label', 'RADD_TO': 'no label', 'SUF_DIR': 'no label', 'CLASSIFICA': 'no label', 'ROAD_NAME': 'no label', 'NAME_CAPS': 'no label', 'E911Class': 'no label', 'MUN_R': 'no label', 'MUN_L': 'no label', 'SegmentID_': 'no label', 'EDITDATE': 'no label', 'Join_ID': 'no label', 'MPH': 'no label', 'Time_': 'no label', 'Max_Height': 'no label', 'Max_Weight': 'no label', 'ONEWAY': 'no label', 'City_R': 'no label', 'City_L': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'sinuosity': 'no label', 'map_origin': 'no label', 'StreetTo': 'no label', 'StreetFrom': 'no label', 'CurrentPCI': 'no label', 'OverlayPro': 'no label', 'OverlayCom': 'no label', 'LinearMile': 'no label', 'Shape__Len': 'no label', 'row': 'no label', 'Shape_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_mergedstreets_1955_outerstreets_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});