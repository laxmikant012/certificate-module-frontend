function download(){
    const blob = new Blob({type: "application/pdf"});
    downloadFile(blob,"certificate.pdf");
}

function downloadFile(blob,filename){
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}