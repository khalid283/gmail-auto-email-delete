function emailProcessTrigger(){
ScriptApp.newTrigger('DeleteProcess')
      .timeBased()
      .onWeekDay(ScriptApp.WeekDay.MONDAY)
      .atHour(7)
      .create();
}
