import plugin from 'tailwindcss/plugin';

// ref: https://css-tricks.com/the-shapes-of-css/

const arrowsPlugin = plugin(function ({ addComponents }) {
  addComponents({
    '.arrow': {
      border: 'solid black',
      borderWidth: '0 3px 3px 0',
      display: 'inline-block',
      padding: '3px',
      marginLeft: '5px',
    },
    '.arrow-up': {
      transform: 'rotate(-135deg)',
    },
    '.arrow-right': {
      transform: 'rotate(-45deg)',
    },
    '.arrow-down': {
      transform: 'rotate(45deg)',
    },
    '.arrow-left': {
      transform: 'rotate(135deg)',
    },
  });
});

export default arrowsPlugin;
