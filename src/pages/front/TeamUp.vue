<template>
  <h2 class="title01">組團揪夥</h2>
  <h5 class="smtitle03">活動地區:</h5>
  <h5 class="smtitle04">活動類型:</h5>
  <!-- <div class="q-gutter-sm chose">
    <q-btn class="col-12" v-for="gang,index in categories" rounded color="amber-7"
    :key="index" :label="gang" @click="gangActive=gang" />
  </div> -->

  <q-btn-dropdown class="black chose" color="amber-8" label="選 擇 城 市">
      <q-list>
        <q-item clickable v-close-popup v-for="gang,index in categories" :key="index" @click="gangActive=gang">
          <q-item-section>
            <q-item-label>{{ gang }}</q-item-label>
          </q-item-section>
        </q-item>
    </q-list>
  </q-btn-dropdown>

  <q-btn-dropdown class="black chose02" color="amber-8" label="選 擇 活 動">
      <q-list>
        <q-item clickable v-close-popup v-for="gang,index in actives" :key="index" @click="gangAct=gang">
          <q-item-section>
            <q-item-label>{{ gang }}</q-item-label>
          </q-item-section>
        </q-item>
    </q-list>
  </q-btn-dropdown>

  <hr>
  <div class="bgc">
  <div class="bgd">
  <div class="flex set">
    <div class="card" v-for="product in filterData" :key="product._id" style="margin-top: 5rem;">
      <ProductCard v-bind="product"/>
    </div>
  </div>
  </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import ProductCard from '../../components/ProductCard.vue'

const categories = ['所有地區', '台北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市']
const actives = ['所有活動', '運動', '聊天', '吃飯', '散步', '唱歌', '活動', '露營', '旅行', '閱讀']
const gangActive = ref(categories[0])
const gangAct = ref(actives[0])

const products = reactive([])

const filterData = computed(() => {
  if (gangActive.value !== categories[0]) {
    // console.log(gangAct)
    return products.filter((item) => item.category === gangActive.value)
  } else if (gangAct.value !== actives[0]) {
    return products.filter((item) => item.genre === gangAct.value)
  } else {
    return products
  }
});

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
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

.bgc {
  width: 100%;
  height: 100%;
  background-color: rgb(226, 226, 226);
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

.smtitle04{
  position: absolute;
  color:#C01E6C;
  font-weight: 550;
  left: 515px;
  top: 150px;
}

hr{
  border: 12px solid #FFE5B4;
  margin-bottom: 0px;
  padding-bottom: 0px;
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

.chose02{
  position: absolute;
  top: 186px;
  left: 32.7%;
}
</style>
