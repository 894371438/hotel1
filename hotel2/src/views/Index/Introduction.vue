<template>
    <div>
        <el-form :model="form" :rules="rules" label-width="120px" ref="ruleFormRef">
            <el-form-item label="姓名">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.resource">
                    <el-radio label="男" />
                    <el-radio label="女" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号" prop="number">
                <el-input v-model="form.number" />
            </el-form-item>
            <el-form-item label="身份证号" prop="sfz">
                <el-input v-model="form.sfz" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit($refs.ruleFormRef)">修改信息</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                number: '',
                sfz: '',
                email: ''
            },
            rules: {
                number: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' },
                    { pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: '请输入正确邮箱', trigger: 'blur' }
                ],
                sfz: [
                    { required: true, message: '身份证不能为空', trigger: 'blur' },
                    { pattern: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/, message: '请输入正确身份证', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit(formEl) {
            if (!formEl) return
            formEl.validate((valid, fields) => {
                if (valid) {
                    console.log('submit!')
                } else {
                    console.log('error submit!', fields)
                }
            })
        }

    }
}

</script>

<style scoped>
.el-form-item {
    width: 40%;
}

.el-form-item {
    margin: auto;
    margin-top: 10px;
}
</style>