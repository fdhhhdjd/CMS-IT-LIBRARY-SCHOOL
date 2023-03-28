<script lang="ts" setup>

// ** Utils Imports
import { message } from '@/utils/message'
import { KEY_TOKEN } from '@/utils/enums'
import { clearToken, getLocalStorage } from '@/utils/localStorage'

// ** Hook Imports
import { useNav } from '@/layouts/hooks/useNav'

// ** Data
const { t } = useI18n()
const router = useRouter()
const { isDesktop, sidebarMobile, sidebarCollapse } = useNav()

// **  Store
const authStore = useAuthStore()

// ** Methods
const auth_profile = getLocalStorage(KEY_TOKEN.AUTH_PROFILE)

const handleLogout = () => {
    authStore.logoutAdmin().then(result=>{
        if(result){
            clearToken(KEY_TOKEN.AUTH_TOKEN)
            clearToken(KEY_TOKEN.AUTH_PROFILE)
            router.push('login')
            message(
                t('Message.Logout.Success'),
                { type: 'success' },
            )
        }
    }).catch(() => {
        message(
            t('Message.Logout.Error'),
            { type: 'error' },
        )
    })

}
</script>

<template>
    <header class="navbar-header sticky inset-block-start-4 backdrop-blur z-[100] bg-white opacity-95">
        <div class="border rounded-[6px] border-[#4b465c1f]">
            <div class="flex h-100 items-center h-[64px] px-6 justify-between">
                <Expand
                    class="w-[20px] h-[20px] cursor-pointer"
                    @click="isDesktop ? sidebarCollapse() : sidebarMobile()"
                />

                <ElDropdown trigger="click">
                    <div class="flex items-center">
                        <ElAvatar
                            :size="40"
                            :src="auth_profile.avatar_uri || authStore.data_profile.avatar_uri|| 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1.129659bb.png' "
                        />

                        <p class="mb-0 mx-2 text-[.9rem] font-semibold capitalize flex">
                            {{ auth_profile.name || authStore.data_profile.name || 'Anonymous' }}
                        </p>

                        <CaretBottom class="h-[16px] w-[16px]" />
                    </div>

                    <template #dropdown>
                        <ElDropdownMenu>
                            <ElDropdownItem @click="handleLogout">
                                {{ $t('Btn.Logout') }}
                            </ElDropdownItem>
                        </ElDropdownMenu>
                    </template>
                </ElDropdown>
            </div>
        </div>
    </header>
</template>
