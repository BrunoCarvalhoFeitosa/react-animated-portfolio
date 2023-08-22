export const phoneFormatMask = (ev) => {
    ev.currentTarget.maxLength = 15
    let { value } = ev.currentTarget

    value = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2')

    ev.currentTarget.value = value
}