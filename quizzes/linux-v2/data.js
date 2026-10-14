/**
 * Linux v2 — quiz data
 * ---------------------------------------------------------------------
 * Pure data. No quiz logic lives here — see /assets/js/quiz-engine.js
 * for that. To add questions, add objects to a set's `questions` array
 * following the same shape: { q, options, answer }.
 * `answer` is the zero-based index into `options`.
 *
 * Sets are organised by topic:
 *   A — Permissions, Ownership & Sudo
 *   B — Network Configuration
 *   C — Servers & Services
 * ---------------------------------------------------------------------
 */

window.QUIZ_DATA = {
  title: "Linux v2",

  sets: {
    A: {
      label: "Set A — Permissions & Sudo",
      questions: [
        { q: "Linux divides file access into which three basic permissions?", options: ["Open, edit, and run", "Read, write, and execute", "Create, delete, and rename", "Read, copy, and move"], answer: 1 },
        { q: "Identification: Which command changes the permissions of a file or directory?", options: ["chmod", "chown", "chgrp", "passwd"], answer: 0 },
        { q: "Identification: Which command changes the owner (and optionally the group) of a file or directory?", options: ["chmod", "usermod", "chown", "umask"], answer: 2 },
        { q: "What are the three ownership classes of a Linux file?", options: ["User (owner), Group, and Other", "Root, Admin, and Guest", "User, Staff, and Public", "Owner, Editor, and Viewer"], answer: 0 },
        { q: "By default, who becomes the owner of a newly created file?", options: ["The root user", "The first member of the group", "The last user who edited it", "The user who created it"], answer: 3 },
        { q: "What does read (r) permission on a directory allow you to do?", options: ["Add new files to it", "Delete the directory", "Run programs inside it", "List its contents"], answer: 3 },
        { q: "What does write (w) permission on a directory allow you to do?", options: ["Only view the file names", "Only read the contents of files", "Change the directory's owner", "Add, remove, and rename files stored in it"], answer: 3 },
        { q: "Scenario: A script run.sh has rw- for its owner. Running ./run.sh gives 'Permission denied'. Which command fixes it?", options: ["chmod u-x run.sh", "chown +x run.sh", "chmod o-r run.sh", "chmod u+x run.sh"], answer: 3 },
        { q: "In an `ls -l` listing, what does a leading 'd' in drwxr-xr-x mean?", options: ["The entry is a deleted file", "The entry is a directory", "The entry is a device", "The entry is a data file"], answer: 1 },
        { q: "In -rw-r--r--, what access does each class have?", options: ["Owner: read/write; Group: read; Other: read", "Owner: read; Group: read/write; Other: read", "Owner, Group, and Other: read/write", "Owner: read/write/execute; Group: read; Other: none"], answer: 0 },
        { q: "What is the numeric value of rwx (read + write + execute)?", options: ["6", "5", "3", "7"], answer: 3 },
        { q: "What permissions does `chmod 754 file` set?", options: ["Owner rwx, Group r-x, Other r--", "Owner rwx, Group rwx, Other r--", "Owner rwx, Group r--, Other r-x", "Owner r-x, Group rwx, Other r--"], answer: 0 },
        { q: "Fill in the blank: To give the owner read/write and everyone else read-only on notes.txt, run chmod ____ notes.txt.", options: ["755", "666", "600", "644"], answer: 3 },
        { q: "Identification: In symbolic mode, which operator makes the specified modes the exact modes for the specified classes?", options: ["+", "-", "*", "="], answer: 3 },
        { q: "Which command removes write and execute permission from 'other' on netconfig.conf?", options: ["chmod o-wx netconfig.conf", "chmod o+wx netconfig.conf", "chmod u-wx netconfig.conf", "chmod o=wx netconfig.conf"], answer: 0 },
        { q: "What does the -R option do in `chmod -R 755 itemsDir`?", options: ["Makes the files read-only", "Removes the directory", "Restores the previous permissions", "Applies the change to the directory and everything inside it, recursively"], answer: 3 },
        { q: "What does `sudo chown alice:admins file1 file2` do?", options: ["Sets the owner to admins and the group to alice", "Changes the permissions of both files to alice:admins", "Sets the owner to alice and the group to admins on both files", "Copies file1 and file2 to alice's home directory"], answer: 2 },
        { q: "Which command adds the existing user bob to the sudo group without removing him from his other groups?", options: ["usermod -G sudo bob", "usermod -aG sudo bob", "chown sudo bob", "groupadd sudo bob"], answer: 1 },
        { q: "Identification: Which command should be used to safely edit the /etc/sudoers file?", options: ["visudo", "sudoers-edit", "editsudo", "sudo --edit-users"], answer: 0 },
        { q: "Which command lists the members of the sudo group so you can verify someone's access?", options: ["ls -l /etc/sudo", "groups --sudo", "getent group sudo", "whoami --sudo"], answer: 2 }
      ]
    },

    B: {
      label: "Set B — Network Configuration",
      questions: [
        { q: "What is the main purpose of the hosts file (/etc/hosts)?", options: ["Translating hostnames into IP addresses", "Storing user passwords", "Listing installed packages", "Defining firewall rules"], answer: 0 },
        { q: "Identification: Which file stores the computer's hostname?", options: ["/etc/hostname", "/etc/hosts", "/etc/network/hostname", "/var/hostname"], answer: 0 },
        { q: "Which command changes the hostname temporarily, with no restart needed?", options: ["sudo hostname new-hostname", "sudo nano /etc/hosts", "sudo netplan apply", "sudo ifconfig hostname new-hostname"], answer: 0 },
        { q: "Which command sets the hostname using systemd's hostnamectl tool?", options: ["hostnamectl set-hostname 'my-laptop'", "hostnamectl rename my-laptop", "hostname --systemd my-laptop", "sethost my-laptop"], answer: 0 },
        { q: "What does 'ifconfig' stand for?", options: ["Internet configuration", "IP configuration", "Internal configuration", "Interface configuration"], answer: 3 },
        { q: "How does iwconfig differ from ifconfig?", options: ["It only configures the loopback interface", "It is dedicated to wireless network interfaces only", "It edits the routing table", "It manages firewall rules"], answer: 1 },
        { q: "True or false: IP address changes made with ifconfig are permanent and survive a reboot.", options: ["True", "False"], answer: 1 },
        { q: "Which command assigns 192.168.100.100 with netmask 255.255.255.0 to the interface enp0s3?", options: ["sudo ifconfig 192.168.100.100 enp0s3 netmask 255.255.255.0", "sudo ifconfig netmask 255.255.255.0 enp0s3", "sudo iwconfig enp0s3 192.168.100.100", "sudo ifconfig enp0s3 192.168.100.100 netmask 255.255.255.0"], answer: 3 },
        { q: "Identification: Which file is edited to configure networking on Ubuntu Server 22 using netplan?", options: ["/etc/netplan/00-installer-config.yaml", "/etc/network/interfaces", "/etc/netplan/network.conf", "/etc/sysconfig/network"], answer: 0 },
        { q: "Scenario: You edited 00-installer-config.yaml but the network behavior did not change. Which step is missing?", options: ["Run sudo ifconfig -a", "Run sudo netplan apply", "Reinstall netplan", "Run sudo apt update"], answer: 1 },
        { q: "In a netplan file, what does `dhcp4: true` on an interface do?", options: ["Turns the interface off", "Assigns the static address 192.168.1.10", "Enables IPv6 only", "Gets its IPv4 settings automatically from a DHCP server"], answer: 3 },
        { q: "To configure a static IPv4 address in netplan, what should dhcp4 be set to?", options: ["true", "auto", "static", "no (false)"], answer: 3 },
        { q: "In the Ubuntu Server 22 netplan static example, which entries define the default gateway?", options: ["gateway6: 192.168.1.1", "routes: - to: default, via: 192.168.1.1", "nameservers: 192.168.1.1", "addresses: default 192.168.1.1"], answer: 1 },
        { q: "Identification: Which file holds static network configuration on older Debian/Ubuntu systems?", options: ["/etc/netplan/interfaces.yaml", "/etc/hosts", "/etc/network/interfaces", "/etc/resolv.network"], answer: 2 },
        { q: "Which line in /etc/network/interfaces declares that eth0 uses a static IPv4 configuration?", options: ["iface eth0 inet dhcp", "iface eth0 inet static", "auto eth0 static ip", "static eth0 inet iface"], answer: 1 },
        { q: "Which command adds a default gateway to the routing table?", options: ["sudo route gw default add <interface>", "sudo route add default gw <ip_address> <interface>", "sudo ifconfig default gw <ip_address>", "sudo netplan route <ip_address>"], answer: 1 },
        { q: "Which command displays the kernel IP routing table in numeric form?", options: ["ifconfig -r", "ip hostname", "netplan show", "route -n"], answer: 3 },
        { q: "Which command restarts the networking service on Debian/Ubuntu using systemd?", options: ["sudo systemctl reload hosts", "sudo service ifconfig restart", "sudo systemctl restart networking.service", "sudo netplan restart ifconfig"], answer: 2 },
        { q: "Identification: Besides ifconfig, which command shows the IP addresses of your interfaces?", options: ["ip a (ip address)", "iplist", "hostname -x", "ipcalc -a"], answer: 0 },
        { q: "In the nano editor, which key combinations save the file and then exit?", options: ["Ctrl+S to save, Ctrl+Q to exit", "Ctrl+X to save, Ctrl+O to exit", ":w to save, :q to exit", "Ctrl+O to save, Ctrl+X to exit"], answer: 3 }
      ]
    },

    C: {
      label: "Set C — Servers & Services",
      questions: [
        { q: "What is a server in the client–server model?", options: ["Hardware or software that provides functionality for other programs or devices, called clients", "A computer that can only be used by one person", "A program that requests services from clients", "A device that stores only backup data"], answer: 0 },
        { q: "True or false: What separates a server from a workstation is mainly the hardware it uses, not the function it performs.", options: ["True", "False"], answer: 1 },
        { q: "Identification: Which server type translates domain names into IP addresses, commonly using BIND9 on Linux?", options: ["DHCP server", "DNS server", "Proxy server", "Print server"], answer: 1 },
        { q: "Identification: Which Linux software provides file-sharing services that work with Windows networks?", options: ["Squid", "Postfix", "Samba", "CUPS"], answer: 2 },
        { q: "Which of these is proxy server software?", options: ["Squid", "Postfix", "Apache", "CUPS"], answer: 0 },
        { q: "What does the tasksel tool do on Debian/Ubuntu?", options: ["Schedules jobs to run at certain times", "Lists running processes", "Installs multiple related packages together as a coordinated 'task'", "Monitors disk usage"], answer: 2 },
        { q: "Wine is a recursive backronym. What does it stand for?", options: ["Windows Is Not Emulated", "Wine Is Native Executable", "Windows Interface for Native Execution", "Wine Is Not an Emulator"], answer: 3 },
        { q: "What does the acronym LAMP stand for?", options: ["Linux, Nginx, MySQL, PHP", "Linux, Apache, MySQL, PHP", "Linux, Apache, MongoDB, Python", "Unix, Apache, MySQL, PHP"], answer: 1 },
        { q: "Which command installs the Apache web server on Ubuntu?", options: ["sudo apt install httpd-server", "sudo apt install apache-lamp", "sudo apt install apache2", "sudo apt install nginx2"], answer: 2 },
        { q: "Which UFW application profile opens both port 80 and port 443?", options: ["Apache", "Apache Secure", "Apache Full", "OpenSSH"], answer: 2 },
        { q: "Which command runs the interactive hardening script for a freshly installed MySQL server?", options: ["sudo mysql_harden", "sudo apt secure mysql", "sudo mysqladmin --secure", "sudo mysql_secure_installation"], answer: 3 },
        { q: "Which pairing is correct for installing an SSH server on Ubuntu and its standard TCP port?", options: ["sudo apt install sshd — port 21", "sudo apt install openssh-server — port 23", "sudo apt install ssh-client — port 80", "sudo apt install openssh-server — port 22"], answer: 3 },
        { q: "Identification: Which command copies your public SSH key to a remote server for password-less login?", options: ["ssh-copy-id", "ssh-keygen -t rsa", "ssh-add", "scp-key"], answer: 0 },
        { q: "Which package provides the FTP server installed in the vsftpd lesson?", options: ["putty", "bind9", "squid", "vsftpd"], answer: 3 },
        { q: "Which UFW command allows FTP control traffic?", options: ["sudo ufw allow 22/tcp", "sudo ufw allow 21/tcp", "sudo ufw deny 21/tcp", "sudo ufw allow 443/tcp"], answer: 1 },
        { q: "Which command restarts the Apache service named httpd using systemd?", options: ["sudo systemd restart httpd", "sudo systemctl reload-all httpd", "sudo restart service httpd", "sudo systemctl restart httpd"], answer: 3 },
        { q: "Identification: Which file is edited to configure the ISC DHCP server?", options: ["/etc/dhcp/server.yaml", "/etc/network/dhcp.conf", "/etc/dhcpd/hosts", "/etc/dhcp/dhcpd.conf"], answer: 3 },
        { q: "In dhcpd.conf, what does the `authoritative;` statement indicate?", options: ["The server hands out static addresses only", "This is the official (only) DHCP server on the network", "Clients must provide a password", "The server is a backup"], answer: 1 },
        { q: "A dhcpd subnet block uses `range 192.168.100.101 192.168.100.200;`. How many addresses can be leased?", options: ["99", "101", "100", "200"], answer: 2 },
        { q: "Which block gives one specific machine the same IP address every time through DHCP?", options: ["subnet web-server { range 192.168.100.9; }", "authoritative web-server 192.168.100.9;", "host web-server { hardware ethernet 00:0c:29:c3:a0:1b; fixed-address 192.168.100.9; }", "option routers 192.168.100.9;"], answer: 2 }
      ]
    }
  }
};