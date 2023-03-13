<template>
  <v-col cols="4" class="side pa-0">
    <v-container fluid class="side__container pa-0">
      <div class="pa-8">
        <v-btn color="#00B6ED" class="side__btn" @click="showModal">
          <template v-slot:prepend>
            <img width="24" height="24" src="../assets/icons/icon-people.svg" />
          </template>
          Добавить нового сотрудника
        </v-btn>
      </div>
      <v-form>
        <div class="side-filter pa-8 d-flex flex-column">
          <p class="side-filter__head d-flex">Фильтр</p>
          <form action="" class="side__form">
            <label for="">
              Гражданство
              <v-select
                placeholder="Все страны"
                :items="['Россия', 'Таджикистан', 'Айзербайджан', 'Все страны']"
              ></v-select>
            </label>
            <label for="">
              Пол
              <v-select
                placeholder="Без разницы"
                :items="['Мужской', 'Женский', 'Без разницы']"
              ></v-select>
            </label>
            <label for="">
              Все должности
              <v-select
                placeholder="Все должности"
                :items="[
                  'Промышленный альпинист',
                  'Токарь',
                  'Пекарь',
                  'Все должност',
                ]"
              ></v-select>
            </label>
          </form>
        </div>
        <p class=" side__doc_type pl-8 pr-8 pt-8">Тип договора</p>
        <v-radio-group class="side__documents d-flex flex-column pl-8 pb-8 pr-8">
           <v-radio label="ТД" value="ТД"></v-radio>
           <v-radio label="ГПХ" value="ГПХ"></v-radio>
           <v-radio label="СМЗ" value="СМЗ"></v-radio>
           <v-radio label="Кандидат" value="Кандидат"></v-radio>
        </v-radio-group>
        <div class="side__buttons d-flex align-center mt-5 justify-center pa-8">
          <v-btn color="#00AE5B" class="side__btns">Применить</v-btn>
          <v-btn color="#84909B" class="side__btns">Очистить</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-col>
  <Modal :show="show" :onClose="closeModal"/>
</template>
<script lang="ts">
import Modal from './Modal.vue';
export default {
  data: (): { show: boolean } => ({
    show: false,
  }),
  components: {
    Modal,
  },
  methods: {
    showModal(this: { show: boolean }): void {
      this.show = true;
    },
    closeModal(this: { show: boolean }): void {
      this.show = false
    }
  },
};

</script>
<style scoped lang="scss">
.side {
  &__container {
    box-shadow: 0px 7px 30px rgba(42, 53, 140, 0.03);
    border-radius: 10px;
  }
  &__btn {
    color: #ffffff;
    width: 100%;
  }
  &__btns {
    width: 100%;
    max-width: 254px;
    color: #ffffff;
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
  }
  &__doc_type {
    text-align: left;
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
    margin-bottom: 20px;
  }
  &__buttons {
    gap: 20px;
    width: 100%;
  }
  &__line {
    border-bottom: 1px solid #ffffff;
    margin-bottom: 30px;
  }
  &-filter {
    border-top: 1px solid #dbe4ed;
    border-bottom: 1px solid #dbe4ed;
    &__head {
      font-weight: 600;
      font-size: 26px;
      line-height: 120%;
      margin-bottom: 20px;
      align-items: flex-end;
    }
  }
  &__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    label {
      display: flex;
      font-weight: 500;
      font-size: 15px;
      line-height: 120%;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      align-items: flex-start;
      &:last-of-type {
        grid-column: 1/3;
      }
      div {
        width: 100%;
      }
    }
  }
}
</style>
