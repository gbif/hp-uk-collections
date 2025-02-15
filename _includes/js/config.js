var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});


var siteConfig = {
  version: 2,
  routes: {
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey'],
    occurrenceSearch: {
      route: '/specimen/search'
    }
  },
  occurrence: {
    excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    highlightedFilters: ['q', 'taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    availableTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
    availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE'],
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 0
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "or",
          "predicates": [
            {
              "type": "isNotNull",
              "key": "institutionKey"
            },
            {
              "type": "isNotNull",
              "key": "collectionKey"
            }
          ]
        },
        {
          "type": "in",
          "key": "basisOfRecord",
          "values": [
            "PRESERVED_SPECIMEN",
            "FOSSIL_SPECIMEN",
            "MATERIAL_SAMPLE",
            "LIVING_SPECIMEN"
          ]
        },
        { "type": "equals", "key": "publishingCountry", "value": "GB" }
      ]
    },
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DATASETS', 'DASHBOARD'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  collection: {
    availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE'],
    excludedFilters: ['countrySingleGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "GB",
	  active: true
    }
  },
  institution: {
    availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE'],
    excludedFilters: ['countrySingleGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "GB",
      active: true
    },
    mapSettings: {
      enabled: true,
      lat: 54.89,
      lng: -3.86,
      zoom: 5.4
    },
  },
  apiKeys: {
    maptiler: "2RcTol2NPTFHDIGb3CDP",
    mapbox: "pk.eyJ1IjoiZGlzc2NvdWsiLCJhIjoiY2xpd3h5dWk1MDJuaDNxcWV0cGExM2JyMCJ9.EHSAxoecThELIUWq84M4wg"
  },
  maps: {
    // locale: 'ja',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
  messages: {
    "catalogues.occurrences": "Specimens",
    "search.tabs.gallery": "Images",
    "filters.city.name": "City/town",
  }
};
