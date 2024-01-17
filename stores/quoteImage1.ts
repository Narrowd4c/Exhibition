import { defineStore } from 'pinia'
import player1 from '../../assets/images/player/1.jpg'
import player2 from '../../assets/images/player/2.jpg'
import player3 from '../../assets/images/player/3.jpg'
import player4 from '../../assets/images/player/4.jpg'
import player5 from '../../assets/images/player/5.jpg'
import player6 from '../../assets/images/player/6.jpg'
import player7 from '../../assets/images/player/7.jpg'
import player8 from '../../assets/images/player/8.jpg'
import player9 from '../../assets/images/player/9.jpg'
import player10 from '../../assets/images/player/10.jpg'
import player11 from '../../assets/images/player/11.jpg'
import player12 from '../../assets/images/player/12.jpg'
import player13 from '../../assets/images/player/13.jpg'
import player15 from '../../assets/images/player/15.jpg'
import player16 from '../../assets/images/player/16.jpg'
import player17 from '../../assets/images/player/17.jpg'
import player18 from '../../assets/images/player/18.jpg'
import player19 from '../../assets/images/player/19.jpg'
import player20 from '../../assets/images/player/20.jpg'
import player21 from '../../assets/images/player/21.jpg'
import player22 from '../../assets/images/player/22.jpg'

export const useQuoteImage1Store = defineStore('quoteImage1', () => {
    const images = [
        player1,
        player2,
        player3,
        player4,
        player5,
        player6,
        player7,
        player8,
        player9,
        player10,
        player11,
        player12,
        player13,
        player15,
        player16,
        player17,
        player18,
        player19,
        player20,
        player21,
        player22,
    ]

    return { images }
})
