---
title: "Download and Installation"

parent: "Test++"

desc: "Learn how to download and install Test++ onto your system. Test++ is able to be installed on 
        Mac Silicon (ARM64), and Windows (x86, x64/AMD64, and ARM64). Learn how to install Test++ 
        either manually, via an installer, or through a package manager if available."

keywords: "testpp install, test++ install, testpp install mac, test++ install mac, testpp install windows, test++ install windows,
        install testpp, install test++" 

version: "20.1.4"

lastUpdated: 2026-09-15
---

# How to Install Test++ Onto Your System

## Mac (Apple Silicon)

### Homebrew (Preferred)

In order to install Test++ via Homebrew onto your system, run these commands:

```bash
brew trust olie-ver/testpp
brew tap olie-ver/testpp
brew install testpp
```

As we are not officially on Homebrew (yet), you will need to trust and tap the GitHub repo containing Test++. 
Installing via this method will allow you to use the `testpp` command from the terminal without needing to register any paths.

#### Uninstallation

If you installed Test++ via Homebrew, you can run:

```bash
brew uninstall testpp
```

to uninstall it. This will delete all Test++ files from your system, including any configurations 
and user-generated testing executables.

### Package Installer (Less Preferred)

In order to install Test++ via a package installer, you can download the latest installer 
[here.](https://github.com/olie-ver/TestPlusPlus/raw/refs/heads/main/installer/installs/TestPlusPlus-20.1.4-mac-arm64.pkg)
If the download link doesn't work, go to: [https://github.com/olie-ver/TestPlusPlus](https://github.com/olie-ver/TestPlusPlus). 
Then find the `installer` folder and go inside the `installs` folder. Next, download the file titled `TestPlusPlus-20.1.4-mac-arm64.pkg`.
Run the file and you will be able to immediately use the `testpp` command from the terminal without needing to register any paths.

#### Uninstallation

If you installed Test++ via the package installer, you can download the uninstaller [here.](https://github.com/olie-ver/TestPlusPlus/raw/refs/heads/main/installer/uninstall.sh) If the download link doesn't work, go to: [https://github.com/olie-ver/TestPlusPlus](https://github.com/olie-ver/TestPlusPlus). 
Then find the `installer` folder and download the file titled `uninstall.sh`. Run it in a terminal like this:

```bash
sudo ./uninstall.sh
```

This will delete all Test++ files from your system, including any configurations and user-generated testing executables.

## Windows (x86)

### Package Installation (Preferred)

In order to install Test++ via a package installer, you can download the latest installer 
[here.](https://github.com/olie-ver/TestPlusPlus/raw/refs/heads/main/installer/installs/TestPlusPlus-20.1.4-win-x86.exe)
If the download link doesn't work, go to: [https://github.com/olie-ver/TestPlusPlus](https://github.com/olie-ver/TestPlusPlus). 
Then find the `installer` folder and go inside the `installs` folder. Next, download the file titled `TestPlusPlus-20.1.4-win-x86.exe`.
Run the file and you will be able to immediately use the `testpp` command from the terminal without needing to register any paths.

#### Uninstallation

In order to uninstall Test++, go to your System, then navigate to Apps. Search for "Test++". Click the "..." button on the side of the search result
bar and click "Uninstall." This will delete all Test++ files from your system, including any configurations and user-generated testing executables.

## Windows (AMD64/x64)

### Package Installation (Preferred)

In order to install Test++ via a package installer, you can download the latest installer 
[here.](https://github.com/olie-ver/TestPlusPlus/raw/refs/heads/main/installer/installs/TestPlusPlus-20.1.4-win-x64.exe)
If the download link doesn't work, go to:[https://github.com/olie-ver/TestPlusPlus](https://github.com/olie-ver/TestPlusPlus). 
Then find the `installer` folder and go inside the `installs` folder. Next, download the file titled `TestPlusPlus-20.1.4-win-x64.exe`.
Run the file and you will be able to immediately use the `testpp` command from the terminal without needing to register any paths.

#### Uninstallation

In order to uninstall Test++, go to your System, then navigate to Apps. Search for "Test++". Click the "..." button on the side of the search result
bar and click "Uninstall." This will delete all Test++ files from your system, including any configurations and user-generated testing executables.

## Windows (ARM64)

### Package Installation (Preferred)

In order to install Test++ via a package installer, you can download the latest installer 
[here.](https://github.com/olie-ver/TestPlusPlus/raw/refs/heads/main/installer/installs/TestPlusPlus-20.1.4-win-arm64.exe)
If the download link doesn't work, go to: [https://github.com/olie-ver/TestPlusPlus](https://github.com/olie-ver/TestPlusPlus).
Then find the `installer` folder and go inside the `installs` folder. Next, download the file titled `TestPlusPlus-20.1.4-win-arm64.exe`.
Run the file and you will be able to immediately use the `testpp` command from the terminal without needing to register any paths.

#### Uninstallation

In order to uninstall Test++, go to your System, then navigate to Apps. Search for "Test++". Click the "..." button on the side of the search result
bar and click "Uninstall." This will delete all Test++ files from your system, including any configurations and user-generated testing executables.

## Manual Installation (It's Your Life, I Won't Tell You How to Live it)

If you really want to install Test++ manually, you can download the latest version 
[here.](https://github.com/olie-ver/TestPlusPlus/raw/refs/heads/main/Downloads/V20.1.4.zip). If the download link doesn't work,
go to [https://github.com/olie-ver/TestPlusPlus](https://github.com/olie-ver/TestPlusPlus). Then go to the `Downloads` folder, 
and download the `V20.1.4.zip` file. Extract the files and open up a terminal inside the `V20.1.4` folder. Run these commands:

### Mac

```bash
cmake -S. -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build --parallel
cmake --install build
```

You will then need to register an environment variable of the path to the `testpp` executable. There is no uninstallation support 
for manually installing Test++ via this way. You're on your own.

### Windows
```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build --parallel --config Release
cmake --install build --config Release
```

You will then need to register an environment variable of the path to the `testpp` executable. There is no uninstallation support 
for manually installing Test++ via this way. You're on your own.