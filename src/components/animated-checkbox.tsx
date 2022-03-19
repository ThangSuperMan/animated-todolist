import React, { useEffect } from 'react'
import colors from '../../styles/colors'
import Animated,
{
  withTiming,
  useSharedValue,
  useAnimatedProps,
  Easing,
  interpolateColor,
} from 'react-native-reanimated'
import Svg, { Rect, G, ClipPath } from 'react-native-svg'
import AnimatedCheckmark from './animated-checkmark'

//<svg width="71" height="66" viewBox="0 0 71 66" fill="none" xmlns="http://www.w3.org/2000/svg">
//<rect
//x="0.5" y="2.5" width="63" height="63" rx="14.5" stroke="black" />
//<path d="M70 1.5C56 -1 27 48.5944 28 46.0944C26.4 43.2944 22.5 38 19.5 36.5" stroke="black" />

const MARGIN = 10
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;

const AnimatedRect = Animated.createAnimatedComponent(Rect)

const easing = Easing.linear
const d = "M70 1.5C56 -1 27 48.5944 28 46.0944C26.4 43.2944 22.5 38 19.5 36.5"

interface Props {
  id?: number
  checked?: boolean
  handleToggleCheckbox?: () => void
}

const AnimatedCheckbox = React.memo((props: Props) => {
  const { checked } = props
  const progress = useSharedValue(0)

  const animatedRectProps = useAnimatedProps(
    () => ({
      fill: interpolateColor(
        progress.value,
        [0, 1],
        [colors.fillCheckboxColor, colors.highlightColor],
        'RGB'
      ),
      stroke: interpolateColor(
        progress.value,
        [0, 1],
        [colors.outlineBoxColor, colors.highlightColor],
        'RGB'
      ),
    }),
    [colors.outlineBoxColor, colors.fillCheckboxColor, colors.highlightColor]
  )

  useEffect(() => {
    progress.value = withTiming(
      checked ? 1 : 0,
      { duration: checked ? 300 : 100, easing }
    )
  }, [checked])

  return (
    <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')} >
      <ClipPath id='myClipPath'>
        <Rect width="64" height="64" rx="14.5" stroke="black" />
      </ClipPath>
      <AnimatedCheckmark d={d}
        strokeOpacity={checked ? 1 : 0}
        progress={progress}
        strokeColor={colors.highlightColor}
        strokeWidth={7}
      />
      <G clipPath='url(#myClipPath)'>
        <AnimatedRect
          width='64'
          height='64'
          strokeLinejoin='round'
          strokeLinecap='round'
          strokeWidth={7}
          rx='14.5'
          animatedProps={animatedRectProps}
        />
        <AnimatedCheckmark d={d} progress={progress} strokeWidth={5} strokeColor='#ffffff' />
      </G>
    </Svg>
  )
})

//<AnimatedCheckmark d={d} checked={checked} progress={progress} strokeColor='black' />
export default AnimatedCheckbox;
