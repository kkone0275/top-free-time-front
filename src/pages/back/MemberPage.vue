
<template>
  <h5 class="text-center member">會員頁面</h5>
  <section>
<div class="column justify-center items-center q-mt-md">
  <q-avatar size="200px" color="secondary" text-color="white" class="q-mb-xl"  >
    <img :src=avatar>
  </q-avatar>

  <q-form @submit="onSubmit"  class="q-gutter-md text-center">
      <q-input class="in-set"
        outlined
        type="text"
        v-model="form.name"
        :label="$t('name')"
        lazy-rules
      />
      <q-input class="in-set"
        outlined
        type="text"
        v-model="form.account"
        :label="$t('account')"
        lazy-rules
      />
      <q-input class="in-set"
        outlined
        type="tel"
        v-model="form.email"
        :label="$t('email')"
        lazy-rules
      />
      <q-input class="in-set"
        outlined
        type="tel"
        v-model="form.phone"
        :label="$t('電話')"
        lazy-rules
      />
      <div>
        <!-- <q-btn label="儲存" type="submit" color="primary" /> -->
      </div>
    </q-form>
</div>
</section>
</template>

<script setup>
// import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'
// import { useQuasar } from 'quasar'
// import { apiAuth } from 'src/boot/axios'
// const $q = useQuasar()
import { useUserStore } from 'src/stores/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { avatar } = storeToRefs(user)
const form = reactive({
  name: user.name,
  account: user.account,
  email: user.email
})

</script>

<style>
q-input{
width: 300px;
}
</style>
