import { StyleSheet } from 'react-native';
import Color,{Colors} from '~/assets/Theme/Colors';
import { Themes } from './Theme/Themes';

export const styles = (theme:Themes)=> StyleSheet.create({
    scrollView: {
        backgroundColor: Color(Colors.PRIMARYCOLOR,theme),
    }
});