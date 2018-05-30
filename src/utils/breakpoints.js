export const SIZES_TYPES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export const SIZES = {
  [SIZES_TYPES.SMALL]: '420px',
  [SIZES_TYPES.MEDIUM]: '720px',
  [SIZES_TYPES.LARGE]: '1000px',
};

export const below = (breakpoint) => {
  if (!SIZES[breakpoint]) return '';

  return `(max-width: ${SIZES[breakpoint]})`;
};
