import { Menu, MenuItem, app } from "electron";
import { appWindow } from "..";

export const getAppMenu = (appName) => {
    const menu = Menu.buildFromTemplate([
        {
            label: appName,
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: `About ${appName}`,
                    role: "about" as "about"
                },
                {
                    label: "Check for Updates",
                },
                { 
                    type: "separator" as "separator"
                },
                {
                    label: "Preferences",
                    accelerator: "CmdOrCtrl+Shift+P",
                },
                {
                    label: "Clear Browsing Data...",
                    accelerator: "CmdOrCtrl+Shift+Backspace",
                },
                {
                    type: "separator" as "separator"
                },
                {
                    role: "services" as "services"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    role: "hide" as "hide"
                },
                {
                    role: "hideOthers" as "hideOthers"
                },
                {
                    role: "unhide" as "unhide"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    role: "quit" as "quit",
                    accelerator: "CmdOrCtrl+Q"
                },
            ]
        },
        {
            label: "File",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "New Tab",
                    accelerator: "CmdOrCtrl+T"
                },
                {
                    label: "New Window",
                    accelerator: "CmdOrCtrl+N"
                },
                {
                    label: "New Private Window",
                    accelerator: "CmdOrCtrl+Shift+N"
                },
                {
                    label: "Reopen Closed Tab",
                    accelerator: "CmdOrCtrl+Shift+T"
                },
                {
                    label: "Open File...",
                    accelerator: "CmdOrCtrl+O"
                },
                {
                    label: "Open Location...",
                    accelerator: "CmdOrCtrl+L"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Close Window",
                    accelerator: "CmdOrCtrl+Shift+W"
                },
                {
                    label: "Close Tab",
                    accelerator: "CmdOrCtrl+W"
                },
                {
                    label: "Save Page As...",
                    accelerator: "CmdOrCtrl+S"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Print",
                    accelerator: "CmdOrCtrl+P"
                }
            ]
        },
        {
            label: "Edit",
            role: "editMenu"
        },
        {
            label: "View",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Always Show Bookmarks Bar",
                    accelerator: "CmdOrCtrl+Shift+B",
                    enabled: false,
                    checked: true,
                    type: "checkbox" as "checkbox"
                },
                {
                    label: "Always Show Toolbar in Full Screen",
                    accelerator: "CmdOrCtrl+Shift+F",
                    type: "checkbox" as "checkbox"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Stop",
                    accelerator: "CmdOrCtrl+Period"
                },
                {
                    label: "Reload This Page",
                    accelerator: "CmdOrCtrl+R"
                },
                {
                    label: "Reload This Page",
                    acceleratorWorksWhenHidden: true,
                    visible: false,
                    accelerator: "F5"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Enter Full Screen",
                    accelerator: "Super+Ctrl+F"
                },
                {
                    label: "Actual Size",
                    accelerator: "CmdOrCtrl+0"
                },
                {
                    label: "Zoom In",
                    accelerator: "CmdOrCtrl+="
                },
                {
                    label: "Zoom In",
                    acceleratorWorksWhenHidden: true,
                    visible: false,
                    accelerator: "CmdOrCtrl+Plus"
                },
                {
                    label: "Zoom Out",
                    accelerator: "CmdOrCtrl+-"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Developer",
                    type: "submenu" as "submenu",
                    submenu: [
                        {
                            label: "Toggle Developer Tools",
                            accelerator: "CmdOrCtrl+Alt+I"
                        },
                        {
                            label: "Toggle App Developer Tools",
                            accelerator: "CmdOrCtrl+Alt+F8",
                            click: () => {
                                appWindow.window.webContents.openDevTools({ mode: 'detach' })
                            }
                        }
                    ]
                },
            ]
        },
        {
            label: "History",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Home",
                    accelerator: "CmdOrCtrl+Shift+H"
                },
                {
                    label: "Back",
                    accelerator: "CmdOrCtrl+["
                },
                {
                    label: "Forward",
                    accelerator: "CmdOrCtrl+]"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Recently Closed",
                    enabled: false
                },
                {
                    label: "   (empty)",
                    enabled: false
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Recently Visited",
                    enabled: false
                },
                {
                    label: "   (empty)",
                    enabled: false
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Show Full History",
                    accelerator: "CmdOrCtrl+Y"
                },
            ]
        },
        {
            label: "Bookmarks",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Bookmark Manager",
                    accelerator: "CmdOrCtrl+Alt+B"
                },
                {
                    label: "Bookmark This Tab...",
                    accelerator: "CmdOrCtrl+D"
                },
                {
                    label: "Bookmark All Tabs...",
                    accelerator: "CmdOrCtrl+Alt+Shift+D"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Bookmarks",
                    enabled: false
                },
                {
                    label: "(empty)",
                    enabled: false
                },
            ]
        },
        {
            label: "ID",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Me",
                    enabled: false
                },
                {
                    label: "   Username: EnderDev",
                    enabled: false
                },
                {
                    label: "   Email: kieran@dothq.co",
                    enabled: false
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "View my Account Details"
                },
                {
                    label: "Sync 3 items...",
                    accelerator: "CmdOrCtrl+;"
                },
                {
                    label: "Log out of EnderDev"
                },
            ]
        },
        {
            label: "Tab",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Select Next Tab",
                    accelerator: "Ctrl+Tab"
                },
                {
                    label: "Select Previous Tab",
                    accelerator: "Ctrl+Shift+Tab"
                },
                {
                    label: "Duplicate tab",
                },
                {
                    label: "Mute Site",
                    type: "checkbox" as "checkbox"
                },
                {
                    label: "Pin Tab",
                    type: "checkbox" as "checkbox"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Close Other Tabs"
                },
                {
                    label: "Close Tabs to the Right"
                },
                {
                    label: "Move tab to new window"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "(empty)",
                    enabled: false
                }
            ]
        },
        {
            role: "windowMenu",
            id: "window"
        },
        {
            label: "Help",
            role: "help",
            submenu: [
                {
                    label: `${appName} Support`,
                    accelerator: "F1",
                    click: () => {
                        appWindow.window.webContents.send('create-view', { url: "https://support.dothq.co", active: true })
                    }
                },
                {
                    label: "Release Notes"
                },
                {
                    label: "Report an issue",
                    accelerator: "CmdOrCtrl+!"
                }
            ]
        }
    ])

    const webUI = [
        new MenuItem({
            label: "Downloads",
            accelerator: "CmdOrCtrl+Shift+J"
        }),
        new MenuItem({
            label: "Extensions",
        }),
        new MenuItem({
            label: "Task Manager",
        }),
        new MenuItem({
            type: "separator"
        })
    ]

    let i = 3;

    webUI.forEach(ui => {
        menu.getMenuItemById("window").submenu.insert(i, ui)
        ++i;
    })

    return menu;
}