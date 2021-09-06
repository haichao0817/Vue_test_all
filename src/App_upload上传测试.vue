<template>
  <div style="margin-left:20px; margin-top:20px; width:300px">
    <a-upload
      name="file"
      :headers="headers"
      :showUploadList='false'
      @change="handleChange"
      :customRequest="customRequest"
    >
      <a-button> <a-icon type="upload" /> Click to Upload </a-button>
    </a-upload>
    <a-row>
      <a-col :span="5">
        文件名
      </a-col>
      <a-col :span="19">
        <a-progress :percent="90" size="small" />
      </a-col>
      <a-col :span="5">
        文件名2
      </a-col>
      <a-col :span="19">
        <a-progress :percent="100" size="small" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    };
  },
  methods: {
    handleChange(info) {
      const event = info.event;
      if(event){
        console.log(event)
      }
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    customRequest (data) {
        const formData = new FormData()
        formData.append('file', data.file);
        formData.append('fileType', this.fileType);
        this.$axios.post('/upload', formData).then((response) => {
          console.log(response);
          this.$message.success("上传成功");
        }).catch(() => {
          this.$message.error("上传失败");
        })
    }
  },
};
</script>