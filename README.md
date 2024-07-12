# vuejs-volatilize-sticker-system

This is a Vue.js component.  
Simple volatilize sticker system.

## Installation

### Using yarn (via GitHub):

```bash
yarn add git+https://github.com/chibi929/vuejs-volatilize-sticker-system.git
```

### Using yarn (via npm):

```bash
yarn add @chibi929/vuejs-volatilize-sticker-system
```

## Usage

```vue
<template>
  <div>
    <StickerSystem
      :useLockedIcon="true"
      :stickerConfig="stickerConfig"
      :receiveStickers="stickers"
      @selectSticker="onSelectSticker"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import type { IStickerConfig, ISendStickerData } from '@chibi929/vuejs-volatilize-sticker-system'
import { StickerSystem } from '@chibi929/vuejs-volatilize-sticker-system'
import '@chibi929/vuejs-volatilize-sticker-system/dist/style.css'

export default Vue.extend({
  components: {
    StickerSystem,
  },
  data() {
    return {
      stickerConfig: {
        filePath: '../../assets/sushi_stickers-min.png',
        srcWidth: 256 * 6,
        srcHeight: 256 * 2,
        gridWidth: 256,
        gridHeight: 256,
        stickers: [
          { stickerId: 'stickerId_00', name: '玉子', gridX: 0, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_01', name: 'イカ', gridX: 1, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_02', name: 'マグロ', gridX: 2, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_03', name: 'サーモン', gridX: 3, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_04', name: 'エビ', gridX: 4, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_05', name: '甘エビ', gridX: 5, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_06', name: 'いくら', gridX: 0, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_07', name: 'タコ', gridX: 1, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_08', name: 'シメサバ', gridX: 2, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_09', name: 'ホタテ', gridX: 3, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_10', name: 'うなぎ', gridX: 4, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_11', name: 'うに', gridX: 5, gridY: 1, unlocked: true },
        ],
      } as IStickerConfig,
      stickers: [] as ISendStickerData[],
    }
  },
  methods: {
    onSelectSticker({ stickerId, senderId }: Pick<ISendStickerData, 'stickerId' | 'senderId'>) {
      const clientMutationId = Math.random().toString(36)
      this.stickers.push({ stickerId, timestamp: Date.now(), clientMutationId, senderId })
      setTimeout(() => {
        this.stickers = this.stickers.filter((s) => s.clientMutationId !== clientMutationId)
      }, 5000)
    },
  },
})
</script>
```

## Usage (with Firebase Realtime Database)

```vue
<template>
  <div>
    <StickerSystem
      :useLockedIcon="true"
      :stickerConfig="stickerConfig"
      :receiveStickers="stickers"
      @selectSticker="onSelectSticker"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  onChildAdded as dbOnChildAdded,
  onChildRemoved as dbOnChildRemoved,
  push as dbPush,
  ref as dbRef,
  remove as dbRemove,
  serverTimestamp as dbServerTimestamp,
} from 'firebase/database'

import type { IStickerConfig, ISendStickerData } from '@chibi929/vuejs-volatilize-sticker-system'
import { StickerSystem } from '@chibi929/vuejs-volatilize-sticker-system'
import '@chibi929/vuejs-volatilize-sticker-system/dist/style.css'

export default Vue.extend({
  components: {
    StickerSystem,
  },
  data() {
    return {
      stickerConfig: {
        filePath: '../../assets/sushi_stickers-min.png',
        srcWidth: 256 * 6,
        srcHeight: 256 * 2,
        gridWidth: 256,
        gridHeight: 256,
        stickers: [
          { stickerId: 'stickerId_00', name: '玉子', gridX: 0, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_01', name: 'イカ', gridX: 1, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_02', name: 'マグロ', gridX: 2, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_03', name: 'サーモン', gridX: 3, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_04', name: 'エビ', gridX: 4, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_05', name: '甘エビ', gridX: 5, gridY: 0, unlocked: true },
          { stickerId: 'stickerId_06', name: 'いくら', gridX: 0, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_07', name: 'タコ', gridX: 1, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_08', name: 'シメサバ', gridX: 2, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_09', name: 'ホタテ', gridX: 3, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_10', name: 'うなぎ', gridX: 4, gridY: 1, unlocked: true },
          { stickerId: 'stickerId_11', name: 'うに', gridX: 5, gridY: 1, unlocked: true },
        ],
      } as IStickerConfig,
      stickers: [] as ISendStickerData[],
    }
  },
  async mounted() {
    const stickersRef = dbRef(database, 'vuejs-volatilize-sticker-system/stickers')
    dbOnChildAdded(stickersRef, (snapshot) => {
      const data = snapshot.val() as ISendStickerData
      const { stickerId, senderId, clientMutationId, timestamp } = data
      this.stickers.push({ stickerId, senderId, clientMutationId, timestamp })
    })
    dbOnChildRemoved(stickersRef, (snapshot) => {
      const data = snapshot.val() as ISendStickerData
      const { clientMutationId } = data
      this.stickers = this.stickers.filter((s) => s.clientMutationId !== clientMutationId)
    })
  },
  methods: {
    onSelectSticker({ stickerId, senderId }: Pick<ISendStickerData, 'stickerId' | 'senderId'>) {
      const stickersRef = dbRef(database, 'vuejs-volatilize-sticker-system/stickers')
      const res = dbPush(stickersRef, {
        stickerId,
        senderId,
        timestamp: dbServerTimestamp(),
        clientMutationId: Math.random().toString(36),
      })
      setTimeout(() => {
        dbRemove(res)
      }, 5000)
    },
  },
})
</script>
```

* However, there is a problem with this sample code.
* If the user closes the browser before removing the data, the data will not be deleted from the Realtime Database.

## Props

| Name | Type | Default |
|:----|:----|:----|
| useLockedIcon | boolean | true |
| stickerSize | "small" \| "medium" \| "lerge" | "medium" |
| stickerConfig | object as IStickerConfig | undefined |
| receiveStickers | object as Array\<ISendStickerData\> | [] |

## Events

| Name | Type |
|:----|:----|
| selectSticker | Pick<ISendStickerData, "stickerId" \| "senderId"> |

## Interfaces

### IStickerConfig

| Name | Type | Description |
|:----|:----|:----|
| filePath | string | Sprite image file path. |
| srcWidth | number | Sprite image width. |
| srcHeight | number | Sprite image height. |
| gridWidth | number | Image width per frame. |
| gridHeight | number | Image height per frame. |
| stickers | object as IStickerData | Image frames. |

### IStickerData

| Name | Type | Description |
|:----|:----|:----|
| stickerId | string | Unique id. |
| name | string | Frame name. |
| gridX | number | GridX of Sprite image. |
| gridY | number | GridY of Sprite image. |
| unlocked | boolean | Available sticker flag. |

### ISendStickerData

| Name | Type | Description |
|:----|:----|:----|
| stickerId | string | Selected sticker ID. (Received from the selectSticker event) |
| senderId | number | The value generated when the StickerSystem is initialized. (Received from the selectSticker event) |
| timestamp | number | Server timestamp is desirabled. |
| clientMutationId | string | Unique value for each request, such as a UUID. |

## Sprite image sample

![Sprite image sample](https://github.com/user-attachments/assets/bae96ff1-1717-4970-ab33-b4a6af816101)

## DEMO

![DEMO](https://github.com/user-attachments/assets/f84b0499-3b0e-491d-b749-3c0c52c475fd)
