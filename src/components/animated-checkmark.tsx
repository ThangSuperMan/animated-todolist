import React, { useRef, useState, useEffect } from 'react'
import Animated, {
  useAnimatedProps,
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'

const AnimatedPath = Animated.createAnimatedComponent(Path)

interface Props {
  d: string
  strokeColor: string
  strokeOpacity?: number
  strokeWidth?: number
  progress: Animated.SharedValue<number>
}

const AnimatedCheckmark = (props: Props) => {
  const { d, progress, strokeColor, strokeOpacity, strokeWidth } = props

  const [length, setLength] = useState<number>(0)
  const ref = useRef(null)

  const animatedPathProps = useAnimatedProps(
    () => ({
      strokeDashoffset: length + (length * progress.value)
    })
  )


  return (
    <AnimatedPath
      // @ts-ignore
      onLayout={() => setLength(ref.current.getTotalLength())}
      ref={ref}
      d={d}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      opacity={strokeOpacity}
      strokeLinejoin='round'
      strokeLinecap='round'
      // dahses equals with gaps
      strokeDasharray={[length, length]}
      animatedProps={animatedPathProps}
    />
  )
}

export default AnimatedCheckmark;
