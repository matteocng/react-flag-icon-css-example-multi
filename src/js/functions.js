// @flow
import type { ObjectType, KeyType, GetRandomElementsReturnType } from '../types/flow'

export const getStylePropName = () : string => (__USE_CSS_MODULES__ ? 'styleName' : 'className')

export const makeSlug = (str: string) : string => str.toLowerCase().split(' ').join('_')

export const generateFlagLink = (name: string) : string => `https://en.wikipedia.org/wiki/${makeSlug(name)}`

export const getRandomElements = (list: Array<string | number>,
                                  count?: number = 0) : GetRandomElementsReturnType => {
  if (!count || count <= 1) return list[Math.floor((Math.random() * list.length))]
  let randomElements = []
  for (let n = 0; n < count; n += 1) {
    randomElements = [...randomElements, getRandomElements(list, 1)]
  }
  return randomElements
}

export const pick = (sourceObj: ObjectType, keys: Array<KeyType>) : ObjectType =>
  keys.reduce((inObj: ObjectType, key: KeyType) : ObjectType => { // eslint-disable-line arrow-body-style, max-len
    return {}.hasOwnProperty.call(sourceObj, key) ? { ...inObj, [key]: sourceObj[key] } : inObj
  }, {})
