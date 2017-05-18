export { default as styles } from './CustomFlags.scss'

export const codes = {
  w1: 'Example 1 country',
  w2: 'Example 2 country',
  w3: 'Example 3 country',
}

// You can comment or remove the following line if you don't use Facebook's Flow.
export type CustomCodeType = $Keys<typeof codes>
