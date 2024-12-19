const perspectiveID = 'Locations'

export const LocationProperties = `
{
  ?id rdfs:label ?prefLabel__id .
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(?id AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
}
    UNION
    {
      ?id (cidoc-crm:P54_has_current_permanent_location|cidoc-crm:P55_has_current_location) ?CurrentPlace__id .
      ?CurrentPlace__id rdfs:label ?CurrentPlace__prefLabel .
    }
    UNION
    {
      ?id (cidoc-crm:P54_has_current_permanent_location|cidoc-crm:P55_has_current_location) ?CurrentPlace.
      ?CurrentPlace ontove:externalLink ?link__id .
      BIND(?link__id AS ?link__prefLabel)
      BIND(?link__id AS ?link__dataProviderUrl)
    }

    `
export const knowledgeGraphMetadataQuery = `
  SELECT * 
  WHERE {
    ?id a sd:Dataset ;
        dct:title ?title ;
        dct:publisher ?publisher ;
        dct:rightsHolder ?rightsHolder ;
        dct:modified ?modified ;
        dct:source ?databaseDump__id .
    ?databaseDump__id skos:prefLabel ?databaseDump__prefLabel ;
                      mmm-schema:data_provider_url ?databaseDump__dataProviderUrl ;
                      dct:modified ?databaseDump__modified .
  }
`