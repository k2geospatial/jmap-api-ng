declare interface JMapMouseOver {
  text: string
  preventTextDuplication: boolean
  backgroundColor: string
  visible: boolean
  maximumVisibleMapboxZoom: number
  minimumVisibleMapboxZoom: number
}

declare interface JMouseOverContent {
  html: string
  photoFeatureIdsByLayerId: { [ layerId: number ]: number[] }
  toEvalJS: string[]
}

declare interface JMouseOverSelectionParams {
  selection: JMapSelection
  popup: mapboxgl.Popup
  map: mapboxgl.Map | undefined
  location: JLocation
}

declare interface JMouseOverEventParams {
  content: JMouseOverContent
}

declare interface JMouseOverBeforeAfterContentParams extends JMouseOverSelectionParams {
  // if called will stop the current mouse over to be displayed
  cancelMouseOver(): void
}

declare interface JMouseOverBeforeEventParams extends JMouseOverBeforeAfterContentParams {
  addFeaturesToLayerSelection(layerId: JId, features: GeoJSON.Feature[]): void
  removeFeaturesFromLayerSelection(layerId: JId, featureIds: string[]): void
  getFeaturesByLayerId(layerId: JId): GeoJSON.Feature[]
  // you can add some html at the beginning of the mouseover
  addHtmlContentAtTheBeginning(html: string): void
  // you can add some html at the end of the mouseover
  addHtmlContentAtTheEnd(html: string): void
  displayHtmlContentEvenIfNoMouseOver(): void
}

declare interface JMouseOverAfterEventParams extends JMouseOverBeforeAfterContentParams, JMouseOverEventParams {
  // nothing to add
}
