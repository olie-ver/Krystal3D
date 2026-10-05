---
title: "Adding the Test++ Library to VSCode"

webtitle: "Add to VSCode"

parent: "Test++"

desc: "Learn how to add the Test++ library to VSCode Intellisense for ease of use in your own projects."

keywords: "testpp vscode, test++ vscode, add test++ to vscode, add testpp to vscode"

version: "20.1.4"

lastUpdated: 2026-10-05
dateAdded: 2026-09-15
---

# Add Test++ to VSCode

For easier integration with your own projects, it would be nice to add Test++ to VSCode's Intellisense registry
so you have the benefits of autocomplete and no error squiggles. The first step in the process is to figure out 
where on your system Test++ is installed. If you did not manually install Test++, this step is very easy.
Run: 
```bash
testpp --diagnostics
```

And you will get some output similar to this:
```bash
Version: Test++ V20.1.4

Installation Folder: "/usr/local"

Test Executable Built: True
Test Executable Path: /usr/local/run/testpp/bin/testpp_generated

Configurations:
        num_threads = 1
        verbosity = default
...
```

There may be some slight differences, but what's important is the `Installation Folder`. In your file system, navigate to 
the installation folder. You should then see an `include` folder. Depending on how you installed Test++, this folder may contain 
multiple subdirectories. Nonetheless, copy the absolute path of the `include` folder. Then in VSCode, open up the User Preferences
(Command-Shift-P on Mac, Control-Shift-P on Windows). Find the C/C++ settings and paste the path to the include folder into the 
Default Include Path setting. You will now be able to use `#include <testpp/testpp.hpp>` in your projects.

If you do not want a global includes, you can open up the `.vscode` folder and add in a `c_cpp_properties.json` file, or edit the 
one already present. Add in:
```bash
includePath: [
    <YOUR_PATH_HERE>
]
```
And in that project, you will be able to use `#include <testpp/testpp.hpp>`.

## Automatically Include the Latest Version

When Test++ gets an update, the version changes, which means that the path to the `include` folder changes as well. When this happens, 
you'll need to redo this entire process every time so that VSCode can find the Test++ library. Rather than manually changing this every time,
when you add the include path into VSCode, you can put in the '*' character in place of the Test++ version number. This way, VSCode will 
always check the latest Test++ version for the `include` folder.

For example:
```bash
/opt/homebrew/Cellar/testpp/20.2.0/include
```

Becomes:
```bash
/opt/homebrew/Cellar/testpp/*/include
```