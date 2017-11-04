browser.menus.create({
  id: "jumpToAnchor",
  title: browser.i18n.getMessage("jumpToAnchor"),
  contexts: ["all"]
});

browser.menus.create({
  id: "jumpToAnchorWithSelection",
  title: browser.i18n.getMessage("jumpToAnchorWithSelection"),
  contexts: ["selection"]
});

/*  browser.tabs.executeScript(tabId, {
    code: color
  });
}*/

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "jumpToAnchor":
      break;
    case "jumpToAnchorWithSelection":
      break;
  }
});
