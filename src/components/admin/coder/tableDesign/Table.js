export const tableRules = {
  name: [
    { required: true, message: "请输入类描述", trigger: "blur" },
    {
      min: 2,
      max: 10,
      message: "长度在 2 到 10 个字符",
      trigger: "blur",
    },
  ],
  code: [
    { required: true, message: "请输入类名", trigger: "blur" },
    {
      min: 2,
      max: 20,
      message: "长度在 2 到 20 个字符",
      trigger: "blur",
    },
  ],
};