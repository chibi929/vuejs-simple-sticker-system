declare const _default: import('vue').DefineComponent<{
    src: {
        type: StringConstructor;
        required: true;
    };
    srcWidth: {
        type: NumberConstructor;
        required: true;
    };
    srcHeight: {
        type: NumberConstructor;
        required: true;
    };
    gridX: {
        type: NumberConstructor;
        required: true;
    };
    gridY: {
        type: NumberConstructor;
        required: true;
    };
    gridWidth: {
        type: NumberConstructor;
        required: true;
    };
    gridHeight: {
        type: NumberConstructor;
        required: true;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    locked: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, {}, {
    stickerStyles(): Record<string, string>;
}, {
    onClickSticker(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, Readonly<import('vue').ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    srcWidth: {
        type: NumberConstructor;
        required: true;
    };
    srcHeight: {
        type: NumberConstructor;
        required: true;
    };
    gridX: {
        type: NumberConstructor;
        required: true;
    };
    gridY: {
        type: NumberConstructor;
        required: true;
    };
    gridWidth: {
        type: NumberConstructor;
        required: true;
    };
    gridHeight: {
        type: NumberConstructor;
        required: true;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    locked: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    scale: number;
    position: string;
    locked: boolean;
}>;
export default _default;
