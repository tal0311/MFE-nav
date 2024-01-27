import {svgService} from 'https://cdn.jsdelivr.net/gh/tal0311/svg-cdn/svg.service.js';

const svgIcon = ({ iconName }) => {
 const svg = svgService.getSvg(iconName);
 return (
  <i dangerouslySetInnerHTML={{ __html: svg }} ></i>
 );
}

export default svgIcon;
