import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                bubblegum: ['Bubblegum-Sans', 'cursive'],
                patrickHand: ['Patrick-Hand', 'sans-serif'],
                jost: ['Jost-Hand', 'sans-serif'],
            },
            backgroundImage: {
                'graph-light': "url('./images/decorations/graph-light.png')", 
                'graph-dark': "url('./images/decorations/graph-dark.png')",
                'flare-light': "url('./images/decorations/flare-strip-light.png')",
            },
            backgroundSize: {
                '1000px' : '1000px',
            }
        },
    },

    plugins: [forms],
};
