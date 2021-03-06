var OWS_1_0_0_Module_Factory = function () {
  var OWS_1_0_0 = {
    name: 'OWS_1_0_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ows',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'classInfo',
        localName: 'OperationsMetadata',
        propertyInfos: [{
            type: 'element',
            name: 'operation',
            collection: true,
            elementName: 'Operation',
            typeInfo: 'OWS_1_0_0.Operation'
          }, {
            type: 'element',
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'extendedCapabilities',
            elementName: 'ExtendedCapabilities',
            typeInfo: 'AnyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'Operation',
        propertyInfos: [{
            type: 'element',
            name: 'dcp',
            collection: true,
            elementName: 'DCP',
            typeInfo: 'OWS_1_0_0.DCP'
          }, {
            type: 'element',
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_0_0.MetadataType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DCP',
        propertyInfos: [{
            type: 'element',
            name: 'http',
            elementName: 'HTTP',
            typeInfo: 'OWS_1_0_0.HTTP'
          }]
      }, {
        type: 'classInfo',
        localName: 'HTTP',
        propertyInfos: [{
            name: 'getOrPost',
            collection: true,
            elementTypeInfos: [{
                elementName: 'Get',
                typeInfo: 'OWS_1_0_0.RequestMethodType'
              }, {
                elementName: 'Post',
                typeInfo: 'OWS_1_0_0.RequestMethodType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'RequestMethodType',
        baseTypeInfo: 'OWS_1_0_0.OnlineResourceType',
        propertyInfos: [{
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_0_0.DomainType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DomainType',
        propertyInfos: [{
            type: 'element',
            name: 'value',
            collection: true,
            elementName: 'Value',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_0_0.MetadataType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MetadataType',
        propertyInfos: [{
            type: 'element',
            name: 'abstractMetaData',
            elementName: 'AbstractMetaData',
            typeInfo: 'AnyType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'KeywordsType',
        propertyInfos: [{
            type: 'element',
            name: 'keyword',
            collection: true,
            elementName: 'Keyword',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'type',
            elementName: 'Type',
            typeInfo: 'OWS_1_0_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExceptionReport',
        propertyInfos: [{
            type: 'element',
            name: 'exception',
            collection: true,
            elementName: 'Exception',
            typeInfo: 'OWS_1_0_0.ExceptionType'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'language',
            typeInfo: 'String',
            attributeName: {
              localPart: 'language'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExceptionType',
        propertyInfos: [{
            type: 'element',
            name: 'exceptionText',
            collection: true,
            elementName: 'ExceptionText',
            typeInfo: 'String'
          }, {
            name: 'exceptionCode',
            typeInfo: 'String',
            attributeName: {
              localPart: 'exceptionCode'
            },
            type: 'attribute'
          }, {
            name: 'locator',
            typeInfo: 'String',
            attributeName: {
              localPart: 'locator'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'WGS84BoundingBoxType',
        baseTypeInfo: 'OWS_1_0_0.BoundingBoxType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BoundingBoxType',
        propertyInfos: [{
            type: 'element',
            name: 'lowerCorner',
            elementName: 'LowerCorner',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            type: 'element',
            name: 'upperCorner',
            elementName: 'UpperCorner',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            name: 'crs',
            typeInfo: 'String',
            attributeName: {
              localPart: 'crs'
            },
            type: 'attribute'
          }, {
            name: 'dimensions',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'dimensions'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CodeType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'codeSpace',
            typeInfo: 'String',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'acceptVersions',
            elementName: 'AcceptVersions',
            typeInfo: 'OWS_1_0_0.AcceptVersionsType'
          }, {
            type: 'element',
            name: 'sections',
            elementName: 'Sections',
            typeInfo: 'OWS_1_0_0.SectionsType'
          }, {
            type: 'element',
            name: 'acceptFormats',
            elementName: 'AcceptFormats',
            typeInfo: 'OWS_1_0_0.AcceptFormatsType'
          }, {
            name: 'updateSequence',
            typeInfo: 'String',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ContactType',
        propertyInfos: [{
            type: 'element',
            name: 'phone',
            elementName: 'Phone',
            typeInfo: 'OWS_1_0_0.TelephoneType'
          }, {
            type: 'element',
            name: 'address',
            elementName: 'Address',
            typeInfo: 'OWS_1_0_0.AddressType'
          }, {
            type: 'element',
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: 'OWS_1_0_0.OnlineResourceType'
          }, {
            type: 'element',
            name: 'hoursOfService',
            elementName: 'HoursOfService',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInstructions',
            elementName: 'ContactInstructions',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ServiceIdentification',
        baseTypeInfo: 'OWS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'serviceType',
            elementName: 'ServiceType',
            typeInfo: 'OWS_1_0_0.CodeType'
          }, {
            type: 'element',
            name: 'serviceTypeVersion',
            collection: true,
            elementName: 'ServiceTypeVersion',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'fees',
            elementName: 'Fees',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'accessConstraints',
            collection: true,
            elementName: 'AccessConstraints',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'title',
            elementName: 'Title',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: 'Abstract',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'keywords',
            collection: true,
            elementName: 'Keywords',
            typeInfo: 'OWS_1_0_0.KeywordsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponsiblePartyType',
        propertyInfos: [{
            type: 'element',
            name: 'individualName',
            elementName: 'IndividualName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'organisationName',
            elementName: 'OrganisationName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'positionName',
            elementName: 'PositionName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: 'OWS_1_0_0.ContactType'
          }, {
            type: 'element',
            name: 'role',
            elementName: 'Role',
            typeInfo: 'OWS_1_0_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ServiceProvider',
        propertyInfos: [{
            type: 'element',
            name: 'providerName',
            elementName: 'ProviderName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'providerSite',
            elementName: 'ProviderSite',
            typeInfo: 'OWS_1_0_0.OnlineResourceType'
          }, {
            type: 'element',
            name: 'serviceContact',
            elementName: 'ServiceContact',
            typeInfo: 'OWS_1_0_0.ResponsiblePartySubsetType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OnlineResourceType',
        propertyInfos: [{
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponsiblePartySubsetType',
        propertyInfos: [{
            type: 'element',
            name: 'individualName',
            elementName: 'IndividualName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'positionName',
            elementName: 'PositionName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: 'OWS_1_0_0.ContactType'
          }, {
            type: 'element',
            name: 'role',
            elementName: 'Role',
            typeInfo: 'OWS_1_0_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TelephoneType',
        propertyInfos: [{
            type: 'element',
            name: 'voice',
            collection: true,
            elementName: 'Voice',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'facsimile',
            collection: true,
            elementName: 'Facsimile',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'CapabilitiesBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'serviceIdentification',
            elementName: 'ServiceIdentification',
            typeInfo: 'OWS_1_0_0.ServiceIdentification'
          }, {
            type: 'element',
            name: 'serviceProvider',
            elementName: 'ServiceProvider',
            typeInfo: 'OWS_1_0_0.ServiceProvider'
          }, {
            type: 'element',
            name: 'operationsMetadata',
            elementName: 'OperationsMetadata',
            typeInfo: 'OWS_1_0_0.OperationsMetadata'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'updateSequence',
            typeInfo: 'String',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AcceptVersionsType',
        propertyInfos: [{
            type: 'element',
            name: 'version',
            collection: true,
            elementName: 'Version',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'IdentificationType',
        baseTypeInfo: 'OWS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'OWS_1_0_0.CodeType'
          }, {
            name: 'boundingBox',
            collection: true,
            elementName: 'BoundingBox',
            typeInfo: 'OWS_1_0_0.BoundingBoxType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat',
            typeInfo: 'String'
          }, {
            name: 'availableCRS',
            collection: true,
            elementName: 'AvailableCRS',
            typeInfo: 'String',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_0_0.MetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AcceptFormatsType',
        propertyInfos: [{
            type: 'element',
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'SectionsType',
        propertyInfos: [{
            type: 'element',
            name: 'section',
            collection: true,
            elementName: 'Section',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'AddressType',
        propertyInfos: [{
            type: 'element',
            name: 'deliveryPoint',
            collection: true,
            elementName: 'DeliveryPoint',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'city',
            elementName: 'City',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'administrativeArea',
            elementName: 'AdministrativeArea',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'postalCode',
            elementName: 'PostalCode',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'country',
            elementName: 'Country',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'electronicMailAddress',
            collection: true,
            elementName: 'ElectronicMailAddress',
            typeInfo: 'String'
          }]
      }],
    elementInfos: [{
        elementName: 'OperationsMetadata',
        typeInfo: 'OWS_1_0_0.OperationsMetadata'
      }, {
        elementName: 'Operation',
        typeInfo: 'OWS_1_0_0.Operation'
      }, {
        elementName: 'DCP',
        typeInfo: 'OWS_1_0_0.DCP'
      }, {
        elementName: 'HTTP',
        typeInfo: 'OWS_1_0_0.HTTP'
      }, {
        elementName: 'ExceptionReport',
        typeInfo: 'OWS_1_0_0.ExceptionReport'
      }, {
        elementName: 'ServiceIdentification',
        typeInfo: 'OWS_1_0_0.ServiceIdentification'
      }, {
        elementName: 'ServiceProvider',
        typeInfo: 'OWS_1_0_0.ServiceProvider'
      }, {
        elementName: 'WGS84BoundingBox',
        typeInfo: 'OWS_1_0_0.WGS84BoundingBoxType',
        substitutionHead: 'BoundingBox'
      }, {
        elementName: 'Fees',
        typeInfo: 'String'
      }, {
        elementName: 'Exception',
        typeInfo: 'OWS_1_0_0.ExceptionType'
      }, {
        elementName: 'Metadata',
        typeInfo: 'OWS_1_0_0.MetadataType'
      }, {
        elementName: 'OutputFormat',
        typeInfo: 'String'
      }, {
        elementName: 'Title',
        typeInfo: 'String'
      }, {
        elementName: 'PositionName',
        typeInfo: 'String'
      }, {
        elementName: 'Abstract',
        typeInfo: 'String'
      }, {
        elementName: 'AccessConstraints',
        typeInfo: 'String'
      }, {
        elementName: 'ExtendedCapabilities',
        typeInfo: 'AnyType'
      }, {
        elementName: 'Keywords',
        typeInfo: 'OWS_1_0_0.KeywordsType'
      }, {
        elementName: 'AbstractMetaData',
        typeInfo: 'AnyType'
      }, {
        elementName: 'SupportedCRS',
        typeInfo: 'String',
        substitutionHead: 'AvailableCRS'
      }, {
        elementName: 'OrganisationName',
        typeInfo: 'String'
      }, {
        elementName: 'ContactInfo',
        typeInfo: 'OWS_1_0_0.ContactType'
      }, {
        elementName: 'AvailableCRS',
        typeInfo: 'String'
      }, {
        elementName: 'Language',
        typeInfo: 'String'
      }, {
        elementName: 'PointOfContact',
        typeInfo: 'OWS_1_0_0.ResponsiblePartyType'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: 'OWS_1_0_0.GetCapabilitiesType'
      }, {
        elementName: 'BoundingBox',
        typeInfo: 'OWS_1_0_0.BoundingBoxType'
      }, {
        elementName: 'IndividualName',
        typeInfo: 'String'
      }, {
        elementName: 'Role',
        typeInfo: 'OWS_1_0_0.CodeType'
      }, {
        elementName: 'Identifier',
        typeInfo: 'OWS_1_0_0.CodeType'
      }, {
        elementName: 'Post',
        typeInfo: 'OWS_1_0_0.RequestMethodType',
        scope: 'OWS_1_0_0.HTTP'
      }, {
        elementName: 'Get',
        typeInfo: 'OWS_1_0_0.RequestMethodType',
        scope: 'OWS_1_0_0.HTTP'
      }]
  };
  return {
    OWS_1_0_0: OWS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWS_1_0_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_1_0_0 = OWS_1_0_0_Module_Factory().OWS_1_0_0;
  }
  else {
    var OWS_1_0_0 = OWS_1_0_0_Module_Factory().OWS_1_0_0;
  }
}