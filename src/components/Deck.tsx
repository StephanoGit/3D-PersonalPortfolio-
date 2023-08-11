import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from './styles.module.css'

const cards = [
  '/src/assets/misc/projects/asteroids.png',
  '/src/assets/misc/projects/first-website.png',
  '/src/assets/misc/projects/kilburnazon-crud.png',
  '/src/assets/misc/projects/marss.png',
  '/src/assets/misc/projects/sts-bootcamp.png',
  '/src/assets/misc/projects/unihack-21.png',
  '/src/assets/misc/projects/unihack-22.png',
  '/src/assets/misc/projects/spotify-api.png',
]

const links = [
  'https://github.com/StephanoGit/AsteroidsGame',
  'https://github.com/StephanoGit/PersonalWebsite',
  '/#',
  'https://github.com/StephanoGit/UoM-1st-Year-Project',
  'https://github.com/StephanoGit/BootcampSTS_website',
  'https://github.com/StephanoGit/UniHack-2021',
  'https://devpost.com/software/moneyonballs',
  'https://github.com/StephanoGit/spotify-api-music-recommendation',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(2000px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = () => {

  const [currentCard, setCurrentCard] = useState(cards.length); // State to track the current card index


  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger){
      gone.add(index);
      setCurrentCard(index);
    } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      console.log(gone)
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        setCurrentCard(cards.length)
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          >
          </animated.div>
        </animated.div>
      ))}
      <div className={styles.bttn}><a href={links[currentCard-1]} target='_blank'>SEE MORE</a></div>
    </>
  )
}

export default Deck