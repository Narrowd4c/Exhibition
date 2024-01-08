import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Quote {
    id?: number
    sequence: number
    player: string
    piece: string
}

export const useQuote1Store = defineStore('quote1', () => {
    const player = ref<Quote[]>([
        {
            id: 1021002,
            sequence: 1,
            player: 'X家豪',
            piece: '貝多芬奏鳴曲悲愴第三樂章',
        },
        {
            id: 1090909,
            sequence: 2,
            player: '歐宇X',
            piece: '灌籃高手主題曲',
        },
        {
            id: 1090909,
            sequence: 3,
            player: '郭X萱',
            piece: '屋頂的鴿子',
        },
        {
            id: 1080502,
            sequence: 4,
            player: '王芷X',
            piece: 'River flows in you',
        },
        {
            id: 1080502,
            sequence: 5,
            player: '林宇X',
            piece: '總是一次又一次',
        },
        {
            id: 1091125,
            sequence: 6,
            player: '蕭X芯',
            piece: '冰上圓舞曲',
        },
        {
            id: 1110915,
            sequence: 7,
            player: '許育X',
            piece: '可愛小朋友',
        },
        {
            id: 1111020,
            sequence: 8,
            player: '林X安',
            piece: '河馬鋼琴家 & 聖誕鈴聲',
        },
        {
            id: 1121025,
            sequence: 9,
            player: '莊X豪',
            piece: '印地安男孩 & 清晨之歌',
        },
        {
            id: 1120901,
            sequence: 10,
            player: '易X天',
            piece: '小蜜蜂 & 小星星',
        },
        {
            id: 1120515,
            sequence: 11,
            player: '陳于X',
            piece: '動物村運動會',
        },
        {
            id: 1111105,
            sequence: 12,
            player: '周柏X',
            piece: '泡泡',
        },
        {
            id: 1110210,
            sequence: 13,
            player: '柯X崴',
            piece: 'Fly me to the moon',
        },
        {
            id: 1070704,
            sequence: 15,
            player: '賴孟X',
            piece: 'Flower',
        },
        {
            id: 1111215,
            sequence: 16,
            player: '曾思X',
            piece: '載著你',
        },
        {
            id: 1050408,
            sequence: 17,
            player: '黃X瑜',
            piece: '起風了',
        },
        {
            id: 1080404,
            sequence: 18,
            player: '顏X雯',
            piece: '大風暴',
        },
        {
            id: 1120202,
            sequence: 19,
            player: '林宥X',
            piece: '美女與野獸',
        },
        {
            id: 1080404,
            sequence: 20,
            player: '黃X賢',
            piece: '冰上圓舞曲',
        },
        {
            id: 1111130,
            sequence: 21,
            player: '卓X傑',
            piece: '叢林的鼓聲 & 俄國水手',
        },

        {
            id: 1111130,
            sequence: 22,
            player: '吳亞X',
            piece: '卡農',
        },
        {
            id: 1110909,
            sequence: 23,
            player: '林X家',
            piece: '龍貓',
        },
        {
            id: 1090914,
            sequence: 24,
            player: '黃X翔',
            piece: '紅蓮華',
        },
        {
            id: 1090508,
            sequence: 25,
            player: '薛宥X',
            piece: '小奏鳴曲',
        },
        {
            sequence: 26,
            player: '林宥X',
            piece: '載著你',
        },
        {
            id: 1021102,
            sequence: 27,
            player: '汪X信',
            piece: '乘著歌聲的翅膀',
        },
    ])
    return { player }
})
