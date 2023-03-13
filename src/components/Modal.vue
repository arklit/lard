<template>
  <div class="modal" v-if="show" @click.stop> 
    <div @click.stop class="modal__container">
      <h5>Добавить пользователя</h5>
      <button @click="closeModal" class="modal__close"></button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    onClose: Function,
  },
  setup(props: any) {
    const closeModal = () => {
      if (props.onClose) {
        props.onClose();
      }
    };

    return {
      closeModal,
    };
  },
}
</script>
<style lang="scss">
.modal {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0,0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  &__container {
    background: #FFFFFF;
    width: 500px;
    border: 1px solid #F1F2F2;
    border-radius: 40px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  &__close {
    background: url('../assets/icons/icon-close.svg');
    background-repeat: no-repeat;
    width: 36px;
    height: 36px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  h5 {
    text-align: left;
    font-size: 24px;
  }

}
</style>
