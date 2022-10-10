import { StyledObject as Object } from "../styled";

export function PDFViewer({ data, text }: { data: string; text: string }) {
  return (
    <Object data={data} type="application/pdf">
      <p>{text}</p>
    </Object>
  );
}
