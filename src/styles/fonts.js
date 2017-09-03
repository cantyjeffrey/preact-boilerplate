import { fontFace } from 'polished';
import { injectGlobal } from 'styled-components';

const fonts = [
	{
		family: 'CircularPro',
		path: '../assets/fonts/CircularPro-Book',
		formats: ['woff2', 'woff', 'ttf', 'eot', 'svg'],
		weight: 400
	},
	{
		family: 'CircularPro',
		path: '../assets/fonts/CircularPro-Medium',
		formats: ['woff2', 'woff', 'ttf', 'eot', 'svg'],
		weight: 500
	},
	{
		family: 'CircularPro',
		path: '../assets/fonts/CircularPro-Bold',
		formats: ['woff2', 'woff', 'ttf', 'eot', 'svg'],
		weight: 600
	}
];

fonts.map(
	({ family, path, formats, weight }) =>
		injectGlobal`${fontFace({
			fontFamily: family,
			fontFilePath: path,
			fileFormats: formats,
			fontWeight: weight
		})}`
);
