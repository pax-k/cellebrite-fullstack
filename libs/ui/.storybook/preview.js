import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from '@cellebrite/data';
import CssBaseline from '@material-ui/core/CssBaseline';

addDecorator((story) => ( <
    >
    <
    CssBaseline / >
    <
    ThemeProvider theme = { muiTheme } > { story() } < /ThemeProvider> <
    />
));

addDecorator(withKnobs);