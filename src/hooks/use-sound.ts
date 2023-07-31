import { useState, useEffect } from 'react'

const useSound = (soundUrl: string) => {
    const [isHovered, setIsHovered] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)
    const [audio, setAudio] = useState(new Audio(soundUrl))

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        const playSound = () => {
            if (hasInteracted && soundUrl !== null) {
                audio.play()
            }
        }

        const handleMouseEnter = () => {
            setHasInteracted(true)
            playSound()
        }

        const handleMouseLeave = () => {
            setHasInteracted(false)
            audio.pause()
            audio.currentTime = 0
        }

        if (isHovered) {
            playSound()
        }

        return () => {
            audio.pause()
            audio.currentTime = 0
        }
    }, [isHovered, soundUrl, hasInteracted, audio])

    return [handleMouseEnter, handleMouseLeave]
}

export default useSound
