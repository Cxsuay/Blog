import DefaultTheme from 'vitepress/theme';
import './custom.styl';

// figlet -f big "Cxsuay"
console.log(`
 _____
/ ____|
| |   __  __ __ _   _  __ _ _   _
| |   \\ \\/ \/ __| | | |/ _\` | | | |
| |____>  <\\__ \\ |_| | (_| | |_| |
\\_____\/_\/\\_\\___\/\\__,_|\\__,_|\\__, |
                             __/ |
                            |___/
`);
console.log(`%c微信/微博, 可添加：%cCxsuay`, 'color: red', 'color: #42b983');
export default DefaultTheme