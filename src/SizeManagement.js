
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 320;
const guidelineBaseHeight = 480;

const isLandscape = () => {
    return height < width ? true : false;
};
const modularWidth = (value) => {
    return isLandscape() ? height * value : width * value;
};
const modularHeight = (value) => {
    return isLandscape() ? width * value : height * value;
};

const scale = ( size ) => (width / guidelineBaseWidth * size);
const modularScale = (size, factor = 0.5) => {
    return ( size + ( scale(size) - size ) * factor );  
};


export { scale, modularScale, modularWidth, modularHeight }
