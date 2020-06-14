jQuery("#resume_link_download").click(function () {
  var doc = new jsPDF();
  doc.fromHTML(jQuery("#resume").get(0), 20, 20, {
    width: 500,
  });
  doc.save("test.pdf");
});
