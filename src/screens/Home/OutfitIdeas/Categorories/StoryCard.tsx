import { Text } from '@components/Text';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

type StoryCardProps = {
  id: string
  title: string
  color: string
}

const OUTER_RADIUS = 34;
const INNER_RADIUS = 30;


export default function StoryCard({ title, color }: StoryCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container>
      <Pressable
        onPress={() => setIsClicked((prev) => !prev)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          transform: [{ scale: pressed ? 0.9 : 1 }],
        })}
      >
        <View
          style={{
            width: OUTER_RADIUS * 2,
            height: OUTER_RADIUS * 2,
            borderRadius: OUTER_RADIUS,
            borderColor: color,
            borderWidth: isClicked ? 1 : 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor: color,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
      </Pressable>
      <Text type='description'>{title}</Text>
    </Container>
  );
}

const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    margin-left: ${theme.spacing.s};
    gap: ${theme.spacing.s};
    padding-vertical: ${theme.spacing.m};
    padding-horizontal: ${theme.border.s};
  `}
`;
