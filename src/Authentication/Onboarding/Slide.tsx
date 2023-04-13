import { Text, View, StyleSheet, Dimensions } from 'react-native';

type SLidProps = {
  label: string
  right?: boolean
}

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ label, right }: SLidProps) => {
  
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  
  return (
    <View style={styles.container}>
      <View style={[styles.TitleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  TitleContainer: {
    height: 100,
    justifyContent: 'center'
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    // fontFamily: 'SFProText-Bold',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
});

export default Slide
