const perspectiveID = 'CulturalScope'

export const CulturalScopeProperties = `
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
      ?id context-description:isAuthorshipAttributionOf ?CHItem__id .
      ?CHItem__id rdfs:label ?CHItem__prefLabel .
      ?CHItem__id rdf:type ?CHType__id.
      ?CHType__id rdfs:label ?CHType__prefLabel.
    }
    UNION
    {
      ?id context-description:hasCulturalScope ?CulturalScope__id.
      ?CulturalScope__id rdfs:label ?CulturalScope__prefLabel.
    }
    UNION
    { ?id context-description:hasInterpretationCriterion ?Criterion__id.
     ?Criterion__id rdfs:label ?Criterion__prefLabel. 
    }
    UNION
    {
      ?id (ontove:eventCitedBy|context-description:hasBibliography) ?Bibliography__id .
      ?Bibliography__id rdfs:label ?Bibliography__prefLabel .
    }
      UNION{
      ?id (ontove:eventCitedBy|context-description:hasBibliography) ?Bibliography__id .
      ?Bibliography__id (context-description:completeBibliographicReference|bibo:handle) ?Reference__id.
       BIND(?Reference__id AS ?Reference__prefLabel)
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
