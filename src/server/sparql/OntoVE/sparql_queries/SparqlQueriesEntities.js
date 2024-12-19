const perspectiveID = 'Entities'

export const EntityProperties = `
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
      ?id context-description:hasAuthorshipAttribution ?CulturalScopeAttribution__id .
      ?CulturalScopeAttribution__id rdfs:label ?CulturalScopeAttribution__prefLabel .
      ?CulturalScopeAttribution__id context-description:hasCulturalScope ?CulturalScope__id.
      ?CulturalScope__id rdfs:label ?CulturalScope__prefLabel .
    }
    UNION
    {
      ?id cidoc-crm:P108i_was_produced_by ?Production__id .
      ?Production__id rdfs:label ?Production__prefLabel .
      ?Production__id cidoc-crm:P4_has_time-span ?Chronology__id.
      ?Chronology__id rdfs:label ?Chronology__prefLabel .
    }
    UNION
    {
      ?id context-description:hasBibliography ?Bibliography__id .
      ?Bibliography__id rdfs:label ?Bibliography__prefLabel .
    }
      UNION{
      ?id context-description:hasBibliography ?Bibliography__id .
      ?Bibliography__id (context-description:completeBibliographicReference|bibo:handle) ?Reference__id.
       BIND(?Reference__id AS ?Reference__prefLabel)
      }
      UNION
    {
      ?id (cidoc-crm:P54_has_current_permanent_location|cidoc-crm:P55_has_current_location) ?CurrentPlace__id .
      ?CurrentPlace__id rdfs:label ?CurrentPlace__prefLabel .
    }
      UNION
    {
      ?id (cidoc-crm:P53_has_former_or_current_location|ontove:has_finding_place|context-description:hasFindingLocation) ?FindingPlace__id .
      ?FindingPlace__id rdfs:label ?FindingPlace__prefLabel .
      BIND (?FindingPlace__id AS ?FindingPlace__dataProviderUrl)
    }
      UNION
    {
      ?id (cidoc-crm:P54_has_current_permanent_location|cidoc-crm:P55_has_current_location) ?CurrentPlace.
      ?CurrentPlace ontove:externalLink ?Geolink__id .
      BIND(?Geolink__id AS ?Geolink__prefLabel)
      BIND(?Geolink__id AS ?Geolink__dataProviderUrl)
    }
      UNION
    {
      ?id ontove:hasWebPage ?webpage__id.
      ?webpage__id rdfs:label ?webpage__prefLabel .
      ?webpage__id bibo:handle ?Resourcelink__id.
      BIND(?Resourcelink__id AS ?Resourcelink__prefLabel)
      BIND(?Resourcelink__id AS ?Resourcelink__dataProviderUrl)
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
