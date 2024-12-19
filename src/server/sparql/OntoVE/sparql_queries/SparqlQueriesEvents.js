const perspectiveID = 'Events'

export const EventProperties = `
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
      ?id cidoc-crm:P14_carried_out_by ?agent__id .
      ?agent__id rdfs:label ?agent__prefLabel .
      }
      UNION
      {
          ?id cidoc-crm:P11_had_participant ?participant__id .
          ?participant__id rdfs:label ?participant__prefLabel .
      }
      UNION
      {
          ?id (bibo:citedBy|bibframe:subjectOf|ontove:eventCitedBy) ?citingWork__id .
          ?citingWork__id rdfs:label ?citingWork__prefLabel .
          BIND(?citingWork__id AS ?citingWork__dataProviderUrl)
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
