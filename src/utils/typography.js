import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
import stowLakeTheme from 'typography-theme-stow-lake';
import grandViewTheme from 'typography-theme-grand-view';
import kirkham from 'typography-theme-kirkham';

const typography = new Typography(kirkham);

// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     'Avenir Next',
//     'Helvetica Neue',
//     'Segoe UI',
//     'Helvetica',
//     'Arial',
//     'sans-serif',
//   ],
//   bodyFontFamily: ['Georgia', 'serif'],
// });

// const typography = new Typography(funstonTheme);

export default typography;
