jQuery("#resume_link_download").click(function () {
  var doc = new jsPDF();
  doc.fromHTML(jQuery("#page").get(0), 20, 20);
  doc.save("test.pdf");
});
