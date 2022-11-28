export function readTextRecord(record: NDEFRecord) {
  console.assert(record.recordType === "text");
  const textDecoder = new TextDecoder(record.encoding);
  return textDecoder.decode(record.data);
}
