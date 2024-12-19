const perspectiveID = 'RelatedResources'

export const RelatedResourceProperties = `
{
  ?id rdfs:label ?prefLabel__id .
  FILTER(LANGMATCHES(LANG(?prefLabel__id),'it'))
  BIND(?prefLabel__id AS ?prefLabel__prefLabel)
  BIND(?id AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
}
    UNION
    {
      ?id bibframe:instanceOf ?work__id .
      ?work__id rdfs:label ?work__prefLabel .
      FILTER(LANGMATCHES(LANG(?work__prefLabel),'it'))
      }
    UNION
    {
        ?id (bibo:cites|bibframe:references) ?citedResource__id .
        ?citedResource__id rdfs:label ?citedResource__prefLabel .
        FILTER(LANGMATCHES(LANG(?citedResource__prefLabel),'it'))
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
