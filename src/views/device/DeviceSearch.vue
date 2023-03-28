<script lang="ts" setup>

// ** EP Imports
import { Refresh, Search } from '@element-plus/icons-vue'

// ** Utils Imports
import { optionStatus } from '@/utils'

// ** useHook
const device = useDeviceStore()
</script>

<template>
    <ElCol
        :span="24"
        class="mb-5"
    >
        <ElCard shadow="never">
            <template #header>
                <div class="card-header">
                    <h5 class="uppercase font-semibold text-[1rem] tracking-wide">
                        {{ $t('Search') }}
                    </h5>
                </div>
            </template>

            <ElForm
                ref="formRef"
                size="large"
                label-position="top"
                @submit.prevent
            >
                <ElRow :gutter="12">
                    <ElCol
                        :md="6"
                        :sm="12"
                    >
                        <ElFormItem
                            prop="name"
                            :label="$t('Device.Name')"
                        >
                            <ElInput
                                v-model="device.search.name"
                                class="w-100"
                                clearable
                            />
                        </ElFormItem>
                    </ElCol>

                    <ElCol
                        :md="6"
                        :sm="12"
                    >
                        <ElFormItem
                            prop="serial"
                            :label="$t('Device.Serial')"
                        >
                            <ElInput
                                v-model="device.search.serial"
                                class="w-100"
                                clearable
                            />
                        </ElFormItem>
                    </ElCol>

                    <ElCol
                        :md="6"
                        :sm="12"
                    >
                        <ElFormItem
                            prop="status"
                            :label="$t('Status.Name')"
                        >
                            <ElSelect
                                v-model="device.search.status"
                                class="w-100"
                                clearable
                                filterable
                                :no-data-text="$t('Select.NoData', { field: $t('Status.Name') })"
                                :no-match-text="$t('Select.NoMatch', { field: $t('Status.Name') })"
                            >
                                <ElOption
                                    v-for="item in optionStatus()"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </ElSelect>
                        </ElFormItem>
                    </ElCol>

                    <ElCol
                        :md="6"
                        :sm="12"
                    >
                        <ElFormItem
                            prop="type"
                            :label="$t('Status.Name')"
                        >
                            <ElSelect
                                v-model="device.search.type"
                                class="w-100"
                                clearable
                                filterable
                                :no-data-text="$t('Select.NoData', { field: $t('Status.Name') })"
                                :no-match-text="$t('Select.NoMatch', { field: $t('Status.Name') })"
                            >
                                <ElOption
                                    v-for="item in optionStatus()"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </ElSelect>
                        </ElFormItem>
                    </ElCol>
                </ElRow>

                <div class="d-flex justify-center">
                    <ElButton
                        size="small"
                        native-type="submit"
                        type="primary"
                        :icon="Search"
                        :loading="device.loading"
                        @click="device.handleSearch"
                    >
                        {{ $t("Btn.Search") }}
                    </ElButton>

                    <ElButton
                        size="small"
                        type="info"
                        plain
                        :icon="Refresh"
                        @click="device.handleReset"
                    >
                        {{ $t("Btn.Reset") }}
                    </ElButton>
                </div>
            </ElForm>
        </ElCard>
    </ElCol>
</template>
