var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DelhiBoundary_1 = new ol.format.GeoJSON();
var features_DelhiBoundary_1 = format_DelhiBoundary_1.readFeatures(json_DelhiBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelhiBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelhiBoundary_1.addFeatures(features_DelhiBoundary_1);
var lyr_DelhiBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelhiBoundary_1, 
                style: style_DelhiBoundary_1,
                popuplayertitle: "Delhi Boundary",
                interactive: true,
                title: '<img src="styles/legend/DelhiBoundary_1.png" /> Delhi Boundary'
            });
var format_delhi_slums_2 = new ol.format.GeoJSON();
var features_delhi_slums_2 = format_delhi_slums_2.readFeatures(json_delhi_slums_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_slums_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delhi_slums_2.addFeatures(features_delhi_slums_2);
var lyr_delhi_slums_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delhi_slums_2, 
                style: style_delhi_slums_2,
                popuplayertitle: "delhi_slums",
                interactive: true,
                title: 'delhi_slums'
            });
var format_delhi_metro_stations_3 = new ol.format.GeoJSON();
var features_delhi_metro_stations_3 = format_delhi_metro_stations_3.readFeatures(json_delhi_metro_stations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_metro_stations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delhi_metro_stations_3.addFeatures(features_delhi_metro_stations_3);
var lyr_delhi_metro_stations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delhi_metro_stations_3, 
                style: style_delhi_metro_stations_3,
                popuplayertitle: "delhi_metro_stations",
                interactive: true,
                title: 'delhi_metro_stations'
            });
var format_Transporttransport_4 = new ol.format.GeoJSON();
var features_Transporttransport_4 = format_Transporttransport_4.readFeatures(json_Transporttransport_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transporttransport_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transporttransport_4.addFeatures(features_Transporttransport_4);
var lyr_Transporttransport_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transporttransport_4, 
                style: style_Transporttransport_4,
                popuplayertitle: "Transport — transport",
                interactive: true,
                title: 'Transport — transport'
            });
var format_delhi_metro_oh_line_5 = new ol.format.GeoJSON();
var features_delhi_metro_oh_line_5 = format_delhi_metro_oh_line_5.readFeatures(json_delhi_metro_oh_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_metro_oh_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delhi_metro_oh_line_5.addFeatures(features_delhi_metro_oh_line_5);
var lyr_delhi_metro_oh_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delhi_metro_oh_line_5, 
                style: style_delhi_metro_oh_line_5,
                popuplayertitle: "delhi_metro_oh_line",
                interactive: true,
                title: 'delhi_metro_oh_line'
            });
var format_buffered_amenities_6 = new ol.format.GeoJSON();
var features_buffered_amenities_6 = format_buffered_amenities_6.readFeatures(json_buffered_amenities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_amenities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_amenities_6.addFeatures(features_buffered_amenities_6);
var lyr_buffered_amenities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_amenities_6, 
                style: style_buffered_amenities_6,
                popuplayertitle: "buffered_amenities",
                interactive: true,
                title: '<img src="styles/legend/buffered_amenities_6.png" /> buffered_amenities'
            });
var format_buffered_delhi_slums_7 = new ol.format.GeoJSON();
var features_buffered_delhi_slums_7 = format_buffered_delhi_slums_7.readFeatures(json_buffered_delhi_slums_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_delhi_slums_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_delhi_slums_7.addFeatures(features_buffered_delhi_slums_7);
var lyr_buffered_delhi_slums_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_delhi_slums_7, 
                style: style_buffered_delhi_slums_7,
                popuplayertitle: "buffered_delhi_slums",
                interactive: true,
                title: '<img src="styles/legend/buffered_delhi_slums_7.png" /> buffered_delhi_slums'
            });
var format_buffered_metro_stations_8 = new ol.format.GeoJSON();
var features_buffered_metro_stations_8 = format_buffered_metro_stations_8.readFeatures(json_buffered_metro_stations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_metro_stations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_metro_stations_8.addFeatures(features_buffered_metro_stations_8);
var lyr_buffered_metro_stations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_metro_stations_8, 
                style: style_buffered_metro_stations_8,
                popuplayertitle: "buffered_metro_stations",
                interactive: true,
                title: '<img src="styles/legend/buffered_metro_stations_8.png" /> buffered_metro_stations'
            });
var format_buffered_metro_overhead_lines_9 = new ol.format.GeoJSON();
var features_buffered_metro_overhead_lines_9 = format_buffered_metro_overhead_lines_9.readFeatures(json_buffered_metro_overhead_lines_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_metro_overhead_lines_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_metro_overhead_lines_9.addFeatures(features_buffered_metro_overhead_lines_9);
var lyr_buffered_metro_overhead_lines_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_metro_overhead_lines_9, 
                style: style_buffered_metro_overhead_lines_9,
                popuplayertitle: "buffered_metro_overhead_lines",
                interactive: true,
                title: '<img src="styles/legend/buffered_metro_overhead_lines_9.png" /> buffered_metro_overhead_lines'
            });
var format_buffered_metro_stations_005_10 = new ol.format.GeoJSON();
var features_buffered_metro_stations_005_10 = format_buffered_metro_stations_005_10.readFeatures(json_buffered_metro_stations_005_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_metro_stations_005_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_metro_stations_005_10.addFeatures(features_buffered_metro_stations_005_10);
var lyr_buffered_metro_stations_005_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_metro_stations_005_10, 
                style: style_buffered_metro_stations_005_10,
                popuplayertitle: "buffered_metro_stations_005",
                interactive: true,
                title: '<img src="styles/legend/buffered_metro_stations_005_10.png" /> buffered_metro_stations_005'
            });
var format_buffered_industries_11 = new ol.format.GeoJSON();
var features_buffered_industries_11 = format_buffered_industries_11.readFeatures(json_buffered_industries_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_industries_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_industries_11.addFeatures(features_buffered_industries_11);
var lyr_buffered_industries_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_industries_11, 
                style: style_buffered_industries_11,
                popuplayertitle: "buffered_industries",
                interactive: true,
                title: '<img src="styles/legend/buffered_industries_11.png" /> buffered_industries'
            });
var format_buffered_waterways_12 = new ol.format.GeoJSON();
var features_buffered_waterways_12 = format_buffered_waterways_12.readFeatures(json_buffered_waterways_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_waterways_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_waterways_12.addFeatures(features_buffered_waterways_12);
var lyr_buffered_waterways_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_waterways_12, 
                style: style_buffered_waterways_12,
                popuplayertitle: "buffered_waterways",
                interactive: true,
                title: '<img src="styles/legend/buffered_waterways_12.png" /> buffered_waterways'
            });
var format_buffered_transport_lines_13 = new ol.format.GeoJSON();
var features_buffered_transport_lines_13 = format_buffered_transport_lines_13.readFeatures(json_buffered_transport_lines_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_transport_lines_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_transport_lines_13.addFeatures(features_buffered_transport_lines_13);
var lyr_buffered_transport_lines_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_transport_lines_13, 
                style: style_buffered_transport_lines_13,
                popuplayertitle: "buffered_transport_lines",
                interactive: true,
                title: '<img src="styles/legend/buffered_transport_lines_13.png" /> buffered_transport_lines'
            });
var format_buffered_waste_14 = new ol.format.GeoJSON();
var features_buffered_waste_14 = format_buffered_waste_14.readFeatures(json_buffered_waste_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_waste_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_waste_14.addFeatures(features_buffered_waste_14);
var lyr_buffered_waste_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_waste_14, 
                style: style_buffered_waste_14,
                popuplayertitle: "buffered_waste",
                interactive: true,
                title: '<img src="styles/legend/buffered_waste_14.png" /> buffered_waste'
            });
var format_difference_metro_stations_overhead_lines_15 = new ol.format.GeoJSON();
var features_difference_metro_stations_overhead_lines_15 = format_difference_metro_stations_overhead_lines_15.readFeatures(json_difference_metro_stations_overhead_lines_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_difference_metro_stations_overhead_lines_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_difference_metro_stations_overhead_lines_15.addFeatures(features_difference_metro_stations_overhead_lines_15);
var lyr_difference_metro_stations_overhead_lines_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_difference_metro_stations_overhead_lines_15, 
                style: style_difference_metro_stations_overhead_lines_15,
                popuplayertitle: "difference_metro_stations_overhead_lines",
                interactive: true,
                title: '<img src="styles/legend/difference_metro_stations_overhead_lines_15.png" /> difference_metro_stations_overhead_lines'
            });
var format_intersection_metro_amenities_industries_slums_16 = new ol.format.GeoJSON();
var features_intersection_metro_amenities_industries_slums_16 = format_intersection_metro_amenities_industries_slums_16.readFeatures(json_intersection_metro_amenities_industries_slums_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersection_metro_amenities_industries_slums_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersection_metro_amenities_industries_slums_16.addFeatures(features_intersection_metro_amenities_industries_slums_16);
var lyr_intersection_metro_amenities_industries_slums_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersection_metro_amenities_industries_slums_16, 
                style: style_intersection_metro_amenities_industries_slums_16,
                popuplayertitle: "intersection_metro_amenities_industries_slums",
                interactive: true,
                title: '<img src="styles/legend/intersection_metro_amenities_industries_slums_16.png" /> intersection_metro_amenities_industries_slums'
            });
var format_union_landuse_amenities_17 = new ol.format.GeoJSON();
var features_union_landuse_amenities_17 = format_union_landuse_amenities_17.readFeatures(json_union_landuse_amenities_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_landuse_amenities_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_union_landuse_amenities_17.addFeatures(features_union_landuse_amenities_17);
var lyr_union_landuse_amenities_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_union_landuse_amenities_17, 
                style: style_union_landuse_amenities_17,
                popuplayertitle: "union_landuse_amenities",
                interactive: true,
                title: '<img src="styles/legend/union_landuse_amenities_17.png" /> union_landuse_amenities'
            });
var format_processed_slums_18 = new ol.format.GeoJSON();
var features_processed_slums_18 = format_processed_slums_18.readFeatures(json_processed_slums_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processed_slums_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processed_slums_18.addFeatures(features_processed_slums_18);
var lyr_processed_slums_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_processed_slums_18, 
                style: style_processed_slums_18,
                popuplayertitle: "processed_slums",
                interactive: true,
                title: '<img src="styles/legend/processed_slums_18.png" /> processed_slums'
            });
var format_processed_amenities_slums_19 = new ol.format.GeoJSON();
var features_processed_amenities_slums_19 = format_processed_amenities_slums_19.readFeatures(json_processed_amenities_slums_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processed_amenities_slums_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processed_amenities_slums_19.addFeatures(features_processed_amenities_slums_19);
var lyr_processed_amenities_slums_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_processed_amenities_slums_19, 
                style: style_processed_amenities_slums_19,
                popuplayertitle: "processed_amenities_slums",
                interactive: true,
                title: '<img src="styles/legend/processed_amenities_slums_19.png" /> processed_amenities_slums'
            });
var format_processed_amenities_industries_slums_20 = new ol.format.GeoJSON();
var features_processed_amenities_industries_slums_20 = format_processed_amenities_industries_slums_20.readFeatures(json_processed_amenities_industries_slums_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processed_amenities_industries_slums_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processed_amenities_industries_slums_20.addFeatures(features_processed_amenities_industries_slums_20);
var lyr_processed_amenities_industries_slums_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_processed_amenities_industries_slums_20, 
                style: style_processed_amenities_industries_slums_20,
                popuplayertitle: "processed_amenities_industries_slums",
                interactive: true,
                title: '<img src="styles/legend/processed_amenities_industries_slums_20.png" /> processed_amenities_industries_slums'
            });
var format_processed_amenities_industries_metro_slums_21 = new ol.format.GeoJSON();
var features_processed_amenities_industries_metro_slums_21 = format_processed_amenities_industries_metro_slums_21.readFeatures(json_processed_amenities_industries_metro_slums_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processed_amenities_industries_metro_slums_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processed_amenities_industries_metro_slums_21.addFeatures(features_processed_amenities_industries_metro_slums_21);
var lyr_processed_amenities_industries_metro_slums_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_processed_amenities_industries_metro_slums_21, 
                style: style_processed_amenities_industries_metro_slums_21,
                popuplayertitle: "processed_amenities_industries_metro_slums",
                interactive: true,
                title: '<img src="styles/legend/processed_amenities_industries_metro_slums_21.png" /> processed_amenities_industries_metro_slums'
            });
var format_processed_amenities_industries_landuse_metro_slums_22 = new ol.format.GeoJSON();
var features_processed_amenities_industries_landuse_metro_slums_22 = format_processed_amenities_industries_landuse_metro_slums_22.readFeatures(json_processed_amenities_industries_landuse_metro_slums_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processed_amenities_industries_landuse_metro_slums_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processed_amenities_industries_landuse_metro_slums_22.addFeatures(features_processed_amenities_industries_landuse_metro_slums_22);
var lyr_processed_amenities_industries_landuse_metro_slums_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_processed_amenities_industries_landuse_metro_slums_22, 
                style: style_processed_amenities_industries_landuse_metro_slums_22,
                popuplayertitle: "processed_amenities_industries_landuse_metro_slums",
                interactive: true,
                title: '<img src="styles/legend/processed_amenities_industries_landuse_metro_slums_22.png" /> processed_amenities_industries_landuse_metro_slums'
            });
var format_processed_amenities_industries_metro_slums_waste_water_23 = new ol.format.GeoJSON();
var features_processed_amenities_industries_metro_slums_waste_water_23 = format_processed_amenities_industries_metro_slums_waste_water_23.readFeatures(json_processed_amenities_industries_metro_slums_waste_water_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processed_amenities_industries_metro_slums_waste_water_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processed_amenities_industries_metro_slums_waste_water_23.addFeatures(features_processed_amenities_industries_metro_slums_waste_water_23);
var lyr_processed_amenities_industries_metro_slums_waste_water_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_processed_amenities_industries_metro_slums_waste_water_23, 
                style: style_processed_amenities_industries_metro_slums_waste_water_23,
                popuplayertitle: "processed_amenities_industries_metro_slums_waste_water",
                interactive: true,
                title: '<img src="styles/legend/processed_amenities_industries_metro_slums_waste_water_23.png" /> processed_amenities_industries_metro_slums_waste_water'
            });
var format_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24 = new ol.format.GeoJSON();
var features_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24 = format_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.readFeatures(json_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.addFeatures(features_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24);
var lyr_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24, 
                style: style_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24,
                popuplayertitle: "processed_amenities_industries_landusage_metro_slums_transport_waste_water",
                interactive: true,
                title: '<img src="styles/legend/processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.png" /> processed_amenities_industries_landusage_metro_slums_transport_waste_water'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DelhiBoundary_1.setVisible(true);lyr_delhi_slums_2.setVisible(false);lyr_delhi_metro_stations_3.setVisible(false);lyr_Transporttransport_4.setVisible(false);lyr_delhi_metro_oh_line_5.setVisible(false);lyr_buffered_amenities_6.setVisible(false);lyr_buffered_delhi_slums_7.setVisible(false);lyr_buffered_metro_stations_8.setVisible(false);lyr_buffered_metro_overhead_lines_9.setVisible(false);lyr_buffered_metro_stations_005_10.setVisible(false);lyr_buffered_industries_11.setVisible(false);lyr_buffered_waterways_12.setVisible(false);lyr_buffered_transport_lines_13.setVisible(false);lyr_buffered_waste_14.setVisible(false);lyr_difference_metro_stations_overhead_lines_15.setVisible(false);lyr_intersection_metro_amenities_industries_slums_16.setVisible(false);lyr_union_landuse_amenities_17.setVisible(false);lyr_processed_slums_18.setVisible(false);lyr_processed_amenities_slums_19.setVisible(false);lyr_processed_amenities_industries_slums_20.setVisible(false);lyr_processed_amenities_industries_metro_slums_21.setVisible(false);lyr_processed_amenities_industries_landuse_metro_slums_22.setVisible(false);lyr_processed_amenities_industries_metro_slums_waste_water_23.setVisible(false);lyr_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DelhiBoundary_1,lyr_delhi_slums_2,lyr_delhi_metro_stations_3,lyr_Transporttransport_4,lyr_delhi_metro_oh_line_5,lyr_buffered_amenities_6,lyr_buffered_delhi_slums_7,lyr_buffered_metro_stations_8,lyr_buffered_metro_overhead_lines_9,lyr_buffered_metro_stations_005_10,lyr_buffered_industries_11,lyr_buffered_waterways_12,lyr_buffered_transport_lines_13,lyr_buffered_waste_14,lyr_difference_metro_stations_overhead_lines_15,lyr_intersection_metro_amenities_industries_slums_16,lyr_union_landuse_amenities_17,lyr_processed_slums_18,lyr_processed_amenities_slums_19,lyr_processed_amenities_industries_slums_20,lyr_processed_amenities_industries_metro_slums_21,lyr_processed_amenities_industries_landuse_metro_slums_22,lyr_processed_amenities_industries_metro_slums_waste_water_23,lyr_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24];
lyr_DelhiBoundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_delhi_slums_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'SLUM_ID': 'SLUM_ID', 'SLUM_NM': 'SLUM_NM', 'SLUM_CD': 'SLUM_CD', 'WARD_NO': 'WARD_NO', 'WARD_NM': 'WARD_NM', 'AC_NO': 'AC_NO', 'AC_NM': 'AC_NM', 'L_OWN_AG': 'L_OWN_AG', 'APPR_JHUGI': 'APPR_JHUGI', 'DIV_NM': 'DIV_NM', 'AREA_SQMTS': 'AREA_SQMTS', });
lyr_delhi_metro_stations_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', });
lyr_Transporttransport_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'type': 'type', 'ref': 'ref', 'GlobalID': 'GlobalID', });
lyr_delhi_metro_oh_line_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'OGM_ID': 'OGM_ID', 'OGM_TP': 'OGM_TP', 'OGM_NO_L': 'OGM_NO_L', 'OGM_FS': 'OGM_FS', 'OGM_TS': 'OGM_TS', 'EL_GND': 'EL_GND', 'EL_PHOTO': 'EL_PHOTO', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', });
lyr_buffered_amenities_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'GlobalID': 'GlobalID', });
lyr_buffered_delhi_slums_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'SLUM_ID': 'SLUM_ID', 'SLUM_NM': 'SLUM_NM', 'SLUM_CD': 'SLUM_CD', 'WARD_NO': 'WARD_NO', 'WARD_NM': 'WARD_NM', 'AC_NO': 'AC_NO', 'AC_NM': 'AC_NM', 'L_OWN_AG': 'L_OWN_AG', 'APPR_JHUGI': 'APPR_JHUGI', 'DIV_NM': 'DIV_NM', 'AREA_SQMTS': 'AREA_SQMTS', });
lyr_buffered_metro_stations_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', });
lyr_buffered_metro_overhead_lines_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'OGM_ID': 'OGM_ID', 'OGM_TP': 'OGM_TP', 'OGM_NO_L': 'OGM_NO_L', 'OGM_FS': 'OGM_FS', 'OGM_TS': 'OGM_TS', 'EL_GND': 'EL_GND', 'EL_PHOTO': 'EL_PHOTO', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', });
lyr_buffered_metro_stations_005_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', });
lyr_buffered_industries_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_buffered_waterways_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'GlobalID': 'GlobalID', 'Shape__Len': 'Shape__Len', });
lyr_buffered_transport_lines_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'type': 'type', 'ref': 'ref', 'GlobalID': 'GlobalID', });
lyr_buffered_waste_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_difference_metro_stations_overhead_lines_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', });
lyr_intersection_metro_amenities_industries_slums_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_union_landuse_amenities_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'area': 'area', 'z_order': 'z_order', 'landuse': 'landuse', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'OBJECTID_2': 'OBJECTID_2', 'id_2': 'id_2', 'osm_id_2': 'osm_id_2', 'name_2': 'name_2', 'type_2': 'type_2', 'GlobalID_2': 'GlobalID_2', });
lyr_processed_slums_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_processed_amenities_slums_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_processed_amenities_industries_slums_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_processed_amenities_industries_metro_slums_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_processed_amenities_industries_landuse_metro_slums_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'area': 'area', 'z_order': 'z_order', 'landuse': 'landuse', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'OBJECTID_2': 'OBJECTID_2', 'id_2': 'id_2', 'osm_id_2': 'osm_id_2', 'name_2': 'name_2', 'type_2': 'type_2', 'GlobalID_2': 'GlobalID_2', 'Name_3': 'Name_3', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', 'OBJECTID_3': 'OBJECTID_3', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_processed_amenities_industries_metro_slums_waste_water_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'area': 'area', 'z_order': 'z_order', 'landuse': 'landuse', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'OBJECTID_2': 'OBJECTID_2', 'id_2': 'id_2', 'osm_id_2': 'osm_id_2', 'name_2': 'name_2', 'type_2': 'type_2', 'GlobalID_2': 'GlobalID_2', 'Name_3': 'Name_3', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', 'OBJECTID_3': 'OBJECTID_3', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'id': 'id', 'osm_id': 'osm_id', 'type': 'type', 'ref': 'ref', 'GlobalID': 'GlobalID', 'OBJECTID_4': 'OBJECTID_4', 'id_3': 'id_3', 'osm_id_3': 'osm_id_3', 'name_3': 'name_3', 'type_3': 'type_3', 'area': 'area', 'z_order': 'z_order', 'landuse': 'landuse', 'GlobalID_3': 'GlobalID_3', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'OBJECTID_2': 'OBJECTID_2', 'id_2': 'id_2', 'osm_id_2': 'osm_id_2', 'name_2': 'name_2', 'type_2': 'type_2', 'GlobalID_2': 'GlobalID_2', 'Name_3_2': 'Name_3_2', 'descript_1': 'descript_1', 'timestamp_': 'timestamp_', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitude_1': 'altitude_1', 'tessella_1': 'tessella_1', 'extrude_2': 'extrude_2', 'visibili_1': 'visibili_1', 'drawOrder_': 'drawOrder_', 'icon_2': 'icon_2', 'FID': 'FID', 'B_MS_NM': 'B_MS_NM', 'B_MS_LINE': 'B_MS_LINE', 'B_MS_ID': 'B_MS_ID', 'B_MS_BUSN': 'B_MS_BUSN', 'B_MS_CN': 'B_MS_CN', 'B_MS_CP': 'B_MS_CP', 'D_SOURCE': 'D_SOURCE', 'FEEDBACK': 'FEEDBACK', 'DIST_NM': 'DIST_NM', 'URBANBODY': 'URBANBODY', 'OBJECTID_3': 'OBJECTID_3', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_DelhiBoundary_1.set('fieldImages', {'OBJECTID': '', 'DISTRICT': '', 'STATE': '', });
lyr_delhi_slums_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'FID': '', 'SLUM_ID': '', 'SLUM_NM': '', 'SLUM_CD': '', 'WARD_NO': '', 'WARD_NM': '', 'AC_NO': '', 'AC_NM': '', 'L_OWN_AG': '', 'APPR_JHUGI': '', 'DIV_NM': '', 'AREA_SQMTS': '', });
lyr_delhi_metro_stations_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'FID': '', 'B_MS_NM': '', 'B_MS_LINE': '', 'B_MS_ID': '', 'B_MS_BUSN': '', 'B_MS_CN': '', 'B_MS_CP': '', 'D_SOURCE': '', 'FEEDBACK': '', 'DIST_NM': '', 'URBANBODY': '', });
lyr_Transporttransport_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'id': '', 'osm_id': '', 'type': '', 'ref': '', 'GlobalID': '', });
lyr_delhi_metro_oh_line_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'FID': '', 'OGM_ID': '', 'OGM_TP': '', 'OGM_NO_L': '', 'OGM_FS': '', 'OGM_TS': '', 'EL_GND': '', 'EL_PHOTO': '', 'D_SOURCE': '', 'FEEDBACK': '', 'DIST_NM': '', 'URBANBODY': '', });
lyr_buffered_amenities_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_buffered_delhi_slums_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'FID': '', 'SLUM_ID': '', 'SLUM_NM': '', 'SLUM_CD': '', 'WARD_NO': '', 'WARD_NM': '', 'AC_NO': '', 'AC_NM': '', 'L_OWN_AG': '', 'APPR_JHUGI': '', 'DIV_NM': '', 'AREA_SQMTS': '', });
lyr_buffered_metro_stations_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FID': 'TextEdit', 'B_MS_NM': 'TextEdit', 'B_MS_LINE': 'TextEdit', 'B_MS_ID': 'TextEdit', 'B_MS_BUSN': 'TextEdit', 'B_MS_CN': 'TextEdit', 'B_MS_CP': 'TextEdit', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', });
lyr_buffered_metro_overhead_lines_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'FID': 'Range', 'OGM_ID': 'TextEdit', 'OGM_TP': 'TextEdit', 'OGM_NO_L': 'Range', 'OGM_FS': 'TextEdit', 'OGM_TS': 'TextEdit', 'EL_GND': 'Range', 'EL_PHOTO': 'Range', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', });
lyr_buffered_metro_stations_005_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'FID': 'Range', 'B_MS_NM': 'TextEdit', 'B_MS_LINE': 'TextEdit', 'B_MS_ID': 'TextEdit', 'B_MS_BUSN': 'TextEdit', 'B_MS_CN': 'TextEdit', 'B_MS_CP': 'TextEdit', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', });
lyr_buffered_industries_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_buffered_waterways_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_buffered_transport_lines_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'osm_id': 'TextEdit', 'type': 'TextEdit', 'ref': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_buffered_waste_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_difference_metro_stations_overhead_lines_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FID': 'TextEdit', 'B_MS_NM': 'TextEdit', 'B_MS_LINE': 'TextEdit', 'B_MS_ID': 'TextEdit', 'B_MS_BUSN': 'TextEdit', 'B_MS_CN': 'TextEdit', 'B_MS_CP': 'TextEdit', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', });
lyr_intersection_metro_amenities_industries_slums_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FID': 'TextEdit', 'B_MS_NM': 'TextEdit', 'B_MS_LINE': 'TextEdit', 'B_MS_ID': 'TextEdit', 'B_MS_BUSN': 'TextEdit', 'B_MS_CN': 'TextEdit', 'B_MS_CP': 'TextEdit', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_union_landuse_amenities_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'area': 'TextEdit', 'z_order': 'TextEdit', 'landuse': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'id_2': 'TextEdit', 'osm_id_2': 'TextEdit', 'name_2': 'TextEdit', 'type_2': 'TextEdit', 'GlobalID_2': 'TextEdit', });
lyr_processed_slums_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_processed_amenities_slums_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_processed_amenities_industries_slums_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_processed_amenities_industries_metro_slums_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FID': 'TextEdit', 'B_MS_NM': 'TextEdit', 'B_MS_LINE': 'TextEdit', 'B_MS_ID': 'TextEdit', 'B_MS_BUSN': 'TextEdit', 'B_MS_CN': 'TextEdit', 'B_MS_CP': 'TextEdit', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_processed_amenities_industries_landuse_metro_slums_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'area': 'TextEdit', 'z_order': 'TextEdit', 'landuse': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'id_2': 'TextEdit', 'osm_id_2': 'TextEdit', 'name_2': 'TextEdit', 'type_2': 'TextEdit', 'GlobalID_2': 'TextEdit', 'Name_3': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FID': 'TextEdit', 'B_MS_NM': 'TextEdit', 'B_MS_LINE': 'TextEdit', 'B_MS_ID': 'TextEdit', 'B_MS_BUSN': 'TextEdit', 'B_MS_CN': 'TextEdit', 'B_MS_CP': 'TextEdit', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_processed_amenities_industries_metro_slums_waste_water_23.set('fieldImages', {'OBJECTID': '', 'id': '', 'osm_id': '', 'name': '', 'type': '', 'area': '', 'z_order': '', 'landuse': '', 'GlobalID': '', 'Shape__Are': '', 'Shape__Len': '', 'OBJECTID_2': '', 'id_2': '', 'osm_id_2': '', 'name_2': '', 'type_2': '', 'GlobalID_2': '', 'Name_3': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'FID': '', 'B_MS_NM': '', 'B_MS_LINE': '', 'B_MS_ID': '', 'B_MS_BUSN': '', 'B_MS_CN': '', 'B_MS_CP': '', 'D_SOURCE': '', 'FEEDBACK': '', 'DIST_NM': '', 'URBANBODY': '', 'OBJECTID_3': '', 'DISTRICT': '', 'STATE': '', });
lyr_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'osm_id': 'TextEdit', 'type': 'TextEdit', 'ref': 'TextEdit', 'GlobalID': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'id_3': 'TextEdit', 'osm_id_3': 'TextEdit', 'name_3': 'TextEdit', 'type_3': 'TextEdit', 'area': 'TextEdit', 'z_order': 'TextEdit', 'landuse': 'TextEdit', 'GlobalID_3': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'id_2': 'TextEdit', 'osm_id_2': 'TextEdit', 'name_2': 'TextEdit', 'type_2': 'TextEdit', 'GlobalID_2': 'TextEdit', 'Name_3_2': 'TextEdit', 'descript_1': '', 'timestamp_': '', 'begin_2': 'TextEdit', 'end_2': 'TextEdit', 'altitude_1': '', 'tessella_1': '', 'extrude_2': 'TextEdit', 'visibili_1': '', 'drawOrder_': '', 'icon_2': 'TextEdit', 'FID': 'TextEdit', 'B_MS_NM': 'TextEdit', 'B_MS_LINE': 'TextEdit', 'B_MS_ID': 'TextEdit', 'B_MS_BUSN': 'TextEdit', 'B_MS_CN': 'TextEdit', 'B_MS_CP': 'TextEdit', 'D_SOURCE': 'TextEdit', 'FEEDBACK': 'TextEdit', 'DIST_NM': 'TextEdit', 'URBANBODY': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_DelhiBoundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_delhi_slums_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'SLUM_ID': 'no label', 'SLUM_NM': 'no label', 'SLUM_CD': 'no label', 'WARD_NO': 'no label', 'WARD_NM': 'no label', 'AC_NO': 'no label', 'AC_NM': 'no label', 'L_OWN_AG': 'no label', 'APPR_JHUGI': 'no label', 'DIV_NM': 'no label', 'AREA_SQMTS': 'no label', });
lyr_delhi_metro_stations_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', });
lyr_Transporttransport_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'type': 'no label', 'ref': 'no label', 'GlobalID': 'no label', });
lyr_delhi_metro_oh_line_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'OGM_ID': 'no label', 'OGM_TP': 'no label', 'OGM_NO_L': 'no label', 'OGM_FS': 'no label', 'OGM_TS': 'no label', 'EL_GND': 'no label', 'EL_PHOTO': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', });
lyr_buffered_amenities_6.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'GlobalID': 'no label', });
lyr_buffered_delhi_slums_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'SLUM_ID': 'no label', 'SLUM_NM': 'no label', 'SLUM_CD': 'no label', 'WARD_NO': 'no label', 'WARD_NM': 'no label', 'AC_NO': 'no label', 'AC_NM': 'no label', 'L_OWN_AG': 'no label', 'APPR_JHUGI': 'no label', 'DIV_NM': 'no label', 'AREA_SQMTS': 'no label', });
lyr_buffered_metro_stations_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', });
lyr_buffered_metro_overhead_lines_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'OGM_ID': 'no label', 'OGM_TP': 'no label', 'OGM_NO_L': 'no label', 'OGM_FS': 'no label', 'OGM_TS': 'no label', 'EL_GND': 'no label', 'EL_PHOTO': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', });
lyr_buffered_metro_stations_005_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', });
lyr_buffered_industries_11.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_buffered_waterways_12.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'GlobalID': 'no label', 'Shape__Len': 'no label', });
lyr_buffered_transport_lines_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'type': 'no label', 'ref': 'no label', 'GlobalID': 'no label', });
lyr_buffered_waste_14.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_difference_metro_stations_overhead_lines_15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', });
lyr_intersection_metro_amenities_industries_slums_16.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_union_landuse_amenities_17.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'area': 'no label', 'z_order': 'no label', 'landuse': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'OBJECTID_2': 'no label', 'id_2': 'no label', 'osm_id_2': 'no label', 'name_2': 'no label', 'type_2': 'no label', 'GlobalID_2': 'no label', });
lyr_processed_slums_18.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_processed_amenities_slums_19.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_processed_amenities_industries_slums_20.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_processed_amenities_industries_metro_slums_21.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_processed_amenities_industries_landuse_metro_slums_22.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'area': 'no label', 'z_order': 'no label', 'landuse': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'OBJECTID_2': 'no label', 'id_2': 'no label', 'osm_id_2': 'no label', 'name_2': 'no label', 'type_2': 'no label', 'GlobalID_2': 'no label', 'Name_3': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', 'OBJECTID_3': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_processed_amenities_industries_metro_slums_waste_water_23.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'area': 'no label', 'z_order': 'no label', 'landuse': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'OBJECTID_2': 'no label', 'id_2': 'no label', 'osm_id_2': 'no label', 'name_2': 'no label', 'type_2': 'no label', 'GlobalID_2': 'no label', 'Name_3': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', 'OBJECTID_3': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'id': 'no label', 'osm_id': 'no label', 'type': 'no label', 'ref': 'no label', 'GlobalID': 'no label', 'OBJECTID_4': 'no label', 'id_3': 'no label', 'osm_id_3': 'no label', 'name_3': 'no label', 'type_3': 'no label', 'area': 'no label', 'z_order': 'no label', 'landuse': 'no label', 'GlobalID_3': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'OBJECTID_2': 'no label', 'id_2': 'no label', 'osm_id_2': 'no label', 'name_2': 'no label', 'type_2': 'no label', 'GlobalID_2': 'no label', 'Name_3_2': 'no label', 'descript_1': 'no label', 'timestamp_': 'no label', 'begin_2': 'no label', 'end_2': 'no label', 'altitude_1': 'no label', 'tessella_1': 'no label', 'extrude_2': 'no label', 'visibili_1': 'no label', 'drawOrder_': 'no label', 'icon_2': 'no label', 'FID': 'no label', 'B_MS_NM': 'no label', 'B_MS_LINE': 'no label', 'B_MS_ID': 'no label', 'B_MS_BUSN': 'no label', 'B_MS_CN': 'no label', 'B_MS_CP': 'no label', 'D_SOURCE': 'no label', 'FEEDBACK': 'no label', 'DIST_NM': 'no label', 'URBANBODY': 'no label', 'OBJECTID_3': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', });
lyr_processed_amenities_industries_landusage_metro_slums_transport_waste_water_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});