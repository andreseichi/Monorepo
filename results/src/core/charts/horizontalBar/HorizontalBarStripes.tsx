import React, { memo } from 'react'
import { useTheme } from 'styled-components'

const HorizontalBarStripes = ({
    bars,
    width,
    yScale,
    role
}: {
    bars: Array<any>
    width?: any
    yScale?: any
    role?: string
}) => {
    const theme = useTheme()

    const step = yScale.step()

    return bars.map((bar, i) => {
        if (i % 2 !== 0) return null

        return (
            <rect
                role={role}
                key={bar.key}
                y={bar.y + bar.height / 2 - step / 2}
                width={width}
                height={step}
                fill={theme.colors.backgroundAlt}
            />
        )
    })
}

export default memo(HorizontalBarStripes)
