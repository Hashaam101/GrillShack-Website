// Google Apps Script to receive review feedback from ReviewPopup.tsx

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Extract form data
    var rating = e.parameter.rating || '';
    var feedback = e.parameter.feedback || '';
    var phone = e.parameter.phone || '';
    
    // Format timestamp as DD/MM/YYYY HH:MM in GMT+0
    var now = new Date();
    var day = String(now.getUTCDate()).padStart(2, '0');
    var month = String(now.getUTCMonth() + 1).padStart(2, '0');
    var year = now.getUTCFullYear();
    var hours = String(now.getUTCHours()).padStart(2, '0');
    var minutes = String(now.getUTCMinutes()).padStart(2, '0');
    var timestamp = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
    
    // If sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp (GMT+0)', 'Rating', 'Feedback', 'Phone']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }
    
    // Append the new row
    sheet.appendRow([timestamp, rating, feedback, phone]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
  
  var result = doPost(testEvent);
  Logger.log(result.getContent());
}
