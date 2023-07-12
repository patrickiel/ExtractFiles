# Extract Files VS Code Extension

This extension allows you to extract the relative paths and contents of all files in a selected directory, copying the extracted information to your clipboard.

## Features

- Right-click on a directory in the Explorer view to extract the relative paths and contents of all the files it contains.
- The extracted information is copied to your clipboard in the following format:

Filepath: /relative/path/to/file1.txt
Content:
{file1.txt content}

Filepath: /relative/path/to/file2.txt
Content:
{file2.txt content}

Filepath: /relative/path/to/file3.txt
Content:
{file3.txt content}

## Requirements

- Visual Studio Code 1.50+
- Node.js 10+

## Installation

1. Download the latest `.vsix` release file from the GitHub repository releases.
2. In VS Code, go to the Extensions view (`Ctrl+Shift+X`).
3. Click on the three dots in the top right corner of the Extensions view, choose `Install from VSIX...` and select your `.vsix` file.

## Usage

1. Right-click on a folder in the Explorer view.
2. Select `Extract` from the context menu.
3. The content of the files in the selected folder along with their relative paths will be copied to the clipboard.

## Contributing

For bugs and feature requests, please create an issue in the GitHub repository.

## License

This extension is licensed under the [MIT License]