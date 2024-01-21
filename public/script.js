function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please choose a file before uploading.");
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    const statusElement = document.getElementById('status');
    statusElement.innerHTML = `File uploaded: ${data.filename}`;
  })
  .catch(error => {
    console.error('Error uploading file:', error);
    const statusElement = document.getElementById('status');
    statusElement.innerHTML = 'Error uploading file. Please try again.';
  });
}
