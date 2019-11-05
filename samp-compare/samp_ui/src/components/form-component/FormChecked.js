//form表单校验
export default function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}