export type CustomFlagPropsType = {|
  code: String,
  size: String,
  children?: React$Element<*>
|}

export type FlagBlockPropsType = CountryType

export type AppFactoryOptionsType = {|
  useCssModules: boolean
|}

export type AppPropsType = {|
  headingText: String,
  subHeadingText: String,
  moduleVersionReactFlagIconCss: String
|}

export type KeyType = string | number

export type ObjectType = { [key: KeyType]: T }

export type GetRandomElementsReturnType = string | number | Array<string | number>
