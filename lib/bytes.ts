export function calculateByteSize(text: string) {
  const utf8Bytes = new TextEncoder().encode(text);
  return utf8Bytes.length;
}

export function atob(base64: string) {
  return Buffer.from(base64, "base64").toString("binary");
}

export function btoa(binary: string) {
  return Buffer.from(binary, "binary").toString("base64");
}
