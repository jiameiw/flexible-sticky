<template>
  <div class="sticky" :style="curStyles" ref="el">
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "FlexibleSticky",
  components: {},
  props: {
    styles: {
      type: Object,
      default: {},
    },
    baseTop: {
      type: Number,
      default: 0,
    },
    fixedTop: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 999,
    },
  },
  setup: (props) => {
    const initHeight = ref(0);

    const { styles, fixedTop, zIndex, baseTop } = props;

    let curStyles = ref(styles);
    const el = ref(null);
    const handleNavHeight = () => {
      const stickyCss = {
        top: fixedTop + "px",
        position: "fixed",
        "z-index": zIndex,
      };
      const scrollTop = document.documentElement.scrollTop;
      const hasfixed = initHeight.value - scrollTop <= fixedTop;
      const styleUnion = hasfixed
        ? {
            ...stickyCss,
            ...styles,
          }
        : styles;

      curStyles.value = styleUnion;
    };
    const unbindEvent = () => {
      window.removeEventListener("scroll", handleNavHeight, true);
    };
    const bindEvent = () => {
      unbindEvent();
      if (!initHeight.value) {
        // @ts-ignore
        const theDomRect = el.value.getBoundingClientRect();
        // @ts-ignore
        initHeight.value = theDomRect.top - baseTop;
      }
      window.addEventListener("scroll", handleNavHeight, true);
    };
    onMounted(bindEvent);
    onUnmounted(unbindEvent);
    return {
      el,
      curStyles,
    };
  },
});
</script>
