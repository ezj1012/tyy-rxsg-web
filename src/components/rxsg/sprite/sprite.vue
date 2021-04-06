<template>
  <div :class="{ 'sprite-hover': overing }" class="sprite" :style="style"></div>
</template>
<script>
import { getImageData } from "../../../utils/assist";
export default {
  name: "Sprite",
  props: {
    img: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: null,
      imageData: null,
      overing: false,
      style: {},
    };
  },
  created: function () {
    this.image = new Image();
    this.image.src = this.img;
  },
  mounted: function () {
    this.imageData = getImageData(this.img, this.setImageData);
  },
  methods: {
    setImageData(id) {
      this.imageData = id;
      let sl = {
        width: this.imageData.width + "px",
        height: this.imageData.height + "px",
        background: "url(" + this.img + ") no-repeat",
      };
      this.style = sl;
    },
    mouseMove(e) {
      if (this.imageData != null) {
        let x = Math.floor(e.offsetX);
        let y = Math.floor(e.offsetY);
        x = e.offsetX > x ? x + 1 : x;
        y = e.offsetY > y ? y + 1 : y;

        let id = this.imageData;
        let idx = y * id.width * 4 + x * 4;
        //透明的为0的数据

        if (this.imageData.data[idx + 3] > 0) {
          if (!this.overing) {
            this.overing = true;
          }
        } else if (this.overing) {
          this.overing = false;
        }
      } else if (this.overing) {
        this.overing = false;
      }
      return this.overing;
    },

    mouseOut: function () {
      if (this.overing) {
        this.overing = false;
      }
    },
  },
};
</script>
<style lang="less">
.sprite {
}
.sprite-hover {
  // filter: brightness(120%);
  // opacity: 1;
}
</style>