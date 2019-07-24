declare type MAP_IMPLEMENTATION = "MapBox" | "OpenLayers"

declare interface JMapInteractor {
  init(map: any): void
  activate(): void
  deactivate(): void
  terminate(): void
}

declare interface JMapSelection {
  [ layerId: number ]: any[] // any = feature
}

declare interface JMapLayersVisibilityStatus {
  [ layerElementId: number ]: {
    isRendered: boolean
    visibilityProperty: boolean
    scaleVisibility: boolean
    extentVisibility: boolean
  }
}

declare interface JProjection {
  code: string
  name: string
}

declare interface JMapFeatureAttributeValues {
  featureId: number
  [ attributeId: string ]: any
}
