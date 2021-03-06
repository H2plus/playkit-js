// @flow
declare type PKUIComponent = {
  label: string,
  presets: Array<string>,
  container: string,
  get: Function,
  props: {},
  beforeComponent?: string,
  afterComponent?: string,
  replaceComponent?: string
};
