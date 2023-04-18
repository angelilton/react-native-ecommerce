import {  View, Image, StyleSheet, Dimensions } from 'react-native';
import { Text } from '@components/index'

type SLidProps = {
  label: string;
  picture: any;
  right?: boolean;
};

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const BORDER_RADIUS = 75;

const Slide = ({ label, right, picture }: SLidProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.underlay}>
            <Image source={picture} style={styles.picture} />
          </View>
        </View>
        <View style={[styles.TitleContainer, { transform }]}>
          <Text type={'hero'}>{label}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: width - 5,
    height: SLIDE_HEIGHT,
    opacity: 0.7,
    borderBottomRightRadius: BORDER_RADIUS,
    zIndex: 80,
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    objectFit: 'cover',
    borderBottomRightRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    zIndex: 50
  },
  TitleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    zIndex: 100,
  },
});

export default Slide
