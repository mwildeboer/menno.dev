export function getFileName(filePath: string) {
  const urlSegments = filePath.split("/");
  const fileNameWithExtension = urlSegments[urlSegments.length - 1] as string;
  const [fileName] = fileNameWithExtension.split(".");
  return fileName as string;
}
