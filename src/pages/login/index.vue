<script lang="ts" setup>

// ** Assets Imports
import bg from '@/assets/login/bg.png'
import illustration from '@/assets/login/illustration.svg'
import logo from '@/assets/logo.png'

// ** Types Imports
import type { AuthLogin } from '@/types/auth.type'
import type { FormInstance, FormRules } from 'element-plus'

// ** Utils Imports
import Config from '@/utils/config'
import { KEY_TOKEN } from '@/utils/enums'
import HELPERS from '@/utils/helper'
import { message } from '@/utils/message'
import { setToken } from '@/utils/localStorage'

// ** Enum
const key_token = ref<string>(KEY_TOKEN.AUTH_TOKEN)

// ** useHook
const { t } = useI18n()
const router = useRouter()
const auth = useAuthStore()

// ** Data
const loading = ref<boolean>(false)
const formRef = ref<FormInstance>()

const field = reactive<AuthLogin>({
    mssv: t('User.Mssv'),
    password: t('User.Password'),
})

const form = reactive<AuthLogin>({
    mssv: '',
    password: '',
})

const rules = reactive<FormRules>({
    username: [
        {
            required: true,
            message: t('Validate.Required', { field: field.mssv }),
            trigger: 'change',
        },
        {
            max: 50,
            message: t('Validate.MaxLength', {
                field: field.mssv,
                length: 50,
            }),
            trigger: 'change',
        },
    ],
    password: [
        {
            required: true,
            message: t('Validate.Required', { field: field.password }),
            trigger: 'change',
        },
        {
            min: 6,
            max: 20,
            message: t('Validate.MinMaxLength', {
                field: field.password,
                min: 6,
                max: 20,
            }),
            trigger: 'change',
        },
    ],
})

// ** Methods
const handleLogin = async (data: FormInstance | undefined) => {
    if (!data) return

    await data.validate((valid, fields) => {
        if (valid) {
            loading.value = true

            auth.login(form).then(async result => {
                if(result?.data){
                    // Take result api success
                    const successData = result.data

                    // return result data
                    const result_data = HELPERS.takeDataResponse(successData)

                    // Save LocalStorage
                    setToken(key_token.value,  result_data.data?.access_token)

                    // Notification success
                    message(
                        t('Message.Login.Success'),
                        { type: 'success' },
                    )

                    // Navigate home
                    router.push('/')
                }

            })



        } else {
            loading.value = false

            return fields
        }
    })
}
</script>

<template>
    <section class="login">
        <img
            :src="bg"
            class="login__background"
        >

        <div class="login__container">
            <div class="login__container--img d-flex justify-content-end align-items-center">
                <img
                    alt="Logo"
                    :src="illustration"
                >
            </div>

            <div class="login__container--box d-flex align-items-center text-center">
                <div class="login__container--form">
                    <ElImage
                        alt="Logo"
                        :src="logo"
                        class="d-inline-block mb-10"
                    />

                    <h2 class="login__container--title text-uppercase">
                        {{ Config.Title }}
                    </h2>

                    <ElForm
                        ref="formRef"
                        :model="form"
                        :rules="rules"
                        size="large"
                        label-position="top"
                        @submit.prevent
                    >
                        <ElFormItem
                            prop="mssv"
                            :label="$t('User.Mssv')"
                        >
                            <ElInput
                                v-model="form.mssv"
                                class="w-100"
                                clearable
                            />
                        </ElFormItem>

                        <ElFormItem
                            prop="password"
                            :label="$t('User.Password')"
                        >
                            <ElInput
                                v-model="form.password"
                                class="w-100"
                                clearable
                                show-password
                            />
                        </ElFormItem>

                        <ElFormItem>
                            <ElButton
                                class="w-100"
                                size="default"
                                native-type="submit"
                                type="primary"
                                :loading="loading"
                                @click="handleLogin(formRef)"
                            >
                                {{ t("Btn.Login") }}
                            </ElButton>
                        </ElFormItem>
                    </ElForm>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/style/login.scss';
</style>

<route lang="yaml">
    meta:
        layout: blank
        redirectIfLoggedIn: true
</route>
