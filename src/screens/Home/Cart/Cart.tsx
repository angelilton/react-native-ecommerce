import {useRef, useState} from "react";
import {Dimensions, View} from 'react-native'
import {
    PanGestureHandler,
    GestureHandlerRootView,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedGestureHandler,

} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler'
import {Text} from '@components/Text';
import {Button} from '@components/Button';
import Checkout from './Checkout';
import CartItem from "./CartItem";

const {width} = Dimensions.get('window');
const aspectRatio = width / 375;
const borderRadii = 75

const defaultItems = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}];

const Cart = () => {
    const {colors, border, sizes} = useTheme();
    const [items, setItems] = useState(defaultItems);

    const translateY = useSharedValue(1);

    const opacity = useSharedValue(1);

    const onGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        {
            x: number;
            y: number
        }
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
        display: !!opacity.value ? 'flex' : 'none'
    }));

    const check2 = useAnimatedStyle(() => ({
        opacity: opacity.value === 1 ? 0 : 1
    }));

    const scrollRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: colors.secondary}}>

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
                        bottom: 0,
                        left: 0,
                        right: 0,
                        justifyContent: 'flex-end'
                    }}
                >
                    <ScrollView
                        ref={scrollRef}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {items.map((item) => <CartItem key={item.id}/>)}
                    </ScrollView>
                    <PanGestureHandler simultaneousHandlers={scrollRef} onGestureEvent={onGestureEvent}>
                        <Animated.View>
                            <IndictorBar/>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            </Animated.View>
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
                <Animated.View style={check2}>
                    <Checkout/>
                </Animated.View>
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

const IndictorBar = styled.View`
  height: ${5 * aspectRatio}px;
  width: ${60 * aspectRatio}px;
  border-radius: ${2.5 * aspectRatio}px;
  align-self: center;
  margin-top: ${({theme}) => theme.sizes.medium};
  margin-bottom: ${({theme}) => theme.sizes.medium};
  background-color: ${({theme}) => theme.colors.background2};
`;

export default Cart
