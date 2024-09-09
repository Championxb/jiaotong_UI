import { downloadService } from ".";

export function apiDownload(url) {
  return downloadService({
    method: "get",
    url: url,
    responseType: "blob",
  });
}
