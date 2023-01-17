import React, { useState, useRef, useLayoutEffect } from "react"
import { ICarouselProps } from "@/interfaces/ICarouselProps"
import styles from "../styles/Carousel.module.scss"

export const Carousel = (props: ICarouselProps): JSX.Element => {
    
    const carouselContentRef = useRef<HTMLInputElement>(null);
    const { showArrows, showIndicators, children } = props
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [touchPosition, setTouchPosition] = useState<number | null>(null) 
    const [visibleItems, setVisibleItems] = useState<number>(0)
    
    useLayoutEffect(()=>{
        if (carouselContentRef.current != null) {
            setVisibleItems(carouselContentRef.current.offsetWidth / carouselContentRef.current.firstChild.offsetWidth)
        }
        
    }, [])
    
    const nextItem = () => {
        if (currentIndex < React.Children.count(children) - 1) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const previousItem = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        // Save the first position of the touch
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        // Get initial location
        const touchDown = touchPosition
    
        // Proceed only if the initial position is not null
        if (touchDown === null) {
          return
        }
    
        // Get current position
        const currentTouch = e.touches[0].clientX
    
        // Get the difference between previous and current position
        const diff = touchDown - currentTouch
    
        // Go to next item
        if (diff > 5) {
          nextItem()
        }
    
        // Go to previous item
        if (diff < -5) {
          previousItem()
        }
    
        // Reset initial touch position
        setTouchPosition(null)
    }

    const handleClick =()=>{
        //alert(carouselContentRef.current.children[1].offsetWidth)
        //if (carouselContentRef.current)
        alert(visibleItems)
    }
    
    return (
        <div className={styles.carousel}>
            <div className={styles.carouselWrapper}>
                <button onClick={previousItem}  className={styles.leftArrowButton}>
                    <span className={styles.leftArrow}>&#8249;</span>
                </button>
                <div 
                    className={styles.carouselContentWrapper} 
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div 
                        className={styles.carouselContent}
                        ref={carouselContentRef}
                        /* style={{ transform: `translateX(-${currentIndex * 100}%)` }} */
                    >
                        {props.children}
                    </div>
                </div>
                <button onClick={nextItem} className={styles.rightArrowButton}>
                    <span className={styles.rightArrow}>&#8250;</span>
                </button>
            </div>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}