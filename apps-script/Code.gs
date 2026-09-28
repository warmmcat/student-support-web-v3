function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('draws');
  if (!sheet) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: 'Missing draws sheet' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const p = e && e.parameter ? e.parameter : {};

  const timestamp = p.timestamp || new Date().toISOString();
  const hexagramNumber = p.hexagramNumber || '';
  const hexagramName = p.hexagramName || '';
  const anonymousBrowserId = p.anonymousBrowserId || '';

  sheet.appendRow([
    timestamp,
    hexagramNumber,
    hexagramName,
    anonymousBrowserId
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupDrawsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName('draws');

  if (!sheet) {
    sheet = spreadsheet.insertSheet('draws');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'timestamp',
      'hexagramNumber',
      'hexagramName',
      'anonymousBrowserId'
    ]);
    sheet.setFrozenRows(1);
  }
}
