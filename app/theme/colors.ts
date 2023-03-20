
const palette = {

  neutral1: 'hsl(0, 0%, 99.0%)',
  neutral2: 'hsl(0, 0%, 97.3%)',
  neutral3: 'hsl(0, 0%, 95.1%)',
  neutral4: 'hsl(0, 0%, 93.0%)',
  neutral5: 'hsl(0, 0%, 90.9%)',
  neutral6: 'hsl(0, 0%, 88.7%)',
  neutral7: 'hsl(0, 0%, 85.8%)',
  neutral8: 'hsl(0, 0%, 78.0%)',
  neutral9: 'hsl(0, 0%, 56.1%)',
  neutral10: 'hsl(0, 0%, 52.3%)',
  neutral11: 'hsl(0, 0%, 43.5%)',
  neutral12: 'hsl(0, 0%, 9.0%)',

  primary1: 'hsl(165, 60.0%, 98.8%)',
  primary2: 'hsl(169, 64.7%, 96.7%)',
  primary3: 'hsl(169, 59.8%, 94.0%)',
  primary4: 'hsl(169, 53.1%, 90.2%)',
  primary5: 'hsl(170, 47.1%, 85.0%)',
  primary6: 'hsl(170, 42.6%, 77.9%)',
  primary7: 'hsl(170, 39.9%, 68.1%)',
  primary8: 'hsl(172, 42.1%, 52.5%)',
  primary9: 'hsl(173, 80.0%, 36.0%)',
  primary10: 'hsl(173, 83.4%, 32.5%)',
  primary11: 'hsl(174, 90.0%, 25.2%)',
  primary12: 'hsl(170, 50.0%, 12.5%)',

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.primary12,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral11,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral1,
  /**
   * The default border color.
   */
  border: palette.neutral6,
  /**
   * The main tinting color.
   */
  tint: palette.primary9,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral4,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
  purpleBg: '#3f4381',
  lightBg: '#5d628f',
  orangeBg: '#e46c47',
  redBg: '#ea595e',
  darkRedBg: '#e2374f',
  greenBg: '#07BEB8',
  darkGreenBg: '#00b2aa'
}
