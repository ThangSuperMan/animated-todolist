import React, { useEffect, useState } from 'react'
import Animated, { withTiming, withSequence, withDelay, useSharedValue, useAnimatedStyle, interpolateColor, Easing, useAnimatedProps } from 'react-native-reanimated'
import { Text, useColorModeValue, Box, } from 'native-base'

interface Props {
  checked?: boolean
  subject: string
  textColor: string
  hightLightTextColor: string
}

const HStackOffset = Animated.createAnimatedComponent(Box)
const AnimatedHSTack = Animated.createAnimatedComponent(Text)

const easing = Easing.out(Easing.quad)

const AnimatedTaskLabel = (props: Props) => {
  const { checked, subject, textColor, hightLightTextColor } = props
  const colorDarkMode = useColorModeValue(textColor, '#ffffff')
  const [heightParentBox, setHeightParentBox] = useState<number>(0)

  const strikethrough = useSharedValue(0)
  const HStackoffsetProgress = useSharedValue(0)
  const HSTackOffsetProps = useAnimatedProps(
    () => ({
      width: `${strikethrough.value}%`,
      backgroundColor: interpolateColor(HStackoffsetProgress.value, [0, 1], [colorDarkMode, hightLightTextColor], 'RGB')
    }),
    [colorDarkMode, hightLightTextColor]
  )

  const textColorProgress = useSharedValue(0)
  const animatedTextColorStyles = useAnimatedProps(
    () => ({
      color: interpolateColor(textColorProgress.value, [0, 1], [colorDarkMode, hightLightTextColor], 'RGB')
    }),
    [colorDarkMode, hightLightTextColor]
  )

  const HStackAnimatedProgress = useSharedValue(0)
  const animatedHStackStyles = useAnimatedStyle(
    () => ({
      transform: [{ translateX: HStackAnimatedProgress.value }]
    })
  )

  useEffect(() => {
    HStackAnimatedProgress.value = withSequence(
      withTiming(checked ? 10 : 0,
        { duration: 400, easing }),
      withTiming(0,
        { duration: 400, easing }
      )
    )

    strikethrough.value = withTiming(checked ? 100 : 0,
      { duration: 400, easing }
    )

    HStackAnimatedProgress.value = withDelay(1000, withTiming(checked ? 1 : 0,
      { duration: 400, easing }
    ))

    HStackoffsetProgress.value = withDelay(checked ? 1000 : 0, withTiming(checked ? 1 : 0,
      { duration: 400, easing }))

    textColorProgress.value = withDelay(checked ? 1000 : 0, withTiming(checked ? 1 : 0,
      { duration: 400 }))
  }, [checked])

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout
    setHeightParentBox(height)
  }

  return (
    <Box onLayout={onLayout}>
      <AnimatedHSTack
        isTruncated={true}
        style={[animatedHStackStyles]}
        // @ts-ignore
        animatedProps={animatedTextColorStyles}
      >
        <Text
          fontSize='16'
        >
          {subject}
        </Text>
      </AnimatedHSTack>
      <HStackOffset
        position='absolute'
        top={(heightParentBox / 2)}
        left='0'
        height={1 / 2}
        // @ts-ignore
        animatedProps={HSTackOffsetProps}
      >
      </HStackOffset>
    </Box>
  )
}

export default AnimatedTaskLabel
