import { spacing } from "./spacing"

const spacingGenerator = <T extends string>(
  key: T,
): Record<keyof typeof spacing, {[k:string]: number}> => {
  return {
    micro: {
        [key]: spacing.micro,
      },
      tiny: {
        [key]: spacing.tiny,
      },
      extraSmall: {
        [key]: spacing.extraSmall,
      },
      small: {
        [key]: spacing.small,
      },
      medium: {
        [key]: spacing.medium,
      },
      large: {
        [key]: spacing.large,
      },
      extraLarge: {
        [key]: spacing.extraLarge,
      },
      huge: {
        [key]: spacing.huge,
      },
      massive: {
        [key]: spacing.massive,
      },
      borderRadius: {
        [key]: spacing.borderRadius,
      },
  }
}
export const marginX = spacingGenerator("marginHorizontal");
export const marginY = spacingGenerator("marginVertical");
export const marginT = spacingGenerator("marginTop");
export const marginB = spacingGenerator("marginBottom");
export const margin = spacingGenerator("margin");
export const marginL = spacingGenerator("marginLeft");
export const marginR = spacingGenerator("marginRight");
export const paddingY = spacingGenerator("paddingVertical");
export const paddingX = spacingGenerator("paddingHorizontal");
export const paddingL = spacingGenerator("paddingLeft");
export const paddingR = spacingGenerator("paddingRight");
export const padding = spacingGenerator("padding");
export const paddingT = spacingGenerator("paddingTop");
export const paddingB = spacingGenerator("paddingBottom");

