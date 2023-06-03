export function getImgPlatform(urlParam: string) {
    const url = new URL(urlParam);
  
    return url.hostname
  }