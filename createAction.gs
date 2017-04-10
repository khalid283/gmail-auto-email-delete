function createAction(){
  var folder = DriveApp.createFolder("auto-delete-folder");
  var ssNew = SpreadsheetApp.create("auto-delete");
  var copyId = DriveApp.getFileById(ssNew.getId());
  var newFile = copyId.makeCopy('auto-delete', folder);
  var sheet_id = newFile.getId();
  var sheet = SpreadsheetApp.openById(sheet_id).getSheets()[0];
    sheet.clear();
  sheet.appendRow(["EmailFrom", "ReadType"]);
  copyId.setTrashed(true);
}
