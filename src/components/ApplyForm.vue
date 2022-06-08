<template>
  <div class="personnel">
    <el-row>
      <el-col>
        <h1>申請成為全職籌款幹事及街頭教育專員 / 電話推廣大使</h1>
      </el-col>
      <el-col>
        <img src="../assets/img/slide4.jpg" width="100%" alt />
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row class="form-content">
      <el-col>
        <el-card shadow="always">
          <el-form
            :model="applyForm"
            :rules="rules"
            ref="applyForm"
            label-position="top"
            label-width="120px"
            class="demo-applyForm"
          >
            <el-form-item label="工作性質" prop="type">
              <el-radio-group v-model="applyForm.type">
                <el-radio label="dd">籌款幹事</el-radio>
                <el-radio label="lc">電話推廣大使</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="性別" prop="gender">
              <el-radio-group v-model="applyForm.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="中文全名" prop="name">
              <el-input
                v-model="applyForm.name"
                placeholder="中文全名"
              ></el-input>
            </el-form-item>
            <el-form-item label="聯絡電話" prop="phone">
              <el-input
                v-model="applyForm.phone"
                placeholder="聯絡電話"
              ></el-input>
            </el-form-item>
            <el-form-item label="電郵地址" prop="email">
              <el-input
                v-model="applyForm.email"
                placeholder="電郵地址"
              ></el-input>
            </el-form-item>
            <el-form-item label="出生年份" prop="birthYear">
              <el-date-picker
                type="year"
                placeholder="出生年份"
                :default-value="new Date(2000, 1, 1)"
                v-model="applyForm.birthYear"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button
                type="success"
                :loading="submitLoading"
                @click="submitForm('applyForm')"
                >提交申請</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
const axios = require('axios');
const config = require('../config/config');

export default {
  name: 'applyForm',
  data() {
    return {
      submitLoading: false,
      applyForm: {
        name: '',
        phone: '',
        email: '',
        birthYear: '',
        gender: '男',
        type: 'dd',
      },
      rules: {
        name: [{ required: true, message: '請輸入中文全名', trigger: 'blur' }],
        phone: [{ required: true, message: '請輸入聯絡電話', trigger: 'blur' }],
        email: [
          {
            type: 'email',
            required: true,
            message: '請輸入電郵地址',
            trigger: 'blur',
          },
        ],
        birthYear: [
          {
            type: 'date',
            required: true,
            message: '請輸入出生年份',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.submitLoading = true;
          var d = new Date(this.applyForm.birthYear);
          let year = d.getFullYear();

          let data = new FormData();
          data.append('Chi_Name', this.applyForm.name);
          data.append('Gender', this.applyForm.gender);
          data.append('Phone', this.applyForm.phone);
          data.append('Email', this.applyForm.email);
          data.append('Year_Of_Birth', year);
          data.append('Source', window.location.search);
          data.append('Type', this.applyForm.type);

          try {
            let postRef = await axios.post(config.script, data);

            let res = postRef.data;

            if (res.result === 'success') {
              Swal.fire(
                '申請已提交',
                '綠色和平將於５個工作天內聯絡你。',
                'success'
              );
              this.submitLoading = false;
            } else {
              Swal.fire(
                '表格傳送失敗',
                '歡迎直接將履歷電郵至 andy.li@greenpeace.org 或 與招聘主任 (Whatsapp 5913 0059)了解詳情。',
                'warning'
              );
              this.submitLoading = false;
              console.log(res);
            }
          } catch (err) {
            Swal.fire(
              '表格傳送失敗',
              '歡迎直接將履歷電郵至 andy.li@greenpeace.org 或 與招聘主任 (Whatsapp 5913 0059)了解詳情。',
              'warning'
            );
            this.submitLoading = false;
            console.log(err);
          }
        } else {
          console.log('error submit!!');
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
