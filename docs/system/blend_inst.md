---
sidebar_position: 1
---

# System Installer

blendOS has implemented its own installer framework, `blend-inst`, written in Python. It's inspired by Crystal Linux's `jade` installer, which is written in Rust, but unlike it, `blend-inst` uses the squashfs provided by the live ISO, and doesn't bootstrap a whole new Arch installation, in a speedy installation time of around 2-3 minutes with a decent internet connection (tested with a 400Mbps internet connection in Bangalore, India).

## Stages

### Partition

XXX: Complete this section.

### Base setup

XXX: Complete this section.

### Install bootloader

XXX: Complete this section.

### Setup locales

XXX: Complete this section.

### Setup networking

XXX: Complete this section.

### Add users

XXX: Complete this section.

## Sample config

Here's the type of configuration `blend-inst` expects.

```json
{
    "partition": {
        "device": "/dev/randomdisk",
        "mode": "Auto",
        "efi": true,
        "partitions": [
            "none:/dev/randomdisk1:don't format"
        ]
    },
    "bootloader": {
        "type": "grub-efi",
        "location": "/boot/efi"
    },
    "locale": {
        "locale": [
            "en_US.UTF-8 UTF-8"
        ],
        "keymap": "us",
        "timezone": "GMT"
    },
    "networking": {
        "hostname": "blend",
        "ipv6": false
    },
    "users": [
        {
            "name": "user",
            "password": "SOME_PLAINTEXT_PASSWORD",
            "shell": "bash"
        }
    ],
    "flatpak": true,
    "kernel": "linux"
}
```