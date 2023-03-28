<script lang="ts" setup>
const device = useDeviceStore()

const handleClick = () => {
    // console.log('click', search)
}
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
                        {{ $t('Device.List') }}
                    </h5>
                </div>
            </template>

            <ElTable
                v-loading="device.loading"
                :data="[]"
                class="w-100"
            >
                <ElTableColumn
                    fixed
                    prop="date"
                    label="Date"
                    width="150"
                />
                <ElTableColumn
                    prop="name"
                    label="Name"
                    width="120"
                />
                <ElTableColumn
                    prop="state"
                    label="State"
                    width="120"
                />
                <ElTableColumn
                    prop="city"
                    label="City"
                    width="120"
                />
                <ElTableColumn
                    prop="address"
                    label="Address"
                    width="600"
                />
                <ElTableColumn
                    prop="zip"
                    label="Zip"
                    width="120"
                />
                <ElTableColumn
                    fixed="right"
                    label="Operations"
                    width="120"
                >
                    <template #default>
                        <ElButton
                            link
                            type="primary"
                            size="small"
                            @click="handleClick"
                        >
                            Detail
                        </ElButton>

                        <ElButton
                            link
                            type="primary"
                            size="small"
                        >
                            Edit
                        </ElButton>
                    </template>
                </ElTableColumn>
            </ElTable>

            <div class="mt-10">
                <ElPagination
                    small
                    background
                    layout="prev, pager, next"
                    :total="50"
                />
            </div>
        </ElCard>
    </ElCol>
</template>
