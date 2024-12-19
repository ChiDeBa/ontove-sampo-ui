export default {
    "languageLabel": "Italiano",
    "html": {
        "title": "OntoVE",
        "description": ""
    },
    "appTitle": {
        "short": "OntoVE",
        "mobile": "S-UI",
        "long": "&nbsp; &nbsp; OntoVE &nbsp; &nbsp;",
        "subheading": "Ontologie per la descrizione del patrimonio culturale germanico in Veneto"
    },
    "appDescription1": "Sampo is a web service for searching and studying place names. The search results can be viewed as a table, on maps, and as statistical distributions. Historical and current background maps are provided.",
    "appDescription2": "Start by choosing source dataset(s) and input a place name on the search field. Alternatively you can search by area.",
    "selectPerspective": "Seleziona una prospettiva per navigare il grafo di conoscenza:",
    "mainPageImageLicence": "",
    "backendErrorText": "Uno dei servizi di backend non è disponibile al momento. Riprova più tardi.",
    "infoHeader": {
        "toggleInstructions": "Clicca per mostrare o nascondere le istruzioni"
    },
    "topBar": {
        "feedback": "feedback",
        "info": {
            "info": "Info",
            "blog": "Project blog",
            "blogUrl": "https://www.unive.it/data/persone/10784531/ricerca",
            "aboutThePortal": "Riguardo al portale"
        },
        "searchBarPlaceHolder": "Search all content",
        "searchBarPlaceHolderShort": "Search",
        "instructions": "istruzioni"
    },
    "facetBar": {
        "results": "Risultati",
        "filters": "Filtri",
        "activeFilters": "Filtri attivi:",
        "removeAllFilters": "Rimuovi tutti",
        "narrowDownBy": "Restringi per",
        "filterOptions": "Opzioni filtro",
        "filterByName": "Filtra per nome",
        "filterByBoundingBox": "Filter by bounding box",
        "selectionOptions": "Opzioni di selezione",
        "selectAlsoSubconcepts": "Seleziona automaticamente tutti i sottoconcetti",
        "doNotSelectSubconcepts": "Non selezionare i sottoconcetti",
        "sortingOptions": "Opzioni per ordinare la selezione",
        "sortAlphabetically": "Ordine alfabetico",
        "sortByNumberOfSearchResults": "Ordina per numero di risultati della ricerca",
        "useDisjunction": "Usa operatore logico OR tra le selezioni",
        "useConjuction": "Usa operatore logico AND tra le selezioni",
        "minYear": "Min year",
        "maxYear": "Max year",
        "min": "Min",
        "max": "Max",
        "facetSearchFieldPlaceholder": "Search...",
        "applyFacetSelection": "apply",
        "pieChart": {
            "tooltip": "Pie chart"
        },
        "barChart": {
            "tooltip": "Bar chart",
            "language": {
                "title": "Language",
                "xaxisTitle": "Language",
                "yaxisTitle": "Manuscript count",
                "seriesTitle": "Manuscript count"
            }
        },
        "lineChart": {
            "tooltip": "Line chart",
            "productionTimespan": {
                "title": "Manuscript production by decade",
                "xaxisTitle": "Decade",
                "yaxisTitle": "Manuscript count",
                "seriesTitle": "Manuscript count"
            }
        }
    },
    "tabs": {
        "table": "Tabella",
        "map": "map",
        "production_places": "production places",
        "production_places_heatmap": "production heatmap",
        "last_known_locations": "last known locations",
        "migrations": "migrations",
        "network": "network",
        "export": "export",
        "production_dates": "production dates",
        "event_dates": "event dates",
        "map_clusters": "clustered map",
        "map_markers": "map",
        "heatmap": "heatmap",
        "statistics": "statistics",
        "emloLetterNetwork": "Network of letters",
        "emloSentReceived": "Sent and received letters",
        "download": "download",
        "recommendations": "recommendations"
    },
    "table": {
        "rowsPerPage": "Righe per pagina",
        "of": "di"
    },
    "lineChart": {
        "productionCount": "Production",
        "transferCount": "Transfer of custody",
        "observationCount": "Observation",
        "sentCount": "Sent",
        "receivedCount": "Received",
        "allCount": "All"
    },
    "exportToYasgui": "apri la tabella dei risultati della query in yasgui sparql editor",
    "openInLinkedDataBrowser": "apri in linked data browser",
    "resultsAsCSV": "scarica i risultati della ricerca in formato CSV",
    "facets": {
        "dateFacet": {
            "invalidDate": "Epäkelpo päivämäärä.",
            "toBeforeFrom": "Alkupäivämäärän täytyy olla ennen loppupäivämäärää.",
            "minDate": "Aikaisin sallittu päivämäärä on {minDate}",
            "maxDate": "Myöhäisin sallittu päivämäärä on {maxDate}",
            "cancel": "Peruuta",
            "fromLabel": "Alku",
            "toLabel": "Loppu"
        },
        "textFacet": {
            "inputLabel": "Etsi nimellä"
        },
        "sliderFacet": {
            "invalidStartOrEnd": "Min value must be smaller than max value. The smallest value can be {min} and the largest value can be {max}."
        }
    },
    "leafletMap": {
        "basemaps": {
            "mapbox": {
                "light-v10": "Mapbox Light (OpenStreetMap)"
            },
            "googleRoadmap": "Google Maps",
            "topographicalMapNLS": "Topographical map (National Land Survey of Finland)",
            "backgroundMapNLS": "Background map (National Land Survey of Finland)",
            "airMapNLS": "Aerial map (National Land Survey of Finland)"
        },
        "externalLayers": {
            "WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_alue": "Register of Archaeological Sites, areas (Finnish Heritage Agency)",
            "WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_piste": "Register of Archaeological Sites, points (Finnish Heritage Agency)",
            "WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_alue": "Register of Archaeological Sites, areas (Finnish Heritage Agency)",
            "WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_piste": "Register of Archaeological Sites, points (Finnish Heritage Agency)",
            "fhaLidar": "Elevation model (Finnish Heritage Agency)",
            "karelianMaps": "Karelian maps, 1:100 000 topographic (SeCo)",
            "senateAtlas": "Senate atlas, 1:21 000 topographic (SeCo)",
            "kotus:pitajat": "Finnish parishes in 1938 (Institute for the Languages of Finland)",
            "kotus:rajat-sms-alueet": "Dialectical regions in Finland (Institute for the Languages of Finland)",
            "kotus:rajat-sms-alueosat": "Dialectical subregions in Finland (Institute for the Languages of Finland)",
            "kotus:rajat-lansi-ita": "Border between western and eastern dialects in Finland (Institute for the Languages of Finland)"
        },
        "mapModeButtons": {
            "markers": "Markers",
            "heatmap": "Heatmap"
        },
        "wrongZoomLevel": "The map zoom level has to at least 11",
        "wrongZoomLevelFHA": "The map zoom level has to be at least 13 in order to show this layer",
        "tooManyResults": "More than 500 results, please use clustered map or heatmap"
    },
    "instancePageGeneral": {
        "introduction": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> This landing page provides a human-readable summary of the data points that link to this {entity}. The data included in this summary reflect only those data points used in the MMM Portal. Click the Open in Linked Data Browser on button on the Export tab to view the complete set of classes and properties linked to this record. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> To cite this record, use its url. You can use also use the url to return directly to the record at any time. </p>",
        "repetition": "<h6 class=\"MuiTypography-root MuiTypography-h6\"> Repetition of data </h6> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> The same or similar data may appear within a single data field multiple times. This repetition occurs due to the merging of multiple records from different datasets to create the MMM record. </p>"
    },
    "deckGlMap": {
        "arcColouring": "Arc colouring:",
        "showMoreInformation": "Click to show more information.",
        "placesMsMigrations": {
            "legendTitle": "Arc colouring",
            "legendFrom": "Manuscript production place",
            "legendTo": "Last known location",
            "from": "Production place:",
            "to": "Last known location:",
            "count": "Manuscript count",
            "listHeadingSingleInstance": "Manuscript:",
            "listHeadingMultipleInstances": "Manuscripts:"
        }
    },
    "perspectives": {
        "fullTextSearch": {
            "properties": {
                "prefLabel": {
                    "label": "Label"
                },
                "type": {
                    "label": "Type"
                },
                "note": {
                    "label": "Note"
                }
            }
        },
        "CulturalScope":{
            "label":"Ambito culturale",
            "facetResultsType": "Ambito culturale",
            "shortDescription": "Attribuzione di ambito culturale ai beni culturali",
            "longDescription": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Utilizzare questa prospettiva per accedere ai dati relativi all'attribuzione dell'ambito culturale agli oggetti del patrimonio culturale, ai criteri relativi all'attribuzione e ai riferimenti bibliografici per essa. Vedere le <a href=\"/instructions\">istruzioni</a> per l'utilizzo dei filtri. La visualizzazione dei risultati può essere selezionata utilizzando le schede: </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> <strong>TABELLA</STRONG> per consultare la lista di attribuzioni di ambito culturale, il bene culturale cui si riferiscono e i criteri per l'attribuzione. </li> <li> <strong>EXPORT</strong> per esportare la query SPARQL utilizzata per generare la vista della tabella dei risultati nell'editor di query di YASGUI. </li> </ul>",
            "instancePage": {
                "label": "Entity",
                "description": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> MMM’s Manuscript entity corresponds to <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a> Manifestation Singleton, defined as \"physical objects that each carry an instance of [an Expression], and that were produced as unique objects...\" The various types of records that describe manuscripts in each of the three contributing MMM datasets have been mapped to this entity. </p> <h6 class=\"MuiTypography-root MuiTypography-h6\"> Manuscript labels </h6> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> If the Bibale or Oxford databases reference a shelf mark for the manuscript, that information will appear as its label. Otherwise, an SDBM ID number will serve as its label. SDBM ID numbers contain prefixes that indicate different things about the type of record they contain: </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM Entries. Each Entry represents a different observation of a manuscript at a different point in time, derived from various sources. </li> <li> SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any other Entries and therefore has no SDBM Manuscript Record. </li> <li> SDBM_MS_part: a record identified as a fragment of a larger manuscript. </li> </ul> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"></p>"
            }, 
            "properties":{
                "uri": {
                    "label": "URI",
                    "description": "Uniform Resource Identifier"
                },
                "prefLabel": {
                    "label": "Attribuzione",
                    "description": "Attribuzione di ambito culturale",
                    "textFacetInputPlaceholder": "Search..."
                },
                "CulturalScope": {
                    "label": "Ambito culturale",
                    "description": "L'ambito culturale assegnato."
                },
                "CHItem":{
                    "label":"Bene culturale",
                    "description": "Il bene culturale al quale viene assegnato l'ambito culturale."
                },
                "Criterion": {
                    "label": "Criterio",
                    "description": "Il criterio secondo il quale è stato assegnato l'ambito culturale al bene culturale."
                },
                "Bibliography": {
                    "label": "Bibliografia",
                    "description": "La bibliografia relativa all'attribuzione dell'ambito culturale."
                },
                "Reference":{
                    "label": "Riferimento bibliografico completo",
                    "description": "Riferimento bibliografico completo relativo alla bibliografia citata."
                },
                "CHType":{
                    "label": "Tipo di bene culturale",
                    "description": "Tipo di bene culturale."
                },
            }
        },
        "Entities": {
            "label": "Beni archeologici",
            "facetResultsType": "Beni archeologici",
            "shortDescription": "Reperti archeologici di origine germanica in Veneto",
            "longDescription": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Utilizzare questa prospettiva per accedere ai dati relativi ai beni archeologici di origine germanica in Veneto e le loro proprietà. Vedere le <a href=\"/instructions\">istruzioni</a> per l'utilizzo dei filtri. La visualizzazione dei risultati può essere selezionata utilizzando le schede: </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> <strong>TABELLA</STRONG> per consultare tutti gli elementi archeologici presenti nel dataset OntoVE. Una riga della tabella equivale a un elemento archeologico. </li><li> <strong>EXPORT</strong> per esportare la query SPARQL utilizzata per generare la vista della tabella dei risultati nell'editor di query di YASGUI. </li> </ul>",
            "instancePage": {
                "label": "Beni archeologici",
                "description": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> MMM’s Manuscript entity corresponds to <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a> Manifestation Singleton, defined as \"physical objects that each carry an instance of [an Expression], and that were produced as unique objects...\" The various types of records that describe manuscripts in each of the three contributing MMM datasets have been mapped to this entity. </p> <h6 class=\"MuiTypography-root MuiTypography-h6\"> Manuscript labels </h6> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> If the Bibale or Oxford databases reference a shelf mark for the manuscript, that information will appear as its label. Otherwise, an SDBM ID number will serve as its label. SDBM ID numbers contain prefixes that indicate different things about the type of record they contain: </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM Entries. Each Entry represents a different observation of a manuscript at a different point in time, derived from various sources. </li> <li> SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any other Entries and therefore has no SDBM Manuscript Record. </li> <li> SDBM_MS_part: a record identified as a fragment of a larger manuscript. </li> </ul> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"></p>"
            },
            "properties": {
                "uri": {
                    "label": "URI",
                    "description": "Uniform Resource Identifier"
                },
                "prefLabel": {
                    "label": "Bene archeologico",
                    "description": "Il bene archeologico.",
                    "textFacetInputPlaceholder": "Search..."
                },
                "CulturalScope": {
                    "label": "Ambito culturale",
                    "description": "L'ambito culturale del bene."
                },
                "Bibliography": {
                    "label": "Bibliografia",
                    "description": "La bibliografia relativa al bene."
                },
                "Reference":{
                    "label": "Riferimento bibliografico completo.",
                    "description": "Il riferimento bibliografico completo."
                },
                "Chronology": {
                    "label": "Cronologia",
                    "description": "La cronologia attribuita al bene."
                },
                "CurrentPlace": {
                    "label": "Posizione attuale",
                    "description": "Il luogo dove è conservato il bene o dove è ubicato."
                },
                "FindingPlace": {
                    "label": "Luogo di ritrovamento",
                    "description": "Il luogo dove l'artefatto è stato rincenuto. Può fare riferimento a un altro bene archeologico presso il quale il bene in questione è stato rinvenuto."
                },
                "Geolink": {
                    "label": "Geolink",
                    "description": "Link a un repository esterno che descrive il luogo."
                },
                
                 "Resourcelink" :{
                    "label": "Link alla risorsa",
                    "description": "Link alla pagina che descrive la risorsa."
                   }
            }
        },
        "Locations": {
            "label": "Ubicazioni",
            "facetResultsType": "Ubicazioni",
            "shortDescription": "Luoghi dove sono conservati i beni archeologici o dove sono ubicati.",
            "longDescription": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Utilizzare questa prospettiva per accedere ai dati relativi ai luoghi dove i beni archeologici sono attualmente conservati. Vedere le <a href=\"/instructions\">istruzioni</a> per l'utilizzo dei filtri. La visualizzazione dei risultati può essere selezionata utilizzando le schede: </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> <strong>TABELLA</STRONG> per consultare una lista di beni archeologici, dove si trovano e il link al luogo. </li> <li> <strong>EXPORT</strong> per esportare la query SPARQL utilizzata per generare la vista della tabella dei risultati nell'editor di query di YASGUI. </li> </ul>",
            "instancePage": {
                "label": "Location",
                "description": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> The MMM data model follows the <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a> definition of a work, which refers to “distinct concepts or combinations of concepts identified in artistic and intellectual expressions.” Works contain title and author information. This definition is not shared by the Bibale or Oxford Libraries’ conception of the term, which both define their internal “work” concept more closely to the FRBRoo conception of an Expression. The SDBM does not have a work concept at all, recording only the titles of the texts as given in its various sources, without normalizing that data or linking it directly to author information. Works were generated within the MMM dataset by manually creating links across the three datasets’ various conceptions of the relationship between authors and their creations. This process was not able to reconcile every work contained within the combined dataset. </p>"
            },
            "properties": {
                "uri": {
                    "label": "URI",
                    "description": "Uniform Resource Identifier"
                },
                "prefLabel": {
                    "label": "Bene archeologico",
                    "description": "Un bene archeologico",
                    "textFacetInputPlaceholder": "Search..."
                },
                "CurrentPlace": {
                    "label": "Ubicazione corrente",
                    "description": "Il luogo dove il bene è attualmente ubicato."
                },
                "link": {
                    "label": "Link",
                    "description": "Link a un repository esterno che descrive il luogo."
                }
            }
        },
        "Texts": {
            "label": "Testi",
            "facetResultsType": "Testi",
            "shortDescription": "Testi relativi alle popolazioni germaniche e alla loro relazione con il Veneto e Venezia.",
            "longDescription": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Utilizzare questa prospettiva per accedere alle informazioni relative ai testi di origine germanica che hanno una connessione con il Veneto. Vedere le <a href=\"/instructions\">istruzioni</a> per l'utilizzo dei filtri. La visualizzazione dei risultati può essere selezionata utilizzando le schede:  </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> <strong>TABELLA</STRONG> per consultare i testi del dataset OntoVE </li><li> <strong>EXPORT</strong> per esportare la query SPARQL utilizzata per generare la vista della tabella dei risultati nell'editor di query di YASGUI. </li> </ul>",
            "instancePage": {
                "label": "Opera",
                "description": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> MMM’s Manuscript entity corresponds to <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo’s</a> Manifestation Singleton, defined as \"physical objects that each carry an instance of [an Expression], and that were produced as unique objects...\" The various types of records that describe manuscripts in each of the three contributing MMM datasets have been mapped to this entity. </p> <h6 class=\"MuiTypography-root MuiTypography-h6\"> Manuscript labels </h6> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> If the Bibale or Oxford databases reference a shelf mark for the manuscript, that information will appear as its label. Otherwise, an SDBM ID number will serve as its label. SDBM ID numbers contain prefixes that indicate different things about the type of record they contain: </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> SDBM_MS: SDBM Manuscript Record, which aggregates the data of two or more SDBM Entries. Each Entry represents a different observation of a manuscript at a different point in time, derived from various sources. </li> <li> SDBM_MS_orphan: a single Entry in the SDBM, meaning it has not been linked to any other Entries and therefore has no SDBM Manuscript Record. </li> <li> SDBM_MS_part: a record identified as a fragment of a larger manuscript. </li> </ul> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"></p>"
            },
            "properties": {
                "uri": {
                    "label": "URI",
                    "description": "Uniform Resource Identifier"
                },
                "prefLabel": {
                    "label": "Testo",
                    "description": "Testo.",
                    "textFacetInputPlaceholder": "Search..."
                },
                "Edition": {
                    "label": "Edizione.",
                    "description": "Versione del testo in una specifica edizione."
                },
                "originPlace": {
                    "label": "Luogo di redazione",
                    "description": "Luogo dove il testo è stato redatto."
                },
                "issuer": {
                    "label": "Creatore",
                    "description": "Agente responsabile per la creazione dell'opera, o per la sua promulgazione."
                },
                "subject": {
                    "label": "Soggetto",
                    "description": "I contenuti dell'opera."
                },
                "originDate": {
                    "label": "Data",
                    "description": "Data di pubblicazione o promulgazione dell'opera."
                }
            }
        },
        "Places": {
            "label": "Luoghi",
            "facetResultsType": "Luoghi",
            "shortDescription": "Luoghi del Veneto menzionati nei documenti scritti",
            "longDescription": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Utilizzare questa prospettiva per accedere ai dati relativi ai luoghi del Veneto menzionati nei documenti scritti. Vedere le <a href=\"/instructions\">istruzioni</a> per l'utilizzo dei filtri. La visualizzazione dei risultati può essere selezionata utilizzando le schede:  </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> <strong>TABELLA</STRONG> per consultare una lista di luoghi menzionatinei testi scritti, il documento che li cita e il link ai luoghi.</li><li> <strong>EXPORT</strong> per esportare la query SPARQL utilizzata per generare la vista della tabella dei risultati nell'editor di query di YASGUI. </li> </ul>",
            "instancePage": {
                "label": "Luogo",
                "description": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> The MMM data model follows the <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a> definition of a work, which refers to “distinct concepts or combinations of concepts identified in artistic and intellectual expressions.” Works contain title and author information. This definition is not shared by the Bibale or Oxford Libraries’ conception of the term, which both define their internal “work” concept more closely to the FRBRoo conception of an Expression. The SDBM does not have a work concept at all, recording only the titles of the texts as given in its various sources, without normalizing that data or linking it directly to author information. Works were generated within the MMM dataset by manually creating links across the three datasets’ various conceptions of the relationship between authors and their creations. This process was not able to reconcile every work contained within the combined dataset. </p>"
            },
            "properties": {
                "uri": {
                    "label": "URI",
                    "description": "Uniform Resource Identifier"
                },
                "prefLabel": {
                    "label": "Luogo",
                    "description": "Nome del luogo.",
                    "textFacetInputPlaceholder": "Search..."
                },
                "relatedWork": {
                    "label": "Opera relativa",
                    "description": "Opera che cita il luogo."
                },
                "link": {
                    "label": "Link",
                    "description": "Link a repository esterni."
                }
            }
        },
        "RelatedResources": {
            "label": "Testi citati",
            "facetResultsType": "Testi citati",
            "shortDescription": "Informazioni riguardanti opere citate nelle fonti trattate.",
            "longDescription": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Utilizzare questa prospettiva per accedere ai dati relativi ai documenti citati nei testi inclusi nel dataset OntoVE. La visualizzazione dei risultati può essere selezionata utilizzando le schede:  </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> <strong>TABELLA</STRONG> per consultare i testi del dataset OntoVE e informazioni riguardo a altri testi che citano.</li><li> <strong>EXPORT</strong> per esportare la query SPARQL utilizzata per generare la vista della tabella dei risultati nell'editor di query di YASGUI. </li> </ul>",
            "instancePage": {
                "label": "Opera citata",
                "description": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> The MMM data model follows the <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a> definition of a work, which refers to “distinct concepts or combinations of concepts identified in artistic and intellectual expressions.” Works contain title and author information. This definition is not shared by the Bibale or Oxford Libraries’ conception of the term, which both define their internal “work” concept more closely to the FRBRoo conception of an Expression. The SDBM does not have a work concept at all, recording only the titles of the texts as given in its various sources, without normalizing that data or linking it directly to author information. Works were generated within the MMM dataset by manually creating links across the three datasets’ various conceptions of the relationship between authors and their creations. This process was not able to reconcile every work contained within the combined dataset. </p>"
            },
            "properties": {
                "uri": {
                    "label": "URI",
                    "description": "Uniform Resource Identifier"
                },
                "prefLabel": {
                    "label": "Versione del testo trattato",
                    "description": "Versione del testo trattato.",
                    "textFacetInputPlaceholder": "Search..."
                },
                "work": {
                    "label": "testo",
                    "description": "Testo contenuto nella versione."
                },
                "citedResource": {
                    "label": "risorsa citata",
                    "description": "testo citato"
                }
            }
        },
        "Events": {
            "label": "Eventi",
            "facetResultsType": "Eventi",
            "shortDescription": "Eventi menzionati o relativi ai testi",
            "longDescription": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Utilizzare questa prospettiva per accedere ai dati relativi agli eventi citati nei testi raccolti nel dataset OntoVE. Vedere le <a href=\"/instructions\">istruzioni</a> per l'utilizzo dei filtri. La visualizzazione dei risultati può essere selezionata utilizzando le schede: </p> <ul class=\"MuiTypography-root MuiTypography-body1\"> <li> <strong>TABELLA</STRONG> per consultare lista di eventi, le persone coinvolte e il testo in cui sono contenute. </li> <li> <strong>EXPORT</strong> la query SPARQL utilizzata per generare la vista della tabella dei risultati nell'editor di query di YASGUI. </li> </ul>",
            "instancePage": {
                "label": "Event",
                "description": ""
            },
            "properties": {
                "uri": {
                    "label": "URI",
                    "description": "Uniform Resource Identifier"
                },
                "prefLabel": {
                    "label": "Evento",
                    "description": "Evento.",
                    "textFacetInputPlaceholder": "Search..."
                },
                "agent": {
                    "label": "Agente",
                    "description": "Agente responsabile dell'evento."
                },
                "participant": {
                    "label": "Partecipante",
                    "description": "Partecipante all'evento."
                },
                "citingWork": {
                    "label": "Testo",
                    "description": "Testo che cita l'evento."
                }
            }
        },

    },
   "aboutThePortalPartOne": ` <h1 class= "MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom"> Riguardo al Portale </h1> <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"> Questo portale semantico ha come obiettivo rendere possibile l'esplorazione di dati relativi ai beni culturali di origine germanica in Veneto. Presenta i dati dal Grafo di Conoscenza sviluppato all'interno del progetto "OntoVE-Ontologie per la descrizione del patrimonio culturale germanico in Veneto nella prospettiva dell'European Open Science Cloud (EOSC)", finanziato dal <a href =\"https://www.ponricerca.gov.it/pon-ricerca/programma\" target='_blank' rel='noopener noreferrer'> Programma Operativo Nazionale Ricerca e Innovazione 2014-2020 </a>, sotto la supervisione di <a href=\"https://www.unive.it/data/persone/5592048\"target='_blank' rel='noopener noreferrer'>Marina Buzzoni</a>, in collaborazione con <a href=\"https://www.netseven.it\" target='_blank' rel='noopener noreferrer'>Net7</a>.</p>`,"aboutThePortalPartTwo": "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">Tramite l'utilizzo dei <a href=\"https://www.w3.org/DesignIssues/LinkedData.html\" target='_blank' rel='noopener noreferrer'> principi dei Linked Open Data</a> e gli <a href=\"https://www.w3.org/2001/sw/wiki/Main_Page\" target='_blank' rel='noopener noreferrer'>standard del Web Semantico</a>, il portale OntoVE presenta dati relativi al patrimonio culturale germanico in Veneto. Le diverse prospettive accessibili dal portale presentano sottoinsiemi di dati, che possono essere esplorati senza dover ricorrere a una query SPARQL.</p> <h2 class=\"MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom\"> Riuso dei Dati </h2> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">I dati OntoVE sono disponibili per il riuso secondo la licenza CC-BY-NC 4.0. Devi riconoscere una menzione di paternità adeguata , fornire un link alla licenza e indicare se sono state effettuate delle modifiche . Puoi fare ciò in qualsiasi maniera ragionevole possibile, ma non con modalità tali da suggerire che il progetto OntoVE e le istituzioni partner avallino te o il tuo utilizzo del materiale. Non si possono usare i dati per scopi commerciali.</p> <h2 class=\"MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom\"> Ulteriori informazioni</h2> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Il progetto è finanziato dal <a href =\"https://www.ponricerca.gov.it/pon-ricerca/programma\" target='_blank' rel='noopener noreferrer'> Programma Operativo Nazionale Ricerca e Innovazione 2014-2020 </a> e il <a href =\"https://eur-lex.europa.eu/EN/legal-content/glossary/european-social-fund-esf.html\" target='_blank' rel='noopener noreferrer'>  Fondo Sociale Europeo ESF </a> all'interno del <a href =\"https://www.europarl.europa.eu/factsheets/en/sheet/215/recovery-assistance-for-cohesion-and-the-territories-of-europe-react-eu-\" target='_blank' rel='noopener noreferrer'>Recovery assistance for cohesion and the territories of Europe, REACT-EU</a>, in collaborazione con <a href=\"https://www.netseven.it\" target='_blank' rel='noopener noreferrer'>Net7</a>, specialmente con Chiara Aiola e Alessandro Bertozzi e sotto la supervisione di <a href=\"https://www.unive.it/data/persone/5592048\"target='_blank' rel='noopener noreferrer'>Marina Buzzoni</a>.</p><p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Questo portale semantico riusa il <a href=\"https://github.com/SemanticComputing/sampo-ui\" target='_blank'rel='noopener noreferrer'>Modello Sampo</a>. Il grafo di conoscenza alla base del portale è stato creato riutilizzando diverse ontologie di settore e di dominio. Clicca <a href=\"https://w3id.org/ontove/ontology\" target='_blank' rel='noopener noreferrer'>qui</a> per esaminare tutte le classi e le proprietà. I due modelli ontologici elaborati nel progetto, OntoVE-WrittenRecords e OntoVE-Archeo, possono essere consultati rispettivamente <a href=\"https://github.com/ChiDeBa/ontove_writtenrecords\" target='_blank' rel='noopener noreferrer'>qui</a> e <a href=\"https://github.com/ChiDeBa/ontove_archeo\" target='_blank' rel='noopener noreferrer'>qui</a>. Per chi fosse interessato a esplorare i dati attraverso SPARQL, lo SPARQL Endpoint si trova <a href=\"http://ontove-endpoint.chitontove.it\" target='_blank' rel='noopener noreferrer'>qui</a>. Il grafo di conoscenza è stato creato con<a href=\"https://protege.stanford.edu/software.php\" target='_blank' rel='noopener noreferrer'>Protégé Desktop Editor </a>.</p>",
        "instructions": "<h1 class=\"MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom\"> Istruzioni </h1> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> La funzionalità di ricerca di questo portale si basa sul paradigma di <a href=\"https://doi.org/10.2200/S00190ED1V01Y200904ICR005\" target='_blank' rel='noopener noreferrer'> ricerca a faccette</a>. Per impostazione predefinita, ogni prospettiva visualizza tutti i risultati della classe corrispondente. Questo insieme di risultati predefinito può essere ristretto utilizzando i filtri a sinistra. </p> <h2 class=\"MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom\"> Utilizzo di un singolo filtro </h2> <h3 class=\"MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom\"> Selezionare valori all'interno di un filtro </h3> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Tutti i valori possibili per un filtro vengono visualizzati come elenco o come struttura gerarchica ad albero (se disponibile). Il numero di risultati è indicato tra parentesi per ogni valore. Una volta selezionato un valore, i risultati vengono aggiornati automaticamente. Per evitare ulteriori selezioni che non restituiscono alcun risultato, vengono aggiornati contemporaneamente anche i valori possibili per tutti gli altri filtri.</p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Si possono selezionare valori multipli all'interno di un singolo filtro.La selezione di valori multipi genera risultati che contengono uno qualsiasi dei valori selezionati. Ad esempio, se si selezionano sia <i>Carlo Magno </i> e <i> Pipino il Breve </i> come Issuer, la ricerca ritorna risultati che includano o <i>Carlo Magno</i> <strong>OR</strong> <i>Pipino il Breve </i> come Issuer.</p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> I valori selezionati di un filtro appaiono nella sezione Filtri attivi, in cima all'elenco dei filtri. Per deselezionare un filtro, fare clic sul segno X accanto ad esso nella sezione Filtri attivi. È anche possibile deselezionare il valore di un filtro togliendo il segno di spunta nell'elenco dei valori del filtro. La sezione Filtri attivi appare solo se ci sono valori di filtro attualmente selezionati.</p> <h3 class=\"MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom\"> Ricerca all'interno di un filtro </h3> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> La ricerca all'interno di un filtro può essere effettuata utilizzando il campo di ricerca nella parte superiore di ciascun filtro. Tutti i possibili valori di un filtro rimangono sempre visibili. I valori del filtro che corrispondono al termine di ricerca sono indicati da una sottolineatura viola. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Passaggi per la ricerca all'interno dei filtri: </p> <ol class=\"MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom\"> <li> Digitare il termine di ricerca nel campo di ricerca. Se ci sono corrispondenze, a destra del campo di ricerca appare un numero che indica il numero di valori del filtro che corrispondono al termine di ricerca. </li> <li> Fare clic sulle frecce a destra del campo di ricerca per scorrere i risultati. Facendo clic sulla freccia, in cima all'elenco apparirà un valore di filtro diverso. I filtri corrispondenti sono sottolineati in viola. </li> <li> Fare clic sul segno di spunta accanto al valore di un filtro per attivarlo. I risultati (e anche gli altri filtri) vengono aggiornati automaticamente. </li> </ol> <h2 class=\"MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom\"> Utilizzo di filtri multipli contemporaneamente </h2> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> L'efficacia della ricerca a faccette si realizza quando si applicano più filtri contemporaneamente. Come in molti siti di e-commerce, si utilizza sempre un AND logico tra i filtri. Ad esempio, selezionando <i>Carlo Magno </i> e <i>Pipino il Breve</i> come Issuer e <i>Vicenza</i> e <i> Verona</i> come Subject, i risultati sono così ridotti: </p> <p class=\"MuiTypography-root MuiTypography-body1\"> (Issuer: <i>Carlo Magno</i> <strong>OR</strong> Issuer: <i>Pipino il Breve</i>) </p> <p class=\"MuiTypography-root MuiTypography-body1\"> <strong>AND</strong> </p> <p class=\"MuiTypography-root MuiTypography-body1\"> (Subject: <i>Vicenza</i> <strong>OR</strong> Subject: <i>Verona</i>) </p>",
    "feedback": "<h1 class=\"MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom\"> Feedback </h1> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> This semantic portal has been developed by ... </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> We are interested in your feedback on the functionality, coverage, and usefulness of the portal and its data. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Please complete our <a href=\"\" target='_blank' rel='noopener noreferrer'>Feedback Survey Form (add link).</a> </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> You can also contact us via email: ... or DM us on Twitter: ... </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Please be aware that this portal’s response times may be affected by the size and complexity of the underlying knowledge graph. </p>"
}