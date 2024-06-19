import { PropType } from 'vue';

interface IStickerData {
    stickerId: string;
    name: string;
    gridX: number;
    gridY: number;
    unlocked: boolean;
}
export interface IStickerConfig {
    filePath: string;
    width: number;
    height: number;
    stickers: IStickerData[];
}
export interface ISendStickerData {
    clientMutationId: string;
    stickerId: string;
    timestamp: number;
    senderId: string;
}
declare const _default: import('vue').DefineComponent<{
    stickerSize: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    stickerConfig: {
        type: PropType<IStickerConfig>;
        required: true;
    };
    receiveStickers: {
        type: PropType<ISendStickerData[]>;
        default: never[];
    };
}, {}, {
    randomId: string;
    showStickerTable: boolean;
}, {
    optimizedStickers(): Record<string, IStickerData>;
    actualStickerSize(): number;
    hasOwnSticker(): boolean;
    componentStyle(): Record<string, string>;
    stickerButtonStyle(): Record<string, string>;
}, {
    onClick(stickerId: string): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    stickerSize: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    stickerConfig: {
        type: PropType<IStickerConfig>;
        required: true;
    };
    receiveStickers: {
        type: PropType<ISendStickerData[]>;
        default: never[];
    };
}>>, {
    stickerSize: string;
    receiveStickers: ISendStickerData[];
}>;
export default _default;
