chrome.storage.sync.set({ region: 'euw' })

chrome.omnibox.onInputEntered.addListener((username) => {
  chrome.storage.sync.get('region', (data) => {
    let region = data.region
    let requestURL = `https://${encodeURIComponent(region)}.op.gg/summoner/userName=${encodeURIComponent(username)}`;
    chrome.tabs.create({ url: requestURL });
  })
});