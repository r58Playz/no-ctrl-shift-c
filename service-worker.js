function executeCopy() {
  document.execCommand("copy");
}

chrome.commands.onCommand.addListener(async (command) => {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if(!tab) return;
  chrome.scripting.executeScript({target: {tabId: tab.id}, func: executeCopy});
});
