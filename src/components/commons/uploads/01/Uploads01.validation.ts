export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다!");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 업로드가 가능합니다");
    return false; //유효하지 않으니까 false
  }

  return true; //그 밖은 유효하니까 true
};
