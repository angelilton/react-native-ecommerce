import { Button, Text } from '@components/index';
import styled, { css } from 'styled-components/native';

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
    <Container center>
      <Text type={'subtitle'}>{subtitle}</Text>
      <Text type={'description'}>{description}</Text>
      <Button
        {...{ onPress }}
        label={isLast ? "let's get started" : 'Next'}
        type={isLast ? 'primary' : 'default'}
      />
    </Container>
  );
};



type ContainerProps = {
  center?: Boolean
}

const FlexCenter = css`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View<ContainerProps>`
  ${({ theme, center }: any) => css`
    gap: ${theme.spacing.l};
    border-top-left-radius: ${theme.border.xl};
    ${center && FlexCenter}
  `}
`;

export default SubSlide
