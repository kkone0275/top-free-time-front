<template>
  <h2 class="title01">空閒時間</h2>
  <h5 class="smtitle03">活動地區:</h5>

  <div class="chose">
  <q-btn-dropdown class="black" color="amber-8" label="選 擇 城 市">
    <q-list>
      <q-item clickable v-close-popup v-for="gang,index in categories" :key="index" @click="gangActive=gang">
        <q-item-section>
          <q-item-label>{{ gang }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
  </div>
  <hr>
<div class="flex set">
  <div class="card" v-for="Time in filterData" :key="Time._id" style="margin-top: 5rem;">
    <TimeCard v-bind="Time"/>
  </div>
</div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import TimeCard from '../../components/TimeCard.vue'

const categories = ['所有地區', '台北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市']
const gangActive = ref(categories[0])

const Times = reactive([])

const filterData = computed(() => {
  if (gangActive.value === categories[0]) {
    return Times
  } else {
    return Times.filter((item) => item.category === gangActive.value)
  }
});

(async () => {
  try {
    const { data } = await api.get('/Times')
    Times.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>

<style scoped>
.box{
  flex: auto;
}

.title01{
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: 550;
  color: #8A8888;
  margin-left: 8%;
}

.smtitle03{
  color:#C01E6C;
  font-weight: 550;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 10%;
}

hr{
  border: 12px solid #FFE5B4;
}

.set{
  margin-left: 5%;
}

.card{
  margin-left: 2%;
}
.chose{
  position: absolute;
  top: 186px;
  left: 16%;
}

.black{
  color: black;
}
</style>
