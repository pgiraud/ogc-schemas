var SMIL_2_0_Language_Module_Factory = function () {
  var SMIL_2_0_Language = {
    name: 'SMIL_2_0_Language',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language',
    typeInfos: [{
        type: 'classInfo',
        localName: 'SetType',
        baseTypeInfo: 'SMIL_2_0.SetPrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            domAllowed: true,
            typedObjectAllowed: true,
            type: 'anyElement'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateMotionType',
        baseTypeInfo: 'SMIL_2_0.AnimateMotionPrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            domAllowed: true,
            typedObjectAllowed: true,
            type: 'anyElement'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'calcMode',
            typeInfo: 'String',
            attributeName: 'calcMode',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateColorType',
        baseTypeInfo: 'SMIL_2_0.AnimateColorPrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            domAllowed: true,
            typedObjectAllowed: true,
            type: 'anyElement'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'calcMode',
            typeInfo: 'String',
            attributeName: 'calcMode',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateType',
        baseTypeInfo: 'SMIL_2_0.AnimatePrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            domAllowed: true,
            typedObjectAllowed: true,
            type: 'anyElement'
          }, {
            name: 'calcMode',
            typeInfo: 'String',
            attributeName: 'calcMode',
            type: 'attribute'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        elementName: 'set',
        typeInfo: 'SMIL_2_0_Language.SetType'
      }, {
        elementName: 'animateColor',
        typeInfo: 'SMIL_2_0_Language.AnimateColorType'
      }, {
        elementName: 'animateMotion',
        typeInfo: 'SMIL_2_0_Language.AnimateMotionType'
      }, {
        elementName: 'animate',
        typeInfo: 'SMIL_2_0_Language.AnimateType'
      }]
  };
  return {
    SMIL_2_0_Language: SMIL_2_0_Language
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SMIL_2_0_Language_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SMIL_2_0_Language = SMIL_2_0_Language_Module_Factory().SMIL_2_0_Language;
  }
  else {
    var SMIL_2_0_Language = SMIL_2_0_Language_Module_Factory().SMIL_2_0_Language;
  }
}