import { PropType } from 'vue';

export interface IStickerConfig {
    filePath: string;
    width: number;
    height: number;
    stickers: {
        stickerId: number;
        name: string;
        gridX: number;
        gridY: number;
    }[];
}
export interface IStickerData {
    clientMutationId: string;
    stickerId: number;
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
    displayStickers: {
        type: PropType<IStickerData[]>;
        default: never[];
    };
}, {}, {
    randomId: string;
    showStickerTable: boolean;
}, {
    actualStickerSize(): number;
    hasOwnSticker(): boolean;
    componentStyle(): Record<string, string>;
    stickerButtonStyle(): Record<string, string>;
}, {
    onClick(stickerId: number): void;
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
    displayStickers: {
        type: PropType<IStickerData[]>;
        default: never[];
    };
}>>, {
    stickerSize: string;
    displayStickers: IStickerData[];
}>;
export default _default;
