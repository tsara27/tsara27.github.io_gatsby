import Typography from 'typography'

const options = {
  baseFontSize: '16px',
  baseLineHeight: '27px',
  headerFontFamily: [
    'LatoWeb',
    'Helvetica',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: ['Lato', 'Helvetica'],
  bodyWeight: 400,
  headerWeight: 600,
  boldWeight: 700
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
