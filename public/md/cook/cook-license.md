# © LICENSE

The ```licence``` command helps you manage **open-source licenses** for your project.
You can list available licenses, choose one to apply or get a preview of the any available license.

## The ```licenses``` :

| License Name             | Open Source          | TL;DR                                                              |
| ------------------------ | -------------------- | ------------------------------------------------------------------ |
| **MIT**                  | ✅ Yes                | Super permissive. Use it, modify it, just keep the license notice. |
| **Apache 2.0**           | ✅ Yes                | Like MIT but adds a patent grant. Safe for businesses.             |
| **GPL-3.0**              | ✅ Yes                | Copy-left. If you distribute, your code must also be open.         |
| **LGPL-3.0**             | ✅ Yes                | Lighter GPL—used often in libraries.                               |
| **BSD 2-Clause**         | ✅ Yes                | Simple, permissive, similar to MIT.                                |
| **BSD 3-Clause**         | ✅ Yes                | Like BSD-2 but adds "No endorsement" clause.                       |
| **MPL-2.0**              | ✅ Yes                | Weak copy-left. Only modified files must be open.                  |
| **Unlicense / none.txt** | ✅ (or Public Domain) | Total freedom. No conditions.                                      |

<hr>
<br>
<br>

#  What Isn't Open Source?
If you add something like closed.txt or your own custom restrictive license, that’s **not open-source** unless it explicitly grants the four freedoms:

* To use
* To study
* To modify
* To distribute

<hr>
<br>
<br>

# How ```licence``` works?

```bash

[✔] Fetching available licenses...
[✔] Displaying interactive selection menu
    → Choose from: MIT, GPL-3.0, Apache-2.0, BSD-2-Clause, etc.

[✔] Selected: MIT License
[✔] Injecting copyright...
    © 2025 Akshat – All rights reserved (MIT)

[✔] Writing LICENSE file to current directory: ./LICENSE

📄 License successfully generated!

```
<hr>
<br>
<br>

# Flags : ```list```, ```gen```, ```show```

### ```--list```
The ```list``` flag displays all available **open-source license** templates built into the cook CLI.

It lets you quickly see which licenses you can choose from when generating a new license file.
```bash
username@Userpc:~/Project$ cook licence list

LICENCE LIST
  1. APACHE-2
  2. BSD-2
  3. BSD-3
  4. CLOSED
  5. GPL
  6. LGPL
  7. MIT
  8. MPL-2
  9. BASIC
```
<hr>

### ```--gen```

The ```gen``` flag generates a license file based on the selected license and drops it into your current working directory.

```bash
username@Userpc:~/Project$ cook licence gen

[?] Please select a license for your project: 
 > APACHE-2
   BSD-2
   BSD-3
   CLOSED
   GPL
   LGPL
   MIT
   MPL-2
   BASIC
```
Then you write the name you want in the license.
```bash
Selected license: APACHE-2
Please enter your project name: NAME
LICENSE file created successfully.
```
<hr>

### ```--show```
The ```show``` flag lets you preview any license template before applying it to your project.

You can browse the exact contents of a license (like MIT, GPL, Apache, etc.) and read its terms.

```bash
username@Userpc:~/Project$ cook licence show

[?] Please select a license for your project: 
   APACHE-2
   BSD-2
   BSD-3
   CLOSED
   GPL
   LGPL
   MIT
   MPL-2
 >  BASIC
```
It will show you the preview of the selected license.
```bash
Selected license: BASIC
Copyright 2025 PROJECT NAME                                                                                                     

This is free and unencumbered software released into the public domain.                                                         

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a    
compiled binary, for any purpose, commercial or non-commercial, and by any means......................
```
<hr>