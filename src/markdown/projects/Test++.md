---
title: "Test++"
status: "Release"
version: "20.1.2"

contributors: ["Oliver Lie"]

openSource: "Yes"
license: Custom

startDate: 2026-03-30
lastUpdated: 2026-07-24

repo: "https://github.com/olie-ver/TestPlusPlus"

img: 
    src: "../../images/Krystal.svg"
    alt: "Test++ logo"

tags: ["C++", "Test++", "unit testing"]

svg: true
---
Test++ is a header-only C++ unit testing library and framework. It 
is available for download and installation on Mac, Windows, and Linux,
however, its development is done on Mac, and its usage in other operating 
systems is largely untested. It is completely open source and free to use.
It is currently built using C++20, and usage with other languages/C++ 
standards has not yet been tested. 

GitHub: https://github.com/olie-ver/TestPlusPlus

## Credits

**Developer:** Oliver Lie

## Support the Development:

Here is how you can support the development of Test++:

### 1. Suggest a Feature

Suggesting a feature such as CLI improvements, new testing options, 
and language support would be amazing as it helps guide the development
into something more people can find enjoyment in.

### 2. Try It Out and Review It

Using Test++ in your own projects and finding bugs/errors would be 
amazing. It is already used in Krystal's C++ projects, however, we 
don't have much testing on other operating systems other than that it 
compiles. If you were to try it on Windows and Linux and then tell us 
about your experience, it would be greatly appreciated.

<!-- ### 3. Donate

Supporting the Test++ development monetarily helps the development 
greatly. It would allow us to use it and try it out on a larger 
range of devices so we can be more proactive in its development. -->

## License:

Test++ uses an MIT license.

# Installation

In order to use Test++ as a CLI tool, you will need CMake installed on your system.
This CMake requirement is not present when you use Test++ as a library. 

## Homebrew (Preferred)
If you have a Mac, you can install Test++ via Homebrew.

```bash
brew trust olie-ver/testpp
brew tap olie-ver/testpp
brew install testpp
```
After this you can start using the testpp command immediately without needing to register the path. 
To uninstall, run 

```bash
brew uninstall testpp
```

## Manual Installation

In order to manually install Test++, go to the project's [repo]
(https://github.com/olie-ver/TestPlusPlus/blob/main/Downloads/V20.1.2.zip)
and download the V20.1.2.zip file

Extract the files. Open a new terminal inside the V20.1.2 folder and then run the following commands:

```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build --parallel
sudo cmake --install build
```

Then to register the `testpp` command in your system, you can run:
```bash
echo 'export PATH="$HOME/testpp-install/bin:$PATH"' >> ~/.zshrc
```

Uninstallation will require you to find the testpp folder in your 
installation root and manually deleting it.

If you don't have CMake, you will need it installed on your system to 
use Test++ anyways.