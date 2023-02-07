<template>
    <div>
        <el-form :model="form" label-width="120px">
            <el-form-item label="姓名">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.resource">
                    <el-radio label="男" />
                    <el-radio label="女" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.number" />
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="form.sfz" />
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
                sfz: ''
            }
        }
    }
}
</script>

<style scoped>

</style>