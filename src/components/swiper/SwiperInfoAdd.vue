<template>
  <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="男方姓名" prop="manName" required>
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="女方姓名" prop="womanName" required>
             <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
           <el-form-item label="结婚时间" required>
              <el-date-picker
                  v-model="ruleForm.date"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
          </el-form-item>
          <el-form-item label="结婚地址" required>
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import swiperMixin from '@/mixins/swiperMixin'
export default {
   mixins:[swiperMixin],
  data() {
    return {
      ruleForm: {
        manName:'',
        womanName:'',
        date:'',
        address:''
      },
       rules: {
          manName: [
            { required: true, message: '请输入男方姓名', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           womanName: [
            { required: true, message: '请输入女方姓名', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
       }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>