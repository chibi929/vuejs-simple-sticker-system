const l = {
  props: {
    src: {
      type: String,
      required: !0
    },
    gridX: {
      type: Number,
      required: !0
    },
    gridY: {
      type: Number,
      required: !0
    },
    gridWidth: {
      type: Number,
      required: !0
    },
    gridHeight: {
      type: Number,
      required: !0
    },
    scale: {
      type: Number,
      default: 1
    },
    position: {
      type: String,
      default: "left",
      validator: (g) => ["left", "right"].includes(g)
    },
    locked: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    stickerStyles() {
      return {
        "--src": `url(${this.src})`,
        "--offsetX": `-${this.gridX * this.gridWidth * this.scale}px`,
        "--offsetY": `-${this.gridY * this.gridHeight * this.scale}px`,
        "--gridWidth": `${this.gridWidth * this.scale}px`,
        "--gridHeight": `${this.gridHeight * this.scale}px`,
        "justify-content": this.position
      };
    }
  },
  methods: {
    onClickSticker() {
      this.locked || this.$emit("click");
    }
  }
}, c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAA12aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjBmNDQ3N2U1LTExYTctNDY4Zi1hYzRjLWFlZTE3YThlZWY2ZiIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxZmIxNWFkMC01M2MwLTQyM2UtYWE4ZC05Nzc1NWQ3MGYwMmIiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZmRmNDU4YS0zOGMzLTQ0MmEtYTljMC03MGE3NDg2ZTc5NzQiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTcxODc1NzcxNjkzMjEwOCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjM2IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNDowNjoxOVQwOTo0MTo1NiswOTowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjQ6MDY6MTlUMDk6NDE6NTYrMDk6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMGM4Zjk2Ni02MTI1LTQxODktYWRjMi02NzE1YzU4ODBlN2MiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDYtMTlUMDk6NDE6NTYiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+SwFz7AAAAM56VFh0UmF3IHByb2ZpbGUgdHlwZSBleGlmAAB42m1RQRLDIAi8+4o+AVli4DmmSWf6gz6/GEwb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";
function t(g, A, C, I, r, i, h, m) {
  var e = typeof g == "function" ? g.options : g;
  return A && (e.render = A, e.staticRenderFns = C, e._compiled = !0), i && (e._scopeId = "data-v-" + i), {
    exports: g,
    options: e
  };
}
var s = function() {
  var A = this, C = A._self._c;
  return C("div", { staticClass: "sticker-component", style: A.stickerStyles }, [C("div", { staticClass: "css-sprite", on: { click: A.onClickSticker } }, [A.locked ? C("img", { staticClass: "lock", attrs: { src: c, alt: "Locked" } }) : A._e()])]);
}, n = [], d = /* @__PURE__ */ t(
  l,
  s,
  n,
  !1,
  null,
  "3ecfaa80"
);
const o = d.exports, y = {
  components: { Sticker: o },
  props: {
    useLockedIcon: {
      type: Boolean,
      default: !0
    },
    stickerSize: {
      type: String,
      default: "medium",
      validator: (g) => ["small", "medium", "lerge"].includes(g)
    },
    stickerConfig: {
      type: Object,
      required: !0
    },
    receiveStickers: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      randomId: Math.random().toString(36).slice(-8),
      showStickerTable: !1
    };
  },
  computed: {
    optimizedStickers() {
      return this.stickerConfig.stickers.reduce((g, A) => (g[`${A.stickerId}`] = A, g), {});
    },
    actualStickerSize() {
      if (window.innerWidth < window.innerHeight) {
        if (this.stickerSize === "lerge")
          return window.innerWidth / 2;
        if (this.stickerSize === "medium")
          return window.innerWidth / 3;
        if (this.stickerSize === "small")
          return window.innerWidth / 4;
      } else {
        if (this.stickerSize === "lerge")
          return 256;
        if (this.stickerSize === "medium")
          return 128;
        if (this.stickerSize === "small")
          return 64;
      }
      return 128;
    },
    hasOwnSticker() {
      return this.receiveStickers.some((g) => g.senderId === this.randomId);
    },
    componentStyle() {
      return {
        "--actual-sticker-size": `${this.actualStickerSize}px`
      };
    },
    stickerButtonStyle() {
      return {
        bottom: this.showStickerTable ? "calc(var(--actual-sticker-size) * 1.75)" : "0px"
      };
    }
  },
  methods: {
    onClick(g) {
      this.showStickerTable = !1, this.$emit("selectSticker", { stickerId: g, senderId: this.randomId });
    }
  }
};
var k = function() {
  var A = this, C = A._self._c;
  return C("div", { staticClass: "sticker-system-component", style: A.componentStyle }, [A.showStickerTable ? C("div", { staticClass: "background", on: { click: function(I) {
    A.showStickerTable = !1;
  } } }) : A._e(), A._l(A.receiveStickers, function(I) {
    return C("Sticker", { key: I.clientMutationId, attrs: { src: A.stickerConfig.filePath, gridX: A.optimizedStickers[I.stickerId].gridX, gridY: A.optimizedStickers[I.stickerId].gridY, gridWidth: A.stickerConfig.width, gridHeight: A.stickerConfig.height, scale: A.actualStickerSize / A.stickerConfig.width, position: A.randomId === I.senderId ? "right" : "left" } });
  }), C("button", { staticClass: "sticker-button", style: A.stickerButtonStyle, attrs: { type: "button", disabled: A.hasOwnSticker }, on: { click: function(I) {
    A.showStickerTable = !A.showStickerTable;
  } } }, [A._v(" " + A._s(A.showStickerTable ? "閉じる" : "スタンプ") + " ")]), A.showStickerTable ? C("div", { staticClass: "sticker-table" }, [A._l(A.stickerConfig.stickers, function(I) {
    return [A.useLockedIcon || I.unlocked ? C("Sticker", { key: I.stickerId, attrs: { src: A.stickerConfig.filePath, gridX: I.gridX, gridY: I.gridY, gridWidth: A.stickerConfig.width, gridHeight: A.stickerConfig.height, scale: A.actualStickerSize / A.stickerConfig.width, locked: !I.unlocked, "data-sticker-id": I.stickerId }, on: { click: function(r) {
      return A.onClick(I.stickerId);
    } } }) : A._e()];
  })], 2) : A._e()], 2);
}, a = [], u = /* @__PURE__ */ t(
  y,
  k,
  a,
  !1,
  null,
  "936dd109"
);
const T = u.exports;
export {
  T as StickerSystem
};
