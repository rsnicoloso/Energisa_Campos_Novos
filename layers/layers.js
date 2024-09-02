ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-5903757.494359, -3293965.524559, -5527596.567775, -3021478.219205]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SC_UF_2022_2 = new ol.format.GeoJSON();
var features_SC_UF_2022_2 = format_SC_UF_2022_2.readFeatures(json_SC_UF_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SC_UF_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SC_UF_2022_2.addFeatures(features_SC_UF_2022_2);
var lyr_SC_UF_2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SC_UF_2022_2, 
                style: style_SC_UF_2022_2,
                popuplayertitle: "SC_UF_2022",
                interactive: false,
                title: '<img src="styles/legend/SC_UF_2022_2.png" /> SC_UF_2022'
            });
var format_SC_Municipios_2022_3 = new ol.format.GeoJSON();
var features_SC_Municipios_2022_3 = format_SC_Municipios_2022_3.readFeatures(json_SC_Municipios_2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SC_Municipios_2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SC_Municipios_2022_3.addFeatures(features_SC_Municipios_2022_3);
var lyr_SC_Municipios_2022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SC_Municipios_2022_3, 
                style: style_SC_Municipios_2022_3,
                popuplayertitle: "SC_Municipios_2022",
                interactive: false,
                title: '<img src="styles/legend/SC_Municipios_2022_3.png" /> SC_Municipios_2022'
            });
var lyr_heatmap_mort_avesui_125km_energisa_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "heatmap_mort_avesui_125km_energisa",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/heatmap_mort_avesui_125km_energisa_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5866862.099052, -3252009.611979, -5563353.458690, -3019457.126721]
                            })
                        });
var format_avesui_mort_125_dist_5 = new ol.format.GeoJSON();
var features_avesui_mort_125_dist_5 = format_avesui_mort_125_dist_5.readFeatures(json_avesui_mort_125_dist_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_avesui_mort_125_dist_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_avesui_mort_125_dist_5.addFeatures(features_avesui_mort_125_dist_5);
var lyr_avesui_mort_125_dist_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_avesui_mort_125_dist_5, 
                style: style_avesui_mort_125_dist_5,
                popuplayertitle: "avesui_mort_125_dist",
                interactive: true,
    title: 'avesui_mort_125_dist<br />\
    <img src="styles/legend/avesui_mort_125_dist_5_0.png" /> Aviario<br />\
    <img src="styles/legend/avesui_mort_125_dist_5_1.png" /> Ciclo Completo<br />\
    <img src="styles/legend/avesui_mort_125_dist_5_2.png" /> Creche<br />\
    <img src="styles/legend/avesui_mort_125_dist_5_3.png" /> Terminacao<br />\
    <img src="styles/legend/avesui_mort_125_dist_5_4.png" /> UPL<br />\
    <img src="styles/legend/avesui_mort_125_dist_5_5.png" /> UPLD<br />\
    <img src="styles/legend/avesui_mort_125_dist_5_6.png" /> Wean-to-finish<br />'
        });
var format_PlantaEnergisa_6 = new ol.format.GeoJSON();
var features_PlantaEnergisa_6 = format_PlantaEnergisa_6.readFeatures(json_PlantaEnergisa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantaEnergisa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantaEnergisa_6.addFeatures(features_PlantaEnergisa_6);
var lyr_PlantaEnergisa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantaEnergisa_6, 
                style: style_PlantaEnergisa_6,
                popuplayertitle: "Planta Energisa",
                interactive: false,
                title: '<img src="styles/legend/PlantaEnergisa_6.png" /> Planta Energisa'
            });
var format_Planta_Energisa_125km_7 = new ol.format.GeoJSON();
var features_Planta_Energisa_125km_7 = format_Planta_Energisa_125km_7.readFeatures(json_Planta_Energisa_125km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planta_Energisa_125km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planta_Energisa_125km_7.addFeatures(features_Planta_Energisa_125km_7);
var lyr_Planta_Energisa_125km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planta_Energisa_125km_7, 
                style: style_Planta_Energisa_125km_7,
                popuplayertitle: "Planta_Energisa_125km",
                interactive: false,
                title: '<img src="styles/legend/Planta_Energisa_125km_7.png" /> Planta_Energisa_125km'
            });
var format_Planta_Energisa_100km_8 = new ol.format.GeoJSON();
var features_Planta_Energisa_100km_8 = format_Planta_Energisa_100km_8.readFeatures(json_Planta_Energisa_100km_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planta_Energisa_100km_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planta_Energisa_100km_8.addFeatures(features_Planta_Energisa_100km_8);
var lyr_Planta_Energisa_100km_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planta_Energisa_100km_8, 
                style: style_Planta_Energisa_100km_8,
                popuplayertitle: "Planta_Energisa_100km",
                interactive: false,
                title: '<img src="styles/legend/Planta_Energisa_100km_8.png" /> Planta_Energisa_100km'
            });
var format_Planta_Energisa_75km_9 = new ol.format.GeoJSON();
var features_Planta_Energisa_75km_9 = format_Planta_Energisa_75km_9.readFeatures(json_Planta_Energisa_75km_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planta_Energisa_75km_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planta_Energisa_75km_9.addFeatures(features_Planta_Energisa_75km_9);
var lyr_Planta_Energisa_75km_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planta_Energisa_75km_9, 
                style: style_Planta_Energisa_75km_9,
                popuplayertitle: "Planta_Energisa_75km",
                interactive: false,
                title: '<img src="styles/legend/Planta_Energisa_75km_9.png" /> Planta_Energisa_75km'
            });
var format_Planta_Energisa_50km_10 = new ol.format.GeoJSON();
var features_Planta_Energisa_50km_10 = format_Planta_Energisa_50km_10.readFeatures(json_Planta_Energisa_50km_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planta_Energisa_50km_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planta_Energisa_50km_10.addFeatures(features_Planta_Energisa_50km_10);
var lyr_Planta_Energisa_50km_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planta_Energisa_50km_10, 
                style: style_Planta_Energisa_50km_10,
                popuplayertitle: "Planta_Energisa_50km",
                interactive: false,
                title: '<img src="styles/legend/Planta_Energisa_50km_10.png" /> Planta_Energisa_50km'
            });
var format_Planta_Energisa_25km_11 = new ol.format.GeoJSON();
var features_Planta_Energisa_25km_11 = format_Planta_Energisa_25km_11.readFeatures(json_Planta_Energisa_25km_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planta_Energisa_25km_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planta_Energisa_25km_11.addFeatures(features_Planta_Energisa_25km_11);
var lyr_Planta_Energisa_25km_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planta_Energisa_25km_11, 
                style: style_Planta_Energisa_25km_11,
                popuplayertitle: "Planta_Energisa_25km",
                interactive: false,
                title: '<img src="styles/legend/Planta_Energisa_25km_11.png" /> Planta_Energisa_25km'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_SC_UF_2022_2.setVisible(true);lyr_SC_Municipios_2022_3.setVisible(true);lyr_heatmap_mort_avesui_125km_energisa_4.setVisible(true);lyr_avesui_mort_125_dist_5.setVisible(true);lyr_PlantaEnergisa_6.setVisible(true);lyr_Planta_Energisa_125km_7.setVisible(true);lyr_Planta_Energisa_100km_8.setVisible(true);lyr_Planta_Energisa_75km_9.setVisible(true);lyr_Planta_Energisa_50km_10.setVisible(true);lyr_Planta_Energisa_25km_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_SC_UF_2022_2,lyr_SC_Municipios_2022_3,lyr_heatmap_mort_avesui_125km_energisa_4,lyr_avesui_mort_125_dist_5,lyr_PlantaEnergisa_6,lyr_Planta_Energisa_125km_7,lyr_Planta_Energisa_100km_8,lyr_Planta_Energisa_75km_9,lyr_Planta_Energisa_50km_10,lyr_Planta_Energisa_25km_11];
lyr_SC_UF_2022_2.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_SC_Municipios_2022_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_avesui_mort_125_dist_5.set('fieldAliases', {'Especie': 'Especie', 'Tipo': 'Tipo', 'Codigo': 'Codigo', 'Long_UTM': 'Long_UTM', 'Lat_UTM': 'Lat_UTM', 'Municipio': 'Municipio', 'Alojamento': 'Alojamento', 'Mortalidad': 'Mortalidad', 'Long_Dec': 'Long_Dec', 'Lat_Dec': 'Lat_Dec', 'Distancia': 'Distancia', });
lyr_PlantaEnergisa_6.set('fieldAliases', {'Codigo': 'Codigo', 'Long_UTM': 'Long_UTM', 'Lat_UTM': 'Lat_UTM', 'Municipio': 'Municipio', 'Long_Dec': 'Long_Dec', 'Lat_Dec': 'Lat_Dec', });
lyr_Planta_Energisa_125km_7.set('fieldAliases', {'Codigo': 'Codigo', 'Long_UTM': 'Long_UTM', 'Lat_UTM': 'Lat_UTM', 'Municipio': 'Municipio', 'Long_Dec': 'Long_Dec', 'Lat_Dec': 'Lat_Dec', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_Planta_Energisa_100km_8.set('fieldAliases', {'Codigo': 'Codigo', 'Long_UTM': 'Long_UTM', 'Lat_UTM': 'Lat_UTM', 'Municipio': 'Municipio', 'Long_Dec': 'Long_Dec', 'Lat_Dec': 'Lat_Dec', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_Planta_Energisa_75km_9.set('fieldAliases', {'Codigo': 'Codigo', 'Long_UTM': 'Long_UTM', 'Lat_UTM': 'Lat_UTM', 'Municipio': 'Municipio', 'Long_Dec': 'Long_Dec', 'Lat_Dec': 'Lat_Dec', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_Planta_Energisa_50km_10.set('fieldAliases', {'Codigo': 'Codigo', 'Long_UTM': 'Long_UTM', 'Lat_UTM': 'Lat_UTM', 'Municipio': 'Municipio', 'Long_Dec': 'Long_Dec', 'Lat_Dec': 'Lat_Dec', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_Planta_Energisa_25km_11.set('fieldAliases', {'Codigo': 'Codigo', 'Long_UTM': 'Long_UTM', 'Lat_UTM': 'Lat_UTM', 'Municipio': 'Municipio', 'Long_Dec': 'Long_Dec', 'Lat_Dec': 'Lat_Dec', });
lyr_SC_UF_2022_2.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_SC_Municipios_2022_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_avesui_mort_125_dist_5.set('fieldImages', {'Especie': 'TextEdit', 'Tipo': 'TextEdit', 'Codigo': 'TextEdit', 'Long_UTM': 'TextEdit', 'Lat_UTM': 'TextEdit', 'Municipio': 'TextEdit', 'Alojamento': 'TextEdit', 'Mortalidad': 'TextEdit', 'Long_Dec': 'TextEdit', 'Lat_Dec': 'TextEdit', 'Distancia': 'TextEdit', });
lyr_PlantaEnergisa_6.set('fieldImages', {'Codigo': 'TextEdit', 'Long_UTM': 'TextEdit', 'Lat_UTM': 'TextEdit', 'Municipio': 'TextEdit', 'Long_Dec': 'TextEdit', 'Lat_Dec': 'TextEdit', });
lyr_Planta_Energisa_125km_7.set('fieldImages', {'Codigo': 'TextEdit', 'Long_UTM': 'TextEdit', 'Lat_UTM': 'TextEdit', 'Municipio': 'TextEdit', 'Long_Dec': 'TextEdit', 'Lat_Dec': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Planta_Energisa_100km_8.set('fieldImages', {'Codigo': 'TextEdit', 'Long_UTM': 'TextEdit', 'Lat_UTM': 'TextEdit', 'Municipio': 'TextEdit', 'Long_Dec': 'TextEdit', 'Lat_Dec': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Planta_Energisa_75km_9.set('fieldImages', {'Codigo': 'TextEdit', 'Long_UTM': 'TextEdit', 'Lat_UTM': 'TextEdit', 'Municipio': 'TextEdit', 'Long_Dec': 'TextEdit', 'Lat_Dec': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Planta_Energisa_50km_10.set('fieldImages', {'Codigo': 'TextEdit', 'Long_UTM': 'TextEdit', 'Lat_UTM': 'TextEdit', 'Municipio': 'TextEdit', 'Long_Dec': 'TextEdit', 'Lat_Dec': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Planta_Energisa_25km_11.set('fieldImages', {'Codigo': 'TextEdit', 'Long_UTM': 'TextEdit', 'Lat_UTM': 'TextEdit', 'Municipio': 'TextEdit', 'Long_Dec': 'TextEdit', 'Lat_Dec': 'TextEdit', });
lyr_SC_UF_2022_2.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_SC_Municipios_2022_3.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_avesui_mort_125_dist_5.set('fieldLabels', {'Especie': 'hidden field', 'Tipo': 'inline label - visible with data', 'Codigo': 'hidden field', 'Long_UTM': 'hidden field', 'Lat_UTM': 'hidden field', 'Municipio': 'inline label - visible with data', 'Alojamento': 'inline label - visible with data', 'Mortalidad': 'inline label - visible with data', 'Long_Dec': 'hidden field', 'Lat_Dec': 'hidden field', 'Distancia': 'inline label - visible with data', });
lyr_PlantaEnergisa_6.set('fieldLabels', {'Codigo': 'no label', 'Long_UTM': 'no label', 'Lat_UTM': 'no label', 'Municipio': 'no label', 'Long_Dec': 'no label', 'Lat_Dec': 'no label', });
lyr_Planta_Energisa_125km_7.set('fieldLabels', {'Codigo': 'no label', 'Long_UTM': 'no label', 'Lat_UTM': 'no label', 'Municipio': 'no label', 'Long_Dec': 'no label', 'Lat_Dec': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_Planta_Energisa_100km_8.set('fieldLabels', {'Codigo': 'no label', 'Long_UTM': 'no label', 'Lat_UTM': 'no label', 'Municipio': 'no label', 'Long_Dec': 'no label', 'Lat_Dec': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_Planta_Energisa_75km_9.set('fieldLabels', {'Codigo': 'no label', 'Long_UTM': 'no label', 'Lat_UTM': 'no label', 'Municipio': 'no label', 'Long_Dec': 'no label', 'Lat_Dec': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_Planta_Energisa_50km_10.set('fieldLabels', {'Codigo': 'no label', 'Long_UTM': 'no label', 'Lat_UTM': 'no label', 'Municipio': 'no label', 'Long_Dec': 'no label', 'Lat_Dec': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_Planta_Energisa_25km_11.set('fieldLabels', {'Codigo': 'inline label - always visible', 'Long_UTM': 'no label', 'Lat_UTM': 'no label', 'Municipio': 'no label', 'Long_Dec': 'no label', 'Lat_Dec': 'no label', });
lyr_Planta_Energisa_25km_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});