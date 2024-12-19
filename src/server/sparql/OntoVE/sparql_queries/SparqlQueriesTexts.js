const perspectiveID = 'Texts'

export const TextProperties = `
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
  ?id bibframe:hasInstance ?Edition__id .
  ?Edition__id rdfs:label ?Edition__prefLabel .
  BIND (?Edition__id AS ?Edition__dataProviderUrl)
  }
  UNION
    {
      ?id bibframe:originPlace ?originPlace__id .
      ?originPlace__id rdfs:label ?originPlace__prefLabel .
      }
      UNION
      {
        ?id bibo:issuer ?issuer__id .
        ?issuer__id rdfs:label ?issuer__prefLabel .
        }
    UNION
    {
      ?id bibframe:subject ?subject__id .
      ?subject__id rdfs:label ?subject__prefLabel .
      BIND (?subject__id AS ?subject__dataProviderUrl)
    }
    UNION
    {
      ?id bibframe:originDate ?originDate__id .
      BIND(?originDate__id AS ?originDate__prefLabel)
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
