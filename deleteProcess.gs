function DeleteProcess(){ 
  var folder = DriveApp.getFoldersByName("auto-delete-folder").next();
  var contents = folder.getFiles().next();
  var sheet_id = contents.getId();
  var file_name = contents.getName();
  
  if(file_name === "auto-delete"){
    var sheet = SpreadsheetApp.openById(sheet_id).getSheets()[0]; 
    
    //Fetch data from sheet and send email
    
    var data = sheet.getDataRange().getValues();
    var i = 1;
    for(i in data){
      if(i == 0){
      }else{
        var email_list = data[i][0];
        var read_type = data[i][1];
        var search_made = 'from:' + email_list +',' + 'is:' + read_type;
        var threads = GmailApp.search(search_made);
        var threads_count = threads.length;
        Logger.log(threads_count);
        
        for(var i = 0; i < threads_count; i++){
          var thread_id = threads[i];
          var Message = thread_id.getMessages()[0];
          GmailApp.moveMessageToTrash(Message);
          Logger.log(Message);
        }
        GmailApp.sendEmail("khalidansari245@gmail.com", "Automatic Email Delete Count", "email: " + threads_count + email_list + read_type );
      }
    }
  }else{
    GmailApp.sendEmail("khalidansari245@gmail.com", "Automatic Email Delete", " File Name auto-delete does not match in folder auto-delete-folder" );
  }
  
}
