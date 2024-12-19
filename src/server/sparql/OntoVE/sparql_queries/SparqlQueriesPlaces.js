const perspectiveID = 'Places'

export const PlaceProperties = `
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
      ?id bibframe:subjectOf ?relatedWork__id .
      ?relatedWork__id rdfs:label ?relatedWork__prefLabel .
      }
    UNION
    {
      ?id ontove:externalLink ?link__id .
      BIND(?link__id AS ?link__prefLabel)
      BIND(?link__id AS ?link__dataProviderUrl)
    }
    `

export const knowledgeGraphMetadataQuery = `
  SELECT * 
  WHERE {
    ?id a cidoc-crm:E53_Place ;
        bibframe:subjectOf ?relatedWork;
        ontove:externalLink ?link.
  }
`