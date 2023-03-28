export const getI18n = (str: string) => {
    const { t } = useI18n()

    return t(str)
}

export const optionStatus = () => {
    return [{
        value: 0,
        label: getI18n('All'),
    }, {
        value: 1,
        label: 'Label 1',
    }, {
        value: 2,
        label: 'Label 2',
    }]
}
