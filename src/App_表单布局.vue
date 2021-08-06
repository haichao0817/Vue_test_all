<template>
  <div>
    <a-button @click="setVal">set value</a-button>
    <a-form-model
      ref="ruleForm"
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
    <a-row>
      <a-col :span="12">
        <a-form-model-item ref="name" label="name" prop="name">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item ref="user" label="user" prop="name">
          <selectUser></selectUser>
        </a-form-model-item>
        <a-form-model-item label="type" prop="type">
          <a-radio-group v-model="form.type">
            <a-radio value="1">
              1
            </a-radio>
            <a-radio value="2">
              2
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Create
          </a-button>
        </a-form-model-item>
      </a-col>
      <a-col :span="12">
        <a-form-model-item ref="name" label="name" prop="name">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item ref="user" label="user" prop="name">
          <selectUser></selectUser>
        </a-form-model-item>
        <a-form-model-item label="type" prop="type">
          <a-radio-group v-model="form.type">
            <a-radio value="1">
              1
            </a-radio>
            <a-radio value="2">
              2
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Create
          </a-button>
        </a-form-model-item>
      </a-col>
    </a-row>
      
    </a-form-model>
  </div>
</template>
<script>
import selectUser from './components/selectUser.vue';
export default {
  components: { selectUser },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        user:'',
        type:'1',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log(this.form);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    setVal(){
      this.$nextTick(()=>{
        this.form.name="wxxxx";
        this.form.type = '2';
      })
    }
  },
};
</script>