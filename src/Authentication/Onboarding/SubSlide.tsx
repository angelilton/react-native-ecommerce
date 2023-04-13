import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated'
import { BORDER_RADIUS } from './Onboarding';
import { Button } from '../../components';

export type subSlideProps = {
  description: string
  subtitle: string
  isLast?: boolean
  onPress: () => void
 
}

const SubSlide = ({
  subtitle,
  description,
  isLast,
  onPress,
}: subSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        {...{onPress}}
        label={isLast ? "let's get started" : 'Next'}
        type={isLast ? 'primary' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  subtitle: {
    // fontFamily: 'SFProText-Semibold',
    textTransform: 'capitalize',
    fontWeight: '500',
    fontSize: 24,
    color: '#0c0d34',
  },
  description: {
    // fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#0c0d34',
    marginBottom: 25
  },
});

export default SubSlide
