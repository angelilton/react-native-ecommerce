import {Dimensions, View} from 'react-native'
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedGestureHandler,

} from 'react-native-reanimated';
import {Text} from '@components/Text';
import {Button} from '@components/Button';
import Checkout from './Checkout';


const {width} = Dimensions.get('window');
const aspectRatio = width / 375;

const CartContainer = () => {
    const {colors, border, sizes} = useTheme();


    const translateY = useSharedValue(1);

    const opacity = useSharedValue(1);

    const onGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { x: number; y: number }
    >({
        onStart: (event, ctx) => {
            ctx.y = translateY.value;
        },
        onActive: (event, ctx) => {
            opacity.value = ctx.y > 0.25 ? ctx.y - 0.25 : ctx.y + 0.25;
            translateY.value = ctx.y > 0.25 ? ctx.y - 0.25 : ctx.y + 0.25;
        },
        onEnd: (event, ctx) => {
            opacity.value = ctx.y <= 0.25 ? 1 : 0;
            translateY.value = ctx.y <= 0.25 ? 1 : 0.25;
        }

    });

    const style = useAnimatedStyle(() => ({
        flex: withSpring(translateY.value),
    }));

    const CheckoutStyles = useAnimatedStyle(() => ({
        flex: withSpring(translateY.value === 1 ? 0.20 : 1),
    }));

    const check = useAnimatedStyle(() => ({
        opacity: withSpring(opacity.value),
        display: opacity.value ? 'flex' : 'none',
    }));

    return (
        <View style={{flex: 1, backgroundColor: colors.secondary}}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        {
                            backgroundColor: 'white',
                            borderBottomLeftRadius: border.nxl,
                            borderBottomRightRadius: border.nxl,
                        },
                        style,
                    ]}
                >
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: border.nxl,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                height: 5 * aspectRatio,
                                backgroundColor: colors.background2,
                                width: 60 * aspectRatio,
                                borderRadius: 2.5 * aspectRatio,
                                marginBottom: sizes.nMedium,
                            }}
                        />
                    </View>
                </Animated.View>
            </PanGestureHandler>
            <Animated.View
                style={[
                    {
                        marginTop: sizes.nMedium,
                    },
                    CheckoutStyles,
                ]}
            >
                <Animated.View style={check}>
                    <BoxPrice>
                        <View>
                            <Text type='info'>Total Payment</Text>
                            <Text type='subtitle' style={{color: colors.background}}>
                                $2.023
                            </Text>
                        </View>
                        <View>
                            <Button
                                type='primary'
                                label='Go to Checkout'
                                onPress={() => {
                                    (translateY.value = 0.25)
                                    opacity.value = 0
                                }}
                                style={{width: width / 2}}
                            />
                        </View>
                    </BoxPrice>
                </Animated.View>
                <Checkout/>
            </Animated.View>
        </View>
    );
}

const BoxPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.spacing.m};
`;

export default CartContainer
