/**
 * Linux — quiz data
 * ---------------------------------------------------------------------
 * Pure data. No quiz logic lives here — see /assets/js/quiz-engine.js
 * for that. To add questions, add objects to a set's `questions` array
 * following the same shape: { q, options, answer }.
 * `answer` is the zero-based index into `options`.
 *
 * To add a whole new set, copy the shape of an existing one
 * (a `label` plus a `questions` array) and give it a new key.
 * ---------------------------------------------------------------------
 */

window.QUIZ_DATA = {
  title: "Linux",

  sets: {
    A: {
      label: "Set A — Fundamentals",
      questions: [
        { q: "In what year was the original Unix operating system developed?", options: ["1969", "1977", "1983", "1991"], answer: 0 },
        { q: "Who developed the original Unix operating system at AT&T Bell Labs?", options: ["Linus Torvalds and Richard Stallman", "Ken Thompson and Dennis Ritchie", "Andrew Tanenbaum and Bill Joy", "David Korn and Steve Bourne"], answer: 1 },
        { q: "In what year did Richard Stallman start the GNU project?", options: ["1969", "1977", "1983", "1987"], answer: 2 },
        { q: "Who started the GNU project?", options: ["Linus Torvalds", "Andrew S. Tanenbaum", "Richard Stallman", "Dennis Ritchie"], answer: 2 },
        { q: "In what year was MINIX released?", options: ["1983", "1987", "1991", "1996"], answer: 1 },
        { q: "Who created the MINIX operating system?", options: ["Linus Torvalds", "Richard Stallman", "Ken Thompson", "Andrew S. Tanenbaum"], answer: 3 },
        { q: "Which operating system was designed primarily for academic use rather than production systems?", options: ["MINIX", "Ubuntu", "Windows NT", "macOS"], answer: 0 },
        { q: "In what year was the Linux kernel first released by Linus Torvalds?", options: ["1987", "1991", "1994", "1996"], answer: 1 },
        { q: "Who created the Linux kernel?", options: ["Richard Stallman", "Andrew S. Tanenbaum", "Linus Torvalds", "Dennis Ritchie"], answer: 2 },
        { q: "What does the recursive acronym GNU stand for?", options: ["Global Network Utility", "GNU's Not Unix", "General Unix", "GNU Network Undertaking"], answer: 1 },
        { q: "What is the primary role of the kernel in an operating system?", options: ["It provides the graphical desktop environment", "It manages hardware, memory, and CPU time as the core of the OS", "It is a package manager", "It is a text editor bundled with Linux"], answer: 1 },
        { q: "Which file system did Linux use first, inherited from cross-development under another OS?", options: ["ext4", "NTFS", "The MINIX file system", "Btrfs"], answer: 2 },
        { q: "What was the maximum file system size supported by the original Minix file system?", options: ["16MB", "64MB", "2TB", "1 Exabyte"], answer: 1 },
        { q: "What was the maximum filename length under the original Minix file system?", options: ["8 characters", "14 characters", "64 characters", "255 characters"], answer: 1 },
        { q: "Which common Linux file system does NOT use journaling?", options: ["ext3", "ext4", "ext2", "Btrfs"], answer: 2 },
        { q: "Which ext-family file system was the first to introduce journaling?", options: ["ext", "ext2", "ext3", "ext4"], answer: 2 },
        { q: "Which directory in the Linux file system hierarchy stores configuration files?", options: ["/bin", "/etc", "/var", "/dev"], answer: 1 },
        { q: "Which directory holds essential executable binaries needed to boot or repair the system?", options: ["/etc", "/bin", "/var", "/opt"], answer: 1 },
        { q: "Which directory is the home directory for the root user?", options: ["/home", "/root", "/usr", "/srv"], answer: 1 },
        { q: "Which package manager is the defining feature of Arch Linux?", options: ["apt", "yum", "pacman", "dnf"], answer: 2 }
      ]
    },

    B: {
      label: "Set B — Applications",
      questions: [
        { q: "You want to check log files and other data that changes constantly during system operation. Which directory should you look in?", options: ["/var", "/boot", "/opt", "/lib"], answer: 0 },
        { q: "You're troubleshooting a boot failure and need the kernel image and initrd files. Which directory should you check?", options: ["/etc", "/boot", "/tmp", "/proc"], answer: 1 },
        { q: "On an Arch Linux system, which command synchronizes package databases and upgrades all packages?", options: ["apt upgrade", "yum update", "pacman -Syu", "dnf groupinstall"], answer: 2 },
        { q: "You are managing an Ubuntu server and need to install a new package. Which tool should you use?", options: ["pacman", "apt / apt-get", "zypper", "rpm"], answer: 1 },
        { q: "A Fedora administrator wants to update all installed software. Which command is appropriate?", options: ["apt update", "pacman -Syu", "dnf update", "npm update"], answer: 2 },
        { q: "You need administrative binaries like fsck, init, and route on a Linux system. In which directory would you expect to find them?", options: ["/sbin", "/home", "/media", "/srv"], answer: 0 },
        { q: "A Linux distribution stores site-specific web server data. Which directory is intended for that purpose?", options: ["/srv", "/dev", "/lib", "/mnt"], answer: 0 },
        { q: "You want a shell with built-in arithmetic support and syntax that resembles the C programming language. Which shell fits this description?", options: ["Bourne shell (sh)", "C shell (csh)", "Bash", "Bourne shell only"], answer: 1 },
        { q: "You want the default interactive Linux shell that supports command history recall and arrow-key editing. Which shell is this?", options: ["Bourne shell (sh)", "GNU Bourne-Again shell (bash)", "TENEX C shell only", "None of these support history"], answer: 1 },
        { q: "You're formatting a USB flash drive and want a file system that minimizes write cycles by avoiding a journal. Which is the better choice?", options: ["ext3", "ext4 with journaling enabled", "ext2", "ReiserFS"], answer: 2 },
        { q: "You need a file system supporting volumes as large as an Exabyte for a large storage server. Which file systems support this scale?", options: ["Minix file system", "ext4 and Btrfs", "FAT32", "ext2"], answer: 1 },
        { q: "You want a Linux boot loader that supports multiboot menus and booting over a network. Which should you choose?", options: ["GNU GRUB", "LILO", "Syslinux only", "BURG only"], answer: 0 },
        { q: "You come across an older Linux system using a boot loader whose development was discontinued in 2015. Which boot loader is this most likely to be?", options: ["GNU GRUB", "LILO", "BURG", "Syslinux"], answer: 1 },
        { q: "You need a kernel design that combines the speed of a monolithic kernel with the modularity of a microkernel, as used by Windows NT. What kernel type is this?", options: ["Monolithic kernel", "Exokernel", "Hybrid kernel", "Nanokernel"], answer: 2 },
        { q: "You are designing a kernel that keeps most services in user space for stability, similar to MINIX or Mach. What kernel type are you building?", options: ["Monolithic kernel", "Microkernel", "Hybrid kernel", "Nanokernel"], answer: 1 },
        { q: "Linux was designed with all OS services running in kernel space for maximum performance, at the cost of complexity. What kernel type is this?", options: ["Microkernel", "Exokernel", "Monolithic kernel", "Nanokernel"], answer: 2 },
        { q: "You see a terminal prompt ending in '#' rather than '$'. What does this typically indicate?", options: ["You are logged in as a regular user", "You are logged in as the root user", "The shell has crashed", "The system is in single-user recovery mode only"], answer: 1 },
        { q: "You need to find a regular user's personal files and settings on a Linux system. Which directory should you check?", options: ["/root", "/home", "/etc", "/srv"], answer: 1 },
        { q: "You want to inspect device files such as null and random devices on a Linux system. Which directory holds them?", options: ["/dev", "/proc", "/sys", "/opt"], answer: 0 },
        { q: "A CentOS administrator wants to check for available package updates without installing them yet. Which command fits?", options: ["yum check-update", "pacman -Syu", "apt upgrade", "dnf install"], answer: 0 }
      ]
    },

    C: {
      label: "Set C — Debugging",
      questions: [
        { q: "True or false: The Linux kernel is classified as a monolithic kernel.", options: ["True", "False"], answer: 0 },
        { q: "True or false: The Windows NT kernel is classified as a hybrid kernel.", options: ["True", "False"], answer: 0 },
        { q: "True or false: macOS's Darwin (XNU) kernel, built on Mach plus BSD components, is classified as a hybrid kernel.", options: ["True", "False"], answer: 0 },
        { q: "A student claims MINIX was built primarily as a commercial production server OS. Is this correct?", options: ["Correct — MINIX targeted production servers", "Incorrect — MINIX was intended for academic use"], answer: 1 },
        { q: "A student claims GNU's own kernel, Hurd, is the kernel most Linux distributions use today. What's wrong with this claim?", options: ["Nothing — Hurd is the standard Linux kernel", "Hurd never gained enough developers; the Linux kernel is used instead, forming 'GNU/Linux'"], answer: 1 },
        { q: "True or false: ext2 uses journaling by default.", options: ["True", "False"], answer: 1 },
        { q: "True or false: ext3 added journaling on top of the ext2 design.", options: ["True", "False"], answer: 0 },
        { q: "A colleague says /etc is meant to store user application binaries. What's the correct description?", options: ["/etc is meant to store static, host-specific configuration files, not binaries", "The colleague is correct"], answer: 0 },
        { q: "A colleague says /bin only contains optional, non-essential programs. What's actually true?", options: ["The colleague is correct", "/bin contains essential command binaries needed for booting and repairing the system"], answer: 1 },
        { q: "A developer states that Linux's very first file system was ext2. What is wrong with this statement?", options: ["Nothing is wrong", "Linux's first file system was actually the MINIX file system; ext2 came later"], answer: 1 },
        { q: "True or false: Richard Stallman personally created the Linux kernel.", options: ["True", "False — Linus Torvalds created the Linux kernel; Stallman started the GNU project"], answer: 1 },
        { q: "True or false: Linus Torvalds released the first version of the Linux kernel in 1983.", options: ["True", "False — the Linux kernel was first released in 1991"], answer: 1 },
        { q: "A student claims Windows uses a monolithic kernel just like Linux. Is this accurate?", options: ["Accurate", "Inaccurate — Windows NT uses a hybrid kernel, while Linux uses a monolithic kernel"], answer: 1 },
        { q: "A student claims Arch Linux's package manager is apt. What is the correct package manager?", options: ["The student is correct — it is apt", "Incorrect — Arch Linux uses pacman"], answer: 1 },
        { q: "A student claims Fedora uses .deb packages. What is actually true?", options: ["The student is correct", "Incorrect — Fedora uses .rpm packages managed with dnf"], answer: 1 },
        { q: "A student says the root user's home directory is /home/root. What is the correct path?", options: ["The student is correct", "Incorrect — the root user's home directory is /root"], answer: 1 },
        { q: "A student claims ext4 must always use a journal with no exceptions. What is the nuance here?", options: ["Correct, ext4 always requires a journal", "Incorrect — ext4 supports an optional journal-less mode"], answer: 1 },
        { q: "A student claims BSD was released by AT&T in 1977. What is the correct origin?", options: ["Correct, AT&T released BSD", "Incorrect — BSD was released by the University of California, Berkeley"], answer: 1 },
        { q: "True or false: GNU is a recursive acronym standing for 'GNU's Not Unix.'", options: ["True", "False"], answer: 0 },
        { q: "A student claims the C shell's complete path-name is /bin/bash. What is the correct path for the C shell?", options: ["The student is correct", "Incorrect — the C shell's path is /bin/csh; /bin/bash is the Bash shell"], answer: 1 }
      ]
    }
  }
};