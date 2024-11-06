function error(msg) {
  ElMessage({
    message: msg,
    type: "error",
  });
}
function success(msg) {
  ElMessage({
    message: msg,
    type: "success",
  });
}
function warning(msg) {
  ElMessage({
    message: msg,
    type: "warning",
  });
}

const msg = {
  error,
  success,
  warning,
};

export default msg;
