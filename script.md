1)download the script folder and put it in the desktop
2)Press command+shift+p and type "Preferences: open keyboard shortcuts" and press enter
3)Copy this code and put it in your keybindings. json
[
  {
    "key": "cmd+1",
    "command": "workbench.action.terminal.sendSequence",
    "when": "editorTextFocus",
    "args": {
      "text": "/Users/takiacademy/Desktop/scripts/cptsx.sh\n",
      "waitForPrompt": true
    }
  },
  {
    "key": "cmd+2",
    "command": "workbench.action.terminal.sendSequence",
    "when": "editorTextFocus",
    "args": {
      "text": "/Users/takiacademy/Desktop/scripts/cpjsx.sh\n",
      "waitForPrompt": true
    }
  },
  {
    "key": "cmd+3",
    "command": "workbench.action.terminal.sendSequence",
    "when": "editorTextFocus",
    "args": {
      "text": "/Users/takiacademy/Desktop/scripts/git.sh\n",
      "waitForPrompt": true
    }
  },
  {
    "key": "cmd+4",
    "command": "workbench.action.terminal.sendSequence",
    "when": "editorTextFocus",
    "args": {
      "text": "/Users/takiacademy/Desktop/scripts/newslice.sh\n",
      "waitForPrompt": true
    }
  }
]
4)you can change the shortcut or change the script content as you like




default shortcuts

Command + 1 : create tsx component
Command + 2 : create jsx component
Command + 3 : To push a working branch to the first remote repository
Command + 4 : create redux slice