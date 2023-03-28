<template>
    <section>
        <ElRow :gutter="12">
            <ElCol
                :span="24"
                class="mb-5"
            >
                <h5 class="uppercase font-medium text-[1.5rem] tracking-wide">
                    {{ $t('Device.Management') }}
                </h5>
            </ElCol>

            <DevicePage />
        </ElRow>
    </section>
</template>
