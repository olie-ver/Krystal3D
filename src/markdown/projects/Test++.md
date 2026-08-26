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

## Credits

### Developer:

Oliver Lie

## Support the Development:

Here is how you can support the development of Test++:
1. Suggest a Feature.

Suggesting a feature such as CLI improvements, new testing options, 
and language support would be amazing as it helps guide the development
into something more people can find enjoyment in.

2. Try it Out And Review it.

Using Test++ in your own projects and finding bugs/errors would be 
amazing. It is already used in Krystal's C++ projects, however, we 
don't have much testing on other operating systems other than that it 
compiles. If you were to try it on Windows and Linux and then tell us 
about your experience, it would be greatly appreciated.

3. Donate.

Supporting the Test++ development monetarily helps the development 
greatly. It would allow us to use it and try it out on a larger 
range of devices so we can be more proactive in its development.

## License:

Test++ uses a (license type) license under the following terms:

<!-- 1. Any subderivatives must remain open source and pass any and all 
    conditions under this license.

2. You may not in any way sell the Test++ library and framework 
    directly. The Test++ library and framework may be sold under 
    a larger project, but must not be sold directly or be used as 
    a major selling point.

3. More. Idk. -->

## Download and Installation:

Here is how you can download Test++ onto your system.

### Homebrew (Preferred)

If you have Homebrew on your system, you can install Test++ onto your
system.

1. Run `brew trust olie-ver/testpp`
2. Run `brew tap olie-ver/testpp`
3. Run `brew install testpp`

After this you can start using the `testpp` command immediately without needing 
to register the path. To uninstall, run `brew uninstall testpp`.

### Manual Installation

If you don't have Homebrew on your system, you can still manually install it.
The current version of Test++ can be downloaded here: (INSERT LINK).
After downloading it, open a terminal in the root folder and run the 
following commands:

```
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build --parallel
sudo cmake --install build
```

Then to register the `testpp` command onto your system:
`echo 'export PATH="$HOME/testpp-install/bin:$PATH"' >> ~/.zshrc`

Uninstallation will require you to find the testpp folder in your 
installation root and manually deleting it.

If you don't have CMake, you will need it installed on your system to 
use Test++ anyways.