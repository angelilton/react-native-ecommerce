import { Text, StyleSheet, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

type ButtonProps = {
  type: 'default' | 'primary'
  label: string,
  onPress: () => void
}

const Button = ({ label, type = 'default', onPress }: ButtonProps) => {
  const backgroundColor =
    type === 'primary' ? '#2cb9b0' : 'rgba(12, 13, 52,0.05)';
  const color = type === 'primary' ? 'white' : '#2cb9b0';

  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    width: 245,
  },
  label: {
    fontFamily: 'SFProText-Regular',
    fontSize: 15,
    textAlign: 'center'
  },
});

export default Button;
