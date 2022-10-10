import { ChangeEvent, useState } from "react";
import { PDFViewer } from "./components";
import {
  BottomBar,
  NoPDFContainer,
  PageMain as Main,
  PDFInput as Input,
  PDFLabel as Label,
  PDFViewerContainer,
  PrimaryButton,
} from "./components/styled";

function App() {
  const [pdfStream, setPDFStream] = useState<string | null>(null);
  const [pdfName, setPDFName] = useState<string>("");
  const [inFullScreen, setInFullScreen] = useState<boolean>(false);

  function inputOnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const chosenFile = e.target.files ? e.target.files[0] : null;
    if (chosenFile) {
      const stream = URL.createObjectURL(chosenFile);
      setPDFStream(stream);
      setPDFName(chosenFile.name);
    }
  }

  return (
    <div className="App">
      <Main>
        <PDFViewerContainer fullScreen={inFullScreen}>
          {pdfStream ? (
            <PDFViewer data={pdfStream} text={pdfName} />
          ) : (
            <NoPDFContainer>No PDF Selected</NoPDFContainer>
          )}
          <BottomBar>
            <Label>
              {pdfStream ? "Choose new PDF" : "Choose a PDF"}
              <Input
                accept=".pdf"
                type="file"
                onChange={(e) => inputOnChangeHandler(e)}
              />
            </Label>
            <PrimaryButton onClick={() => setInFullScreen((prev) => !prev)}>
              Toggle Full Screen
            </PrimaryButton>
          </BottomBar>
        </PDFViewerContainer>
      </Main>
    </div>
  );
}

export default App;
