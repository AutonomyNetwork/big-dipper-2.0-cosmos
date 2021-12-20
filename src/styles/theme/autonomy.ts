const backgroundDefault = '#882afc';
const surfaceOne = '#FFFFFF';
const surfaceTwo = '#F8F8F8';
const fontOne = '#000000';
const fontTwo = '#414141';
const fontThree = '#777777';
const icon = '#9F9F9F';

/** Custom theme overrides for deuteranopia mode */
export const autonomyThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: icon, // same as custom /general /icons
    },
  },
  palette: {
    type: 'light',
    general: {
      icon,
    },
    primary: {
      main: '#1D86FF',
      contrastText: '#000000',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#E8E8E8',
    text: {
      primary: '#000000',
      secondary: '#414141',
    },
    custom: {
      general: {
        background: backgroundDefault, // same as background default
        surfaceOne, // same as background paper
        surfaceTwo, // striped tables
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#999999',
        highlight: '#1D86FF', // links
      },
      primaryData: {
        one: '#8400CD',
        two: '#A700FC',
        three: '#DA00FD',
        four: '#FF3CFE',
      },
      results: {
        pass: '#005FCC',
        fail: '#CD022D',
      },
      tokenomics: {
        one: '#009FFA',
        two: '#F60239',
        three: '#FF92FD',
      },
      charts: {
        zero: '#6D6D6C',
        one: '#FFDF01',
        two: '#F60239',
        three: '#A40122',
        four: '#009FFA',
        five: '#FF92FD',
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: surfaceTwo, // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: fontTwo, // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree, // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne, // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: fontOne, // font one (?)
        },
      },
    },
  },
};
