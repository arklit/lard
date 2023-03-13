<template>
  <v-col cols='8' class="pa-8 main">
    <v-text-field
      variant="outlined"
      label="Поиск сотрудников"
      hide-details="auto"
      v-model="searchQuery"
      class="main__input">
      <template v-slot:append-inner> 
        <img 
          width="24" 
          height="24" 
          src="../assets/icons/icon-search.svg" >
        </template>
    </v-text-field>
    <span class="main__span mb-8">Например: Иванов Иван</span>
    <h2 class="main__title">Список сотрудников</h2>
    <div class="d-flex flex-row mb-6">
      <div v-for="tag in tags" :key="tag.id" @click="selectedTagId = tag.id" class="ma-2 pa-2 pr-4 pl-4 main__labels">{{ tag.name }}</div>
    </div>
    <v-container fluid>
    <v-row>
      <v-col v-for="(worker, index) in sortedWorkers" :key="index" cols="12">
        <v-card outlined class="main-card">
          <v-card-title>
            <div class="d-flex justify-start align-center">
              <div class="text-h6 main-card__head">{{ worker.full_name }}</div>
              <div class="ml-4 main-card__inn">ИНН {{ worker.inn }}</div>
              <div class="text-caption ml-4"><span class="main-card__tag">{{worker.type_contract.title}}</span> {{ worker.position.name }}</div>
            </div>
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center">
              <div class="d-flex align-center main-card_after">
                <img :src="require('../assets/' + worker.country.icon)" alt="icon">
                <p class="ml-2">{{worker.country?.title}}</p>
              </div>
              <div class="ml-8 main-card_after">г. {{ worker.address }}</div>
              <div class="ml-8 main-card_after">{{ worker.date_birth }}</div>
              <div class="ml-8 main-card_after">{{ worker.age }}</div>
              <div class="ml-8">{{ worker.gender.title }}</div>
            </div>
          </v-card-text>
          <v-card-actions>
            <div class="main-card__stuff" :style="{background: worker.stuff_tag.color}">{{ worker.stuff_tag.title }}</div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
    <v-btn v-if="!showAll" @click="showAll = true"
    color="#FFFFFF" border="1px solid #2A358C" class="main__pagination">
      <template v-slot:prepend> 
        <img 
          width="24" 
          height="24" 
          src="../assets/icons/icon-btn.svg" >
        </template>
      Показать еще
    </v-btn>
  </v-col>
</template>
<script lang="ts">
import { Worker, Tag } from '@/types.js'
import { ref, computed } from 'vue'
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  setup() {
    const workers: Worker[] = [
      {
        full_name: "Иванов Иван Иванович",
        inn: "123456789",
        address: "Санкт-Петербург",
        stuff_tag: {
          id: 2,
          color: '#E52E2E',
          title: 'Истекают документы',
          slug: 'истекают-документы',
        },
        date_birth: '21.01.1981',
        age: 21,
        type_contract: {
          id: 1,
          title: 'СМЗ',
          slug: 'смз',
        },
        type_contract_id: 1,
        position: {
          id: 1,
          name: "Токарь",
        },
        position_id: 1,
        country: {
          id: 1,
          icon: 'rus.png',
          title: "RU 12344 12312",
          slug: "ru-12344-12312",
        },
        country_id: 1,
        gender: {
          id: 1,
          title: 'Мужской',
          slug: 'мужской',
        },
        gender_id: 1,
      },
      {
        full_name: "Константи Евгеньевич Желтов",
        inn: "123456789",
        address: "Санкт-Петербург",
        stuff_tag: {
          id: 1,
          color: '#E2BD06',
          title: 'Истекает патент',
          slug: 'истекает патент',
        },
        date_birth: '21.01.1981',
        age: 21,
        type_contract: {
          id: 1,
          title: 'ТД',
          slug: 'ТД',
        },
        type_contract_id: 1,
        position: {
          id: 1,
          name: "Токарь",
        },
        position_id: 1,
        country: {
          id: 1,
          icon: 'rus.png',
          title: "RU 12344 12312",
          slug: "ru-12344-12312",
        },
        country_id: 1,
        gender: {
          id: 1,
          title: 'Мужской',
          slug: 'мужской',
        },
        gender_id: 1,
      },
      {
        full_name: "Лукьян Алексадрович Синев",
        inn: "123456789",
        address: "Санкт-Петербург",
        stuff_tag: {
          id: 3,
          color: '#00B6ED',
          title: 'Не прошел медкомиссию',
          slug: 'не-прошел-медкомиссию',
        },
        date_birth: '21.01.1981',
        age: 21,
        type_contract: {
          id: 1,
          title: 'СМЗ',
          slug: 'смз',
        },
        type_contract_id: 1,
        position: {
          id: 1,
          name: "Токарь",
        },
        position_id: 1,
        country: {
          id: 1,
          icon: 'rus.png',
          title: "RU 12344 12312",
          slug: "ru-12344-12312",
        },
        country_id: 1,
        gender: {
          id: 1,
          title: 'Мужской',
          slug: 'мужской',
        },
        gender_id: 1,
      },
      {
        full_name: "Андрей Олегович Хорошев",
        inn: "123456789",
        address: "Санкт-Петербург",
        stuff_tag: {
          id: 4,
          color: '#00AE5B',
          title: 'Все хорошо',
          slug: 'Все хорошо',
        },
        date_birth: '21.01.1981',
        age: 21,
        type_contract: {
          id: 4,
          title: 'СМЗ',
          slug: 'смз',
        },
        type_contract_id: 1,
        position: {
          id: 1,
          name: "Токарь",
        },
        position_id: 1,
        country: {
          id: 1,
          icon: 'rus.png',
          title: "RU 12344 12312",
          slug: "ru-12344-12312",
        },
        country_id: 1,
        gender: {
          id: 1,
          title: 'Мужской',
          slug: 'мужской',
        },
        gender_id: 1,
      },
      {
        full_name: "Иванов Иван Иванович",
        inn: "123456789",
        address: "Санкт-Петербург",
        stuff_tag: {
          id: 2,
          color: '#E52E2E',
          title: 'Истекают документы',
          slug: 'истекают-документы',
        },
        date_birth: '21.01.1981',
        age: 21,
        type_contract: {
          id: 1,
          title: 'СМЗ',
          slug: 'смз',
        },
        type_contract_id: 1,
        position: {
          id: 1,
          name: "Токарь",
        },
        position_id: 1,
        country: {
          id: 1,
          icon: 'rus.png',
          title: "RU 12344 12312",
          slug: "ru-12344-12312",
        },
        country_id: 1,
        gender: {
          id: 1,
          title: 'Мужской',
          slug: 'мужской',
        },
        gender_id: 1,
      },
      {
        full_name: "Иванов Иван Иванович",
        inn: "123456789",
        address: "Санкт-Петербург",
        stuff_tag: {
          id: 2,
          color: '#E52E2E',
          title: 'Истекают документы',
          slug: 'истекают-документы',
        },
        date_birth: '21.01.1981',
        age: 21,
        type_contract: {
          id: 1,
          title: 'СМЗ',
          slug: 'смз',
        },
        type_contract_id: 1,
        position: {
          id: 1,
          name: "Токарь",
        },
        position_id: 1,
        country: {
          id: 1,
          icon: 'rus.png',
          title: "RU 12344 12312",
          slug: "ru-12344-12312",
        },
        country_id: 1,
        gender: {
          id: 1,
          title: 'Мужской',
          slug: 'мужской',
        },
        gender_id: 1,
      },
      {
        full_name: "Иванов Иван Иванович",
        inn: "123456789",
        address: "Санкт-Петербург",
        stuff_tag: {
          id: 2,
          color: '#E52E2E',
          title: 'Истекают документы',
          slug: 'истекают-документы',
        },
        date_birth: '21.01.1981',
        age: 21,
        type_contract: {
          id: 1,
          title: 'СМЗ',
          slug: 'смз',
        },
        type_contract_id: 1,
        position: {
          id: 1,
          name: "Токарь",
        },
        position_id: 1,
        country: {
          id: 1,
          icon: 'rus.png',
          title: "RU 12344 12312",
          slug: "ru-12344-12312",
        },
        country_id: 1,
        gender: {
          id: 1,
          title: 'Мужской',
          slug: 'мужской',
        },
        gender_id: 1,
      },
      ]
      const selectedTagId = ref(0);
      const tags = [
        { id: 0, name: 'Весь список' },
        { id: 1, name: 'Критические', color: '#E52E2E' },
        { id: 2, name: 'Проблемные', color: '#E2BD06' },
        { id: 3, name: 'Есть замечания', color: '#00B6ED' },
        { id: 4, name: 'Выполнено', color: '#00AE5B' },
      ];
    const searchQuery = ref('')
    const showAll = ref(false);

    const filteredWorkers = computed(() => {
      let filtered = workers;
      if (selectedTagId.value !== 0) {
        filtered = filtered.filter((worker) => worker.stuff_tag.id === selectedTagId.value);
      }
      if (!showAll.value) {
        filtered = filtered.slice(0, 4);
      }
      return filtered;
    });

    const sortedWorkers = computed(() => {
      const search = searchQuery.value.toLowerCase();
      let sorted = filteredWorkers.value;

      sorted = sorted.filter(worker => {
        const name = worker.full_name.toLowerCase();
        return name.includes(search);
      });

      sorted.sort((a, b) => {
        const nameA = a.full_name.toLowerCase();
        const nameB = b.full_name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });

      return sorted;
    });

  
    return { workers, showAll, filteredWorkers, tags, selectedTagId, searchQuery, sortedWorkers }
  }
};
</script>
<style scoped lang="scss">
 .main {
  box-shadow: 0px 7px 30px rgba(42, 53, 140, 0.03);

  &__input {
    background: #E0EBEF;
  }
  &__pagination {
    color: #2A358C;
    border: 1px solid #2A358C;
  }

  &-card {
    background: #E7F3FF;
    border-radius: 4px;
    &__head {
      color: #2A358C;
      
    }
    &_after {
      position: relative;
      &:after {
        content: '';
        height: 16px;
        border: 1px solid #CEDAE6;
        position: absolute;
        right: -15px;
      }
    }
    &__stuff {
    border-radius: 4px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 120%;
    padding: 4px 8px;
  }
    &__inn {
      background: #FFFFFF;
      border-radius: 4px;
      color: #84909B;
      font-size: 13px;
      line-height: 120%;
      padding: 4px 6px;
    }
    &__tag {
      background: #00AE5B;
      border-radius: 4px;
      padding: 4px;
      color: #FFFFFF;
    }
  }
  &__span {
    font-weight: 400;
    font-size: 13px;
    line-height: 120%;
    color: #B0BCC7;
    display: flex;
    margin-top: 10px;
  }
  &__labels {
    border-radius: 30px;
    cursor: pointer;
    border: 1px solid #B0BCC7;
    &:nth-child(1) {
      color: #B0BCC7;
      border-color: #bbbbbb;
      margin-left: 0 !important;
      &:hover {
        color: #FFF;
        background: #B0BCC7;
        border-color: #B0BCC7
      }
    }
    &:nth-child(2) {
      color: #E2BD06;
      border-color: #E2BD06;
      background: #FFFDF1;
      &:hover {
        color: #FFF;
        background: #E2BD06;
        border-color: #E2BD06;
      }
    }
    &:nth-child(3) {
      color: #E52E2E;
      border-color: #E52E2E;
      background: #FFF8F8;
      &:hover {
        color: #FFF;
        background: #E52E2E;
        border-color: #E52E2E;
      }
    }
    &:nth-child(4) {
      color: #00B6ED;
      border-color: #00B6ED;
      background: #F3FCFF;
      &:hover {
        color: #FFF;
        background: #00B6ED;
        border-color: #00B6ED;
      }
    }
    &:nth-child(5) {
      color: #00AE5B;
      border-color: #00AE5B;
      background: #F2FFF9;
      &:hover {
        color: #FFF;
        background: #00AE5B;
        border-color: #00AE5B;
      }
    }
  }
  &__title {
    text-align: left;
  }
 }

</style>
