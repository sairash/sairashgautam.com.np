---
title: How to Host a SSH App Using Nginx
description: Learn how to host SSH applications like pomossh
head:
    - ['link', {rel: 'prefetch', as: 'image', href: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t07ToMRQDdIqhJteX6svxHmo2KjY3MVwz9bCa'}]
    - ['meta', { name: 'keywords', content: 'Learn how to host SSH applications like pomossh' }]
    - ['meta', { property: 'og:description', content: 'Learn how to host SSH applications like pomossh' }]
    - ['meta', { property: 'og:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t07ToMRQDdIqhJteX6svxHmo2KjY3MVwz9bCa' }]
    - ['meta', { name: 'twitter:description', content: 'Learn how to host SSH applications like pomossh' }]
    - ['meta', { name: 'twitter:image', content: 'https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t07ToMRQDdIqhJteX6svxHmo2KjY3MVwz9bCa' }]
date: 2025-03-20
---

# How to Host a SSH App Using Nginx

[<- Back to blogs](/blog)

![Host SSH App](https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t07ToMRQDdIqhJteX6svxHmo2KjY3MVwz9bCa)
*Learn how to deploy a Charmbracelet Wish TUI (Terminal User Interface) SSH app on a VPS, proxy it through Nginx and Cloudflare, fix color issues, and ensure reliability.*

I wrote an SSH terminal application using [wish](https://github.com/charmbracelet/wish/) and [bubbletea](https://github.com/charmbracelet/bubbletea). Everything was going smoothly until it was time to host it. I wasn't sure how to proceed since I had never hosted an SSH application before, and I was surprised by the lack of articles on this topic. This blog provides an overview of what I needed to do and how I successfully hosted [POMO SSH](https://pomo.sairashgautam.com.np).

## Introduction

Terminal-based applications built with frameworks like [Charmbracelet](https://charm.sh/) (Bubble Tea[,](https://charm.sh/) Lip Gloss) offer rich interactive experiences. But deploying them over SSH on a VPS while preserving colors and handling TTY allocation can be tricky. In this guide, we’ll:

1. Proxy a Wish-based SSH server through **Nginx**.
    
2. Run the app as a **systemd service**.
    
3. Fix **color/TTY issues** in headless environments.
    
4. Secure the setup with **Cloudflare DNS**.
    

## Prerequisites

* A VPS (Any Operating System).
    
* Domain name ([pomo.sairashgautam.com.np](http://pomo.sairashgautam.com.np)).
    
* A Wish/BubbleTea SSH app.
    

## Configure Cloudflare:

If you are using Cloudflare as your reverse proxy provider, then only the following step is needed. Otherwise, you can skip to the next topic.

![Cloudflare Screenshot](https://cdn.hashnode.com/res/hashnode/image/upload/v1742664371134/25965c39-6bd7-40b6-a342-09a01a254b72.png)

As shown in the image above, you need to switch the proxy status to "DNS only" because Cloudflare’s free plan does not proxy TCP traffic, such as SSH.

## Nginx TCP Proxy Setup

Since SSH is a TCP protocol, we’ll use Nginx’s `stream` module which is used to handle TCP and UDP traffic, providing functionalities such as load balancing, proxying, and SSL/TLS termination for non-HTTP protocols.

#### **Step 1: Configure Nginx**

Edit `/etc/nginx/nginx.conf` and add:

```nginx
stream {
    server {
        listen 22;                   # Listen on default SSH port
        proxy_pass 127.0.0.1:13234;  # Forward to Wish app
        proxy_responses 0;           # Required for SSH
    }
}
```

Now, here's the part where you need to set the port and be extra careful. You are trying to override the default SSH port used to log in to your VPS. You might wonder why this is necessary. If you want your users to access your application without specifying the port, you need to do this.

```bash
ssh pomo.sairashgautam.com.np # no need to provide port as the default is 22
```

If you skip this step, your users will have to specify the port.

```bash
ssh pomo.sairashgautam.com.np -p 2222 # provide port manually
```

#### **Step 2: Free Up Port 22 (If Needed)**

If your VPS’s default SSH server uses port `22`, reconfigure it:

1. Edit `/etc/ssh/sshd_config`:
    
    ```bash
    Port 2222  # Change to a new port
    ```
    
2. Restart SSH and update firewall:
    
    ```bash
    sudo systemctl restart ssh
    sudo ufw allow 2222/tcp
    ```
    

#### **Step 3: Allow Port 22 for Nginx**

```bash
sudo ufw allow 22/tcp
sudo nginx -t
sudo systemctl reload nginx
```

#### **Step 4: Test SSH Connection**

```bash
ssh pomo.sairashgautam.com.np  # Should connect to your ssh application
```

Note: To connect to your Wish application or any other SSH application, make sure it is running.

---

## Run as a Systemd Service

To run your app in the background and make sure it continues running even after reboots and crashes, let's create a **systemd** service.

#### **Step 1: Create Service File**

Save to `/etc/systemd/system/myapp.service`:

```ini
[Unit]
Description=Myapp (SSH App)
After=network.target

[Service]
Type=simple
User=userapp
Group=myapp
WorkingDirectory=/path/to/workdir  # Replace to your path

Environment=TERM=xterm-256color    # Force 256-color mode
Environment=COLORTERM=truecolor    # Enable truecolor
StandardInput=tty                  # Allocate TTY


# Critical PTY allocation settings
TTYPath=/dev/tty0
TTYReset=yes
TTYVHangup=yes
TTYVTDisallocate=yes               # Cleanup TTY on exit

# Force PTY allocation with explicit PAM session
PAMName=login
UtmpIdentifier=myapp
UtmpMode=user

# Use 'script' to force PTY allocation
ExecStart=/usr/bin/script -q -c "/path/to/binary" /dev/null # Replace to your go bin

Restart=on-failure         # Auto-restart on crashes
RestartSec=5               # Wait 5 seconds before retrying
StartLimitIntervalSec=0    # Disable restart limits

[Install]
WantedBy=multi-user.target  # Start on system boot
```

If you've seen the service example shared in the Wish documentation: [Link](https://github.com/charmbracelet/wish/?tab=readme-ov-file#running-with-systemd), it might look a bit different. That's because when I tried it, it didn't work as expected. It worked, but the colors from Lip Gloss didn't display correctly. So, I wrote this version to enable color. There might be better solutions, and if I find one, I'll update this section. (If you know any, please share them with me.)

#### **Explanation:**

Headless environments often lack proper terminal emulation, causing BubbleTea/LipGloss colors to vanish.

#### **Why It Happens**

* Systemd doesn’t allocate a **pseudo-terminal (PTY)** by default.
    
* Missing `TERM`/`COLORTERM` environment variables.
    

#### **The Fix**

1. **Force PTY Allocation**:
    
    * Use `script -q -c "command"` or `socat` in `ExecStart`.
        
2. **Set Terminal Environment**:
    
    ```ini
    Environment=TERM=xterm-256color
    Environment=COLORTERM=truecolor
    ```
    
3. **Add TTY Configuration**:
    
    ```ini
    StandardInput=tty
    TTYPath=/dev/tty0
    TTYReset=yes
    ```
    

#### **Step 2: Fix TTY Permissions**

```bash
sudo usermod -aG tty userapp  # Grant user access to TTY devices
```

#### **Step 3: Enable & Start Service**

```bash
sudo systemctl daemon-reload
sudo systemctl enable pomossh.service  # Start on boot
sudo systemctl start pomossh.service
```

#### **Step 4: Verify**

```bash
systemctl status pomossh.service  # Check service health
journalctl -u pomossh.service -f  # Tail logs
```

---

## Troubleshooting

* **No Colors?**
    
    * Verify `TERM` and `COLORTERM` are set.
        
    * Test manually: `script -q -c "./binary"`.
        
* **TTY Allocation Failed?**
    
    * Check user’s TTY group: `groups userapp`.
        
    * Run `strace -f -e trace=openat ./binary` to debug device access.
        

---

## Final Command

Connect to your TUI app:

```bash
ssh tui.example.com  # Enjoy your BubbleTea app in full color!
```

## Conclusion

By combining Nginx’s TCP proxying, systemd’s service management, and terminal emulation tricks, you can deploy SSH (Charmbracelet/BubbleTea) apps reliably. This setup works not just for SSH apps, but any TUI tool needing PTY allocation (e.g., SSH-based games, admin dashboards).

For advanced use cases, explore:

* [Cloudflare Zero Trust](https://developers.cloudflare.com/cloudflare-one/) (paid SSH proxying).
    
* `tmux` or `screen` for session persistence.
    

Hashnode: [Sairash Blogs](https://sairash.hashnode.dev/)

[Reply via Email](https://letterbird.co/sai)


<span style="color: gray; font-size: 14px;">Date: 2025-03-20</span>
<img src="/mascot/thumbsup.png" style="height: 170px; position: absolute; right: 0;" />