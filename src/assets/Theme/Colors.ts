import { Themes } from '~/assets/Theme/Themes'

const colors: { [key: string]: Color } = {
  PRIMARYCOLOR: {
    light: 'white',
    dark: '#34495e'
  }
}

export type Color = {
  light: string
  dark: string
}

export enum Colors {
  PRIMARYCOLOR = 'PRIMARYCOLOR'
}

export default (color: Colors, theme: Themes) => colors[color][theme || Themes.light]