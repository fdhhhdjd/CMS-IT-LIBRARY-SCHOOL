<script lang="ts" setup>
import { NAME } from '@/utils/enums'
import type { Student ,FormLogin } from '@/types/demo.type'

//Sai đơn
const name = ref<string>(NAME.NAME)

// Sài cho nhiều object arr
const class_student = reactive<Student>({
    name: 'Tai',
    age: 16,
    class:'cntt',
    gender: '0',
    mo_to_bike:{
        bike: 'xe dap',
        car: 'honda',
    },
})

// nhan emit
const take_emit =ref<number>(0)

const form = reactive<FormLogin>({
    user_name:'',
    password:'',
})

const demoStore = useDemoStore()

onMounted(async()=>{
    document.getElementById('ga')?.classList.add('ga')
})
demoStore.handleListTodo()


const handleSubmit=()=>{

    console.log(form, name.value)
}


//Tính toán call api dữ liệu không trả về,...
const NameTest = computed(()=>{
    return class_student.name ?? ''
})

const AgeTest = computed(()=>{
    return class_student.age ?? ''
})

watch(()=>form.user_name, (value,oldValue)=>{
    console.log(value,'RUN 1')
    console.log(oldValue,'RUN 2')
})

// Đơn
watch(name, ()=>{

})

</script>

<template>
    <div>
        <h1
            id="ga"
            ref="title"
        >
            Xin chào, {{ NameTest }} || {{ AgeTest }} {{ name }}
        </h1>
        <button @click="handleSubmit">
            Click To Me
        </button>
        <p>User_name</p>
        <input
            v-model="form.user_name"
            type="text"
        >
        <p>Password</p>
        <input
            v-model="form.password"
            type="password"
        >

        <h1>{{ demoStore.doubleCount }}</h1>
        <Demo1
            :name="name"
            @show="(val: number) => take_emit = val"
        />

        {{ take_emit }}
    </div>
    <!--
      <ul>
      <li
      v-for=" datas in demoStore.data"
      :key="datas.id"
      >
      {{ datas.title }}
      </li>
      </ul>
    -->
</template>
