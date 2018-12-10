<template>
  <div class="hamburger-menu-toggle">
    <div class="menu-toggle"
      @click="handleToggle()">
      <div :class="open ? 'toggle-inner active' : 'toggle-inner'">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      open: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      handleToggle() {
        this.$emit('toggle')
      }
    }
  }
</script>

<style lang="less">
.hamburger-menu-toggle {
  position: relative;
  .menu-toggle {
    position: absolute;
    width: 32px;
    height: 32px;
    left: 50%;
    top: 50%;
    transform: translate(-16px, -16px);

    .toggle-inner::before,
    .toggle-inner::after {
      content: "";
      display: block;
    }

    .toggle-inner,
    .toggle-inner::before,
    .toggle-inner::after, {
      position: absolute;
      width: 22px;
      height: 3.5px;
      background-color: #fff;
      transition: all .2s ease-in-out;
    }

    .toggle-inner {
      top: 15px;
      left: 4px;

      &::before {
        top: -7px;
      }

      &::after {
        bottom: -7px;
      }

      &.active {
        background-color: rgba(0, 0, 0, 0);

        &::before {
          transform-origin: 50% 50%;
          transform: translateY(7px) rotate(45deg);
        }

        &::after {
          transform-origin: 50% 50%;
          transform: translateY(-7px) rotate(-45deg);
        }
      }
    }
  }
}
</style>
